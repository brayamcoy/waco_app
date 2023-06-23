import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { IUser } from "@/interfaces/User";

export const useAuth = () => {
  const cookies = new Cookies();
  const router = useRouter();

  const initialToken = cookies.get("token");

  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [user, setUser] = useState<IUser | any>(null);
  const [token, setToken] = useState<string | null>(initialToken || null);

  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialUser = window.sessionStorage.getItem("user")
        ? JSON.parse(window.sessionStorage.getItem("user") ?? "")
        : null;
      setUser(initialUser);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(!loading);
      const response: AxiosResponse = await axios.post(`${url}/auth/signin`, {
        email,
        password,
      });
      const { token, user } = response.data;
      cookies.set("token", token, { path: "/" });
      sessionStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setToken(token);
      setLoading(!loading);
      router.push("/");
    } catch (error) {
      setLoading(!loading);
      setError(error);
    }
  };

  const signup = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(!loading);
      const response: AxiosResponse = await axios.post(`${url}/auth/signup`, {
        first_name,
        last_name,
        email,
        password,
      });
      const { token, user } = response.data;
      cookies.set("token", token, { path: "/" });
      sessionStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setToken(token);
      setLoading(!loading);
      router.push("/");
    } catch (error) {
      setLoading(!loading);
      setError(error);
    }
  };

  const logout = () => {
    cookies.remove("token", { path: "/" });
    sessionStorage.removeItem("user");
    setUser(null);
    setToken(null);
    router.push("/login");
  };

  return { user, token, error, loading, login, signup, logout };
};
