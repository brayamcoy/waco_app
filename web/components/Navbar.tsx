"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  return (
    <header>
      <nav className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="h-4/12 w-4/12">
            <img
              className="h-full w-full"
              src="/logo-waco.svg"
              alt="Logo"
            />
            </Link>
            {user && (
              <h2 className="text-gray-300 text-sm font-bold ml-5">
                Welcome, {user.first_name}
              </h2>
            )}
          </div>
          <div>
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex items-center">
                <Link
                  href="/users"
                  className="text-gray-300 hover:text-white font-bold py-2 px-2 mx-2"
                >
                  Users
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mx-2 rounded mr-6"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
