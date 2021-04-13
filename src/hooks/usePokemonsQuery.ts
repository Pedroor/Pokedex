import React from 'react';
import {useQuery, QueryFunctionContext} from 'react-query';
import {ApiResponse, Pokemon} from '../types/pokemon';
import api, {apiPaginate} from '../services/api';

export async function fetchPokemons(ctx: QueryFunctionContext<string[]>) {
  const [endpoint] = ctx.queryKey;
  const {data} = await apiPaginate.get<ApiResponse>(`${endpoint}?limit=10`);

  return data;
}

export async function fetchPokemonsById(ctx: QueryFunctionContext<string[]>) {
  const [id] = ctx.queryKey;

  const {data} = await api.get<Pokemon>(`/${Number(id)}`);

  return data;
}

export const usePokemonsQuery = (endpoint: string) =>
  useQuery([endpoint], fetchPokemons, {
    staleTime: 60000 * 60 * 12,
  });

export const usePokemonsQueryById = (id: string) =>
  useQuery([id], fetchPokemonsById, {
    staleTime: 60000 * 60 * 12,
  });
