"use client";

import useCustomApiCall from "@/hooks/useCustomApiCall";
import CustomSpinner from "./CustomSpinner";
import { useEffect, useId } from "react";
import { toast } from "react-hot-toast";
import { UserCard } from "./UserCard";
import { IUser } from "@/interfaces/User";

export const Users: React.FC = () => {
  const id = useId();
  const { data, error, loading } = useCustomApiCall({
    method: "get",
    path: "/users",
    callSignal: true
  });

  useEffect(() => {
    if (error) toast.error(`${error.message}`);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.users.length > 0 &&
          data.users.map((user: IUser) => <UserCard key={user._id} {...user} />)}
      </div>
      <CustomSpinner loading={loading} />
    </div>
  );
};
