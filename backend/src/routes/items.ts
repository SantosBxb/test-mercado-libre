import express from 'express';
import { getItems, getItemDetail } from '../controllers/items.controller';
import { getItemsMiddleware } from '../middlewares/items.middleware';

const router = express.Router();

/**
 * Handles GET requests to search for items.
 * Route: /api/items?q=:query
 */
router.get('/items', getItemsMiddleware, getItems);

/**
 * Handles GET requests to fetch item details by ID.
 * Route: /api/items/:id
 */
router.get('/items/:id', getItemDetail);

export default router;
