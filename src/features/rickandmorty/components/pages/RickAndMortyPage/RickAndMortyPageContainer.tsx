'use client';

import React from 'react';

import {
  CharacterFilter,
  fetchFilteredCharacters,
} from '@/features/rickandmorty/adapters';

import RickAndMortyPage from './RickAndMortyPage';

export const RickAndMortyPageContainer = async ({
  params,
}: {
  params: CharacterFilter;
}) => {
  const data = await fetchFilteredCharacters(params);
  return <RickAndMortyPage params={params} data={data} />;
};

export default RickAndMortyPageContainer;
