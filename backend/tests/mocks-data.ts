import { ItemDetail } from '../src/types/item-detail.types';
import { Item } from '../src/types/item.types';
import {
  MeliCategoryResponse,
  MeliDescription,
  MeliItem,
  MeliSearchResponse,
} from '../src/types/meli.types';

export const mockItem: MeliItem = {
  id: '1',
  title: 'Test Item',
  price: 1000,
  currency_id: 'ARS',
  thumbnail: 'http://example.com/image.jpg',
  condition: 'new',
  shipping: {
    free_shipping: true,
  },
  address: {
    state_name: 'Buenos Aires',
  },
  pictures: [{ url: 'http://example.com/image.jpg' }],
  sold_quantity: 10,
  category_id: 12345,
};

export const meliAPIBehavior = {
  search: {
    results: [mockItem],
    filters: [
      {
        id: 'category',
        values: [
          {
            name: 'Celulares y Smartphones',
            path_from_root: [
              {
                id: 'categoryId',
                name: 'Celulares y Teléfonos',
              },
              {
                id: 'categoryId2',
                name: 'Celulares y Smartphones',
              },
            ],
          },
        ],
      },
    ],
    available_filters: [
      {
        id: 'category',
        values: [
          {
            id: 'categoryId',
            name: 'Celulares y Teléfonos',
            results: 100,
          },
          {
            id: 'categoryId2',
            name: 'Electro',
            results: 10,
          },
        ],
      },
    ],
  } as MeliSearchResponse,
  item: mockItem as MeliItem,
  itemDescription: {
    plain_text: 'Item 1 description',
  } as MeliDescription,
  categories: {
    id: 12345,
    name: 'Celulares y Smartphones',
    path_from_root: [
      {
        id: 'MLA1051',
        name: 'Celulares y Teléfonos',
      },
      {
        id: 'MLA1055',
        name: 'Celulares y Smartphones',
      },
    ],
  } as MeliCategoryResponse,
};

export const mockBuildItem: Item = {
  id: mockItem.id,
  title: mockItem.title,
  price: {
    currency: mockItem.currency_id,
    amount: mockItem.price,
    decimals: 0,
  },
  picture: mockItem.thumbnail,
  condition: mockItem.condition,
  free_shipping: mockItem.shipping.free_shipping,
};

export const mockBuildItemDetail: ItemDetail = {
  ...mockBuildItem,
  sold_quantity: mockItem.sold_quantity,
  description: meliAPIBehavior.itemDescription.plain_text,
};
