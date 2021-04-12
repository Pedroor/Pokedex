import React from 'react';
import {useQuery, QueryFunctionContext} from 'react-query';
import api from '../services/api';

export async function fetchPokemons(ctx: QueryFunctionContext<string[]>) {
  const [name, offSet] = ctx.queryKey;

  const {data} = await api.get(`/${name}?limit=20&offSet=${offSet}`);

  return data;
}

export const usePokemonsQuery = (name: string, offSet: string) =>
  useQuery([name, offSet], fetchPokemons, {
    staleTime: 60000 * 60 * 12,
  });
