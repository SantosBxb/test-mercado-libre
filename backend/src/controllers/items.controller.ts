import { Request, Response } from 'express';
import {
  buildItem,
  buildItemDetail,
  getCategoryId,
} from '../utils/item-builder';
import meliClient from '../config/meli-client';
import enviroments from '../config/enviroments';
import { AxiosError } from 'axios';
import log from '../config/logger';
import { handleError } from '../utils/errors';
import { ItemsResponse } from '../types/items-response.types';
import {
  MeliCategoryResponse,
  MeliDescription,
  MeliItem,
  MeliSearchResponse,
} from '../types/meli.types';
import { ItemDetailResponse } from '../types/item-detail-response.types';
import { ErrorResponse } from '../types/error.types';

const { author, maxItems } = enviroments;
const getItemsPrefix = 'get_items';
const getItemDetailPrefix = 'get_item_detail';

/**
 * Fetches a list of items from Mercado Libre based on a search query.
 * @param {Request} req - The request object containing the search query.
 * @param {Response} res - The response object to return the search results.
 */
export const getItems = async (
  req: Request,
  res: Response<ItemsResponse | ErrorResponse>
) => {
  const query = req.query.q as string;
  log.info(`${getItemsPrefix}_started`, { query });

  try {
    const {
      data: { results, filters, available_filters },
    } = await meliClient.get<MeliSearchResponse>(
      `/sites/MLA/search?q=${query}&limit=${maxItems}`
    );

    const items = results.map((item) => buildItem(item));
    let categories: string[] = [];

    if (filters?.length) {
      const filter = filters.find((filter) => filter.id === 'category')
        ?.values[0];
      categories =
        filter?.path_from_root?.map((category) => category.name) || [];
    } else if (available_filters.length) {
      const categoryId = getCategoryId(available_filters);
      const {
        data: { path_from_root },
      } = await meliClient.get<MeliCategoryResponse>(
        `/categories/${categoryId}`
      );
      categories = path_from_root.map((category) => category.name);
    }

    log.info(`${getItemsPrefix}_successful`, { query });
    res.json({
      author,
      categories,
      items,
    });
  } catch (err) {
    const error = err as AxiosError;
    return handleError(res, error, getItemsPrefix, { query });
  }
};

/**
 * Fetches the details of a specific item from Mercado Libre based on item ID.
 * @param {Request} req - The request object containing the item ID.
 * @param {Response} res - The response object to return the item details.
 */
export const getItemDetail = async (
  req: Request,
  res: Response<ItemDetailResponse | ErrorResponse>
) => {
  const id = req.params.id;
  log.info(`${getItemDetailPrefix}_started`, { id });

  try {
    const [{ data: item }, { data: description }] = await Promise.all([
      meliClient.get<MeliItem>(`/items/${id}`),
      meliClient.get<MeliDescription>(`/items/${id}/description`),
    ]);
    const { data: categories } = await meliClient.get<MeliCategoryResponse>(
      `/categories/${item.category_id}`
    );

    log.info(`${getItemDetailPrefix}_successful`, { id });
    res.json({
      author,
      item: buildItemDetail(item, description),
      categories: categories.path_from_root.map((cat) => cat.name),
    });
  } catch (err) {
    const error = err as AxiosError;
    return handleError(res, error, getItemDetailPrefix, { id });
  }
};
