import { ItemDetail } from '../../src/types/item-detail.types';
import { Item } from '../../src/types/item.types';
import { MeliAvailableFilters } from '../../src/types/meli.types';
import {
  buildItem,
  buildItemDetail,
  getCategoryId,
} from '../../src/utils/item-builder';
import {
  meliAPIBehavior,
  mockBuildItem,
  mockBuildItemDetail,
  mockItem,
} from '../mocks-data';

describe('buildItem', () => {
  it('[SUCCESS] should build item response correctly', () => {
    const item: Item = buildItem(mockItem);
    expect(item).toEqual(mockBuildItem);
  });
});

describe('buildItemDetail', () => {
  it('[SUCCESS] should build item detail response correctly', () => {
    const itemDetail: ItemDetail = buildItemDetail(
      mockItem,
      meliAPIBehavior.itemDescription
    );
    expect(itemDetail).toEqual(mockBuildItemDetail);
  });
});

describe('getCategoryId', () => {
  it('[SUCCESS] should return the ID of the most relevant category when category filter exists', () => {
    const filters: MeliAvailableFilters[] = [
      {
        id: 'category',
        values: [{ id: 'electronics', name: 'Electronics', results: 100 }],
      },
      { id: 'brand', values: [{ id: 'apple', name: 'Apple', results: 50 }] },
    ];
    const categoryId = getCategoryId(filters);
    expect(categoryId).toBe('electronics');
  });

  it('[SUCCESS] should return null when category filter does not exist', () => {
    const filters = [
      { id: 'brand', values: [{ id: 'apple', results: 50, name: '' }] },
    ];
    const categoryId = getCategoryId(filters);
    expect(categoryId).toBeUndefined();
  });

  it('[SUCCESS] should return null when category filter exists but contains no categories', () => {
    const filters = [{ id: 'category', values: [] }];
    const categoryId = getCategoryId(filters);
    expect(categoryId).toBeUndefined();
  });

  it('[SUCCESS] should correct sorts categories by results in descending order', () => {
    const filters = [
      {
        id: 'category',
        values: [
          { id: 'electronics', name: '', results: 100 },
          { id: 'books', name: '', results: 50 },
        ],
      },
    ];
    const categoryId = getCategoryId(filters);
    expect(categoryId).toBe('electronics');
  });
});
