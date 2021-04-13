import React from 'react';
import {useQuery, QueryFunctionContext} from 'react-query';
import {ApiResponse, Pokemon} from '../types/pokemon';
import api from '../services/api';

export async function fetchPokemons(ctx: QueryFunctionContext<string[]>) {
  const [offSet] = ctx.queryKey;
  const {data} = await api.get<ApiResponse>(`/?limit=20&offSet=${offSet}`);

  return data;
}

export async function fetchPokemonsById(ctx: QueryFunctionContext<string[]>) {
  const [id] = ctx.queryKey;

  const {data} = await api.get<Pokemon>(`/${Number(id)}`);

  return data;
}

export const usePokemonsQuery = (offSet: string) =>
  useQuery([offSet], fetchPokemons, {
    staleTime: 60000 * 60 * 12,
  });

export const usePokemonsQueryById = (id: string) =>
  useQuery([id], fetchPokemonsById, {
    staleTime: 60000 * 60 * 12,
  });
