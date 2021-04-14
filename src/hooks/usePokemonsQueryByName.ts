import React from 'react';
import {useQuery, QueryFunctionContext} from 'react-query';
import {Pokemon} from '../types/pokemon';
import api from '../services/api';

export async function fetchPokemonsByName(ctx: QueryFunctionContext<string[]>) {
  const [name] = ctx.queryKey;

  const {data} = await api.get<Pokemon>(`/pokemon/${name}`);

  return data;
}

export const usePokemonsQueryByName = (name: string) =>
  useQuery([name], fetchPokemonsByName, {
    staleTime: 60000 * 60 * 12,
  });
