import Image from "next/image";
import pokeDefaultImage from "../assets/poke_default.jpg";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { IPokemon } from "@/interfaces/Pokemon";
import { useAuth } from "@/hooks/useAuth";
import useCustomApiCall from "@/hooks/useCustomApiCall";
import { useState } from "react";

interface PokemonCardProps extends IPokemon {
  callFavorites: () => void;
  isFavorite: boolean;
  favoriteId: string | undefined;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  sprites: { front_default },
  abilities,
  isFavorite,
  callFavorites,
  favoriteId,
}) => {
  const ICON_SIZE = 24;
  const { user } = useAuth();
  console.log(user);
  const { callApi: callCreate } = useCustomApiCall({
    method: "post",
    path: `/users/favorites/${user?._id}`,
    body: {
      p_id: id,
    },
  });
  const { callApi: callDelete } = useCustomApiCall({
    method: "delete",
    path: `/users/favorites/${favoriteId}`,
  });

  const handleFavoriteClick = () => {
    if (isFavorite && favoriteId) callDelete();
    else callCreate();
    callFavorites();
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-gray-950">
      <Image
        className="w-full"
        src={front_default ?? pokeDefaultImage}
        width={200}
        height={200}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl mb-2">{name}</div>
          {user && (
            <button
              type="button"
              className="mb-2"
              onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <MdFavorite size={ICON_SIZE} />
              ) : (
                <MdOutlineFavoriteBorder size={ICON_SIZE} />
              )}
            </button>
          )}
        </div>
        {abilities.length > 0 &&
          abilities.map((ability) => (
            <p className="text-gray-700 text-base" key={ability.ability.name}>
              {ability.ability.name}
            </p>
          ))}
      </div>
    </div>
  );
};
