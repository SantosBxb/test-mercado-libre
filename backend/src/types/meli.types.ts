/** Represents an item from the Mercado Libre API. */
export interface MeliItem {
  /** The unique identifier of the item. */
  id: string;
  /** The title or name of the item. */
  title: string;
  /** The price of the item. */
  price: number;
  /** The currency identifier for the price (e.g., USD, ARS). */
  currency_id: string;
  /** The URL of the item's thumbnail image. */
  thumbnail: string;
  /** The condition of the item (e.g., new, used). */
  condition: string;
  /** The shipping details including whether free shipping is available. */
  shipping: {
    /** Indicates if the item has free shipping. */
    free_shipping: boolean;
  };
  /** The location of the item, specifically the state name. */
  address: {
    /** The name of the state where the item is located. */
    state_name: string;
  };
  /** A list of pictures associated with the item. */
  pictures: { url: string }[];
  /** The quantity of the item that has been sold. */
  sold_quantity: number;
  /** The category id of the item. */
  category_id: number;
}

/** Represents the description of an item from the Mercado Libre API. */
export interface MeliDescription {
  /** The plain text description of the item. */
  plain_text: string;
}

/** Represents the category information from the Mercado Libre API. */
export interface MeliCategoryResponse {
  /** Category name. */
  name: string;
  /** Path from root. */
  path_from_root: {
    /** Category Id. */
    id: string;
    /** Category name. */
    name: string;
  }[];
}

/** Represents a filter from the Mercado Libre API. */
export interface MeliFilter {
  /** The unique identifier of the filter. */
  id: string;
  /** A list of values associated with the filter. */
  values: {
    /** Filter id. */
    id: string;
    /** Filter name. */
    name: string;
    /** Path from root. */
    path_from_root: {
      /** Filter id. */
      id: string;
      /** Filter name. */
      name: string;
    }[];
  }[];
}

/** Represents an available filter from the Mercado Libre API. */
export interface MeliAvailableFilters {
  /** The unique identifier of the filter. */
  id: string;
  /** A list of values associated with the filter. */
  values: {
    /** Filter id. */
    id: string;
    /** Filter name. */
    name: string;
    /** Filter total results. */
    results: number;
  }[];
}

/** Represents the response from the Mercado Libre API for a search query. */
export interface MeliSearchResponse {
  /** A list of items returned by the search. */
  results: MeliItem[];
  /** A list of filters applied to the search results. */
  filters: MeliFilter[];
  /** A list of available filters. */
  available_filters: MeliAvailableFilters[];
}
