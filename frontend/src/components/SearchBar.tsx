'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '@styles/search-bar.module.scss';
import Image from 'next/image';

/**
 * Renders a search bar component that allows users to input and submit search queries.
 * When the form is submitted, it navigates to a new URL with the search query as a parameter.
 *
 * @component
 *
 * @example
 * <SearchBar />
 */
export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const hasQuery = searchParams.get('q');
    if (!hasQuery) {
      setQuery('');
    }
  }, [searchParams]);

  const isValidQuery = () => {
    const draftQuery = query.toLowerCase().trim();
    const currentQuery = searchParams.get('q')?.toLowerCase()?.trim();
    return draftQuery && currentQuery !== draftQuery;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidQuery()) {
      router.push(`/items?q=${query}`);
    }
  };

  return (
    <form
      className={styles.searchBar}
      onSubmit={handleSubmit}
      data-testid="search-form"
    >
      <label htmlFor="search-input">Buscar un producto</label>
      <input
        type="text"
        id="search-input"
        placeholder="Nunca dejes de buscar"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" title="Buscar" disabled={!isValidQuery()}>
        <Image src="/search.png" alt="Buscar" width={20} height={20} />
      </button>
    </form>
  );
}
