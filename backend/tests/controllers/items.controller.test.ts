import { Request, Response } from 'express';
import {
  getItems,
  getItemDetail,
} from '../../src/controllers/items.controller';
import meliClient from '../../src/config/meli-client';
import {
  buildItem,
  buildItemDetail,
  getCategoryId,
} from '../../src/utils/item-builder';
import {
  meliAPIBehavior,
  mockBuildItem,
  mockBuildItemDetail,
} from '../mocks-data';
import log from '../../src/config/logger';

jest.mock('../../src/config/meli-client', () => ({
  get: jest.fn(),
}));
jest.mock('../../src/utils/item-builder');
jest.mock('../../src/config/logger');

describe('Items Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let getMock: jest.Mock;
  let buildItemMock: jest.Mock;
  let buildItemDetailMock: jest.Mock;
  let getCategoryIdMock: jest.Mock;

  beforeEach(() => {
    mockRequest = {
      query: {},
      params: {},
    };
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    getMock = meliClient.get as jest.Mock;
    buildItemMock = buildItem as jest.Mock;
    buildItemDetailMock = buildItemDetail as jest.Mock;
    getCategoryIdMock = getCategoryId as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getItems', () => {
    it('[SUCCESS] should return a list of items and categories', async () => {
      getMock.mockResolvedValue({
        data: meliAPIBehavior.search,
      });
      buildItemMock.mockReturnValue(mockBuildItem);
      mockRequest.query = { q: 'phone' };

      await getItems(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith({
        author: { name: 'Bryan', lastname: 'Santos Soto' },
        categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
        items: [mockBuildItem],
      });

      expect(getMock).toHaveBeenCalledTimes(1);
      expect(getMock).toHaveBeenCalledWith('/sites/MLA/search?q=phone&limit=4');

      expect(buildItem).toHaveBeenCalledTimes(1);
      expect(buildItem).toHaveBeenCalledWith(meliAPIBehavior.search.results[0]);

      expect(log.info).toHaveBeenCalledTimes(2);
      expect(log.info).toHaveBeenNthCalledWith(1, 'get_items_started', {
        query: 'phone',
      });
      expect(log.info).toHaveBeenNthCalledWith(2, 'get_items_successful', {
        query: 'phone',
      });

      expect(log.error).toHaveBeenCalledTimes(0);
    });

    it('[SUCCESS] should return a list of items and categories from categoryId', async () => {
      getMock.mockImplementation((url: string) => {
        if (url.includes('/categories')) {
          return Promise.resolve({ data: meliAPIBehavior.categories });
        }
        return Promise.resolve({
          data: { ...meliAPIBehavior.search, filters: [] },
        });
      });
      getCategoryIdMock.mockReturnValue('categoryId');
      buildItemMock.mockReturnValue(mockBuildItem);
      mockRequest.query = { q: 'phone' };

      await getItems(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith({
        author: { name: 'Bryan', lastname: 'Santos Soto' },
        categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
        items: [mockBuildItem],
      });

      expect(getMock).toHaveBeenCalledTimes(2);
      expect(getMock).toHaveBeenCalledWith('/sites/MLA/search?q=phone&limit=4');
      expect(getMock).toHaveBeenCalledWith('/categories/categoryId');

      expect(buildItem).toHaveBeenCalledTimes(1);
      expect(buildItem).toHaveBeenCalledWith(meliAPIBehavior.search.results[0]);

      expect(log.info).toHaveBeenCalledTimes(2);
      expect(log.info).toHaveBeenNthCalledWith(1, 'get_items_started', {
        query: 'phone',
      });
      expect(log.info).toHaveBeenNthCalledWith(2, 'get_items_successful', {
        query: 'phone',
      });

      expect(log.error).toHaveBeenCalledTimes(0);
    });

    it('[ERROR] should handle errors during fetching items', async () => {
      const error = new Error('Test error');
      getMock.mockRejectedValue(error);
      mockRequest.query = { q: 'phone' };

      await getItems(mockRequest as Request, mockResponse as Response);

      expect(log.error).toHaveBeenCalledTimes(1);
      expect(log.error).toHaveBeenCalledWith('get_items_failed', {
        query: 'phone',
        errorMessage: 'Test error',
      });

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.send).toHaveBeenCalledWith({
        error: 'An error occurred while fetching data from Mercado Libre',
      });
    });
  });

  describe('getItemDetail', () => {
    it('[SUCCESS] should return item details with description', async () => {
      getMock.mockImplementation((url: string) => {
        if (url.includes('/description')) {
          return Promise.resolve({ data: meliAPIBehavior.itemDescription });
        } else if (url.includes('/categories')) {
          return Promise.resolve({ data: meliAPIBehavior.categories });
        }
        return Promise.resolve({ data: meliAPIBehavior.item });
      });
      buildItemDetailMock.mockReturnValue(mockBuildItemDetail);
      mockRequest.params = { id: '1' };

      await getItemDetail(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith({
        author: { name: 'Bryan', lastname: 'Santos Soto' },
        item: mockBuildItemDetail,
        categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
      });

      expect(getMock).toHaveBeenCalledTimes(3);
      expect(getMock).toHaveBeenCalledWith('/items/1');
      expect(getMock).toHaveBeenCalledWith('/items/1/description');
      expect(getMock).toHaveBeenCalledWith('/categories/12345');

      expect(buildItemDetail).toHaveBeenCalledTimes(1);
      expect(buildItemDetail).toHaveBeenCalledWith(
        meliAPIBehavior.item,
        meliAPIBehavior.itemDescription
      );

      expect(log.info).toHaveBeenCalledTimes(2);
      expect(log.info).toHaveBeenNthCalledWith(1, 'get_item_detail_started', {
        id: '1',
      });
      expect(log.info).toHaveBeenNthCalledWith(
        2,
        'get_item_detail_successful',
        {
          id: '1',
        }
      );

      expect(log.error).toHaveBeenCalledTimes(0);
    });

    it('[ERROR] should handle errors during fetching item details', async () => {
      const error = new Error('Test error');
      getMock.mockRejectedValue(error);
      mockRequest.params = { id: '1' };

      await getItemDetail(mockRequest as Request, mockResponse as Response);

      expect(log.error).toHaveBeenCalledTimes(1);
      expect(log.error).toHaveBeenCalledWith('get_item_detail_failed', {
        id: '1',
        errorMessage: 'Test error',
      });

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.send).toHaveBeenCalledWith({
        error: 'An error occurred while fetching data from Mercado Libre',
      });
    });
  });
});
