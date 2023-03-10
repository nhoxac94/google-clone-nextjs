import WebSearchResults from '@/components/WebSearchResults';
import React from 'react';

export default async function WebSearch({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const data = await response.json();
  const results = data.items;
  return <>{results && <WebSearchResults results={data} />}</>;
}
