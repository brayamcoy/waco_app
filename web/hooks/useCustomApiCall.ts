import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./useAuth";

interface ApiCallProps {
  method: "get" | "post" | "put" | "delete";
  path?: string;
  params?: Record<string, any>;
  body?: Record<string, any>;
  isPokeApi?: boolean;
  externalUrl?: boolean | string;
  callSignal?: boolean;
}

interface IpokemonList {
  name: string;
  url: string;
}

const useCustomApiCall = ({
  method,
  path = "",
  params = {},
  body = {},
  isPokeApi = false,
  externalUrl = false,
  callSignal = false,
}: ApiCallProps): {
  data: any | null;
  loading: boolean;
  error: any;
  callApi: () => void;
} => {
  const [data, setData] = useState<any | null>(null);
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [signal, setSignal] = useState(false); 

  const fetchPokemonData = async (pokemon: IpokemonList) =>
    await axios.get(pokemon.url).then((response) => response.data);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const pokeapiUrl = process.env.NEXT_PUBLIC_POKE_API_URL;
        const url = isPokeApi
          ? !externalUrl
            ? pokeapiUrl
            : externalUrl
          : backendUrl;
        let response: any;

        const axiosConfig = isPokeApi
          ? {}
          : { headers: { Authorization: `Bearer ${token}` } };

        switch (method) {
          case "get":
            if (isPokeApi) {
              const pokemonsResult = await axios.get(`${url}${path}`, {
                params,
              });
              const pokemonDataPromises = pokemonsResult.data.results.map(
                (pokemon: IpokemonList) => fetchPokemonData(pokemon)
              );
              const pokemonData = await Promise.all(pokemonDataPromises);
              response = { data: pokemonData };
            } else {
              response = await axios.get(`${url}${path}`, axiosConfig);
            }
            break;
          case "post":
            response = await axios.post(`${url}${path}`, body, axiosConfig);
            break;
          case "put":
            response = await axios.put(`${url}${path}`, body, axiosConfig);
            break;
          case "delete":
            response = await axios.delete(`${url}${path}`, axiosConfig);
            break;
          default:
            throw new Error(`Invalid HTTP method: ${method}`);
        }

        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    if (callSignal || signal) {
      fetchData();
      setSignal(false);
    }
  }, [callSignal, signal, token]);

  const callApi = () => {
    setSignal(true);
  };

  return { data, loading, error, callApi };
};

export default useCustomApiCall;
