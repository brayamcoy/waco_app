"use client";

import useCustomApiCall from "@/hooks/useCustomApiCall";
import { PokemonCard } from "./PokemonCard";
import CustomSpinner from "./CustomSpinner";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { IPokemon } from "@/interfaces/Pokemon";
import { Favorites } from "@/interfaces/Favorites";
import { useAuth } from "@/hooks/useAuth";

export const Pokemons: React.FC = () => {
  const { user } = useAuth();
  const { data, error, loading } = useCustomApiCall({
    method: "get",
    path: "/pokemon",
    isPokeApi: true,
    callSignal: true,
  });

  const { data: favorites, callApi } = useCustomApiCall({
    method: "get",
    path: "/users/favorites",
    callSignal: true,
  });

  useEffect(() => {
    if (error) toast.error(`${error.message}`);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.length > 0 &&
          data.map((pokemon: IPokemon) => (
            <PokemonCard
              key={pokemon.id}
              {...pokemon}
              isFavorite={favorites?.favorites.some(
                (favorite: Favorites) =>
                  String(favorite?.pokemon_id) === String(pokemon.id)
              )}
              favoriteId={favorites?.favorites.filter(
                (favorite: Favorites) =>
                  String(favorite.pokemon_id) === String(pokemon.id) &&
                  favorite.user === user._id
              )[0]?.id}
              callFavorites={callApi}
            />
          ))}
      </div>
      <CustomSpinner loading={loading} />
    </div>
  );
};
