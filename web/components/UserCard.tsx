import Image from "next/image";
import defaultUserImage from "../assets/default_user.png";
import { IUser } from "@/interfaces/User";

interface UserCardProps extends IUser {}

export const UserCard: React.FC<UserCardProps> = ({
  first_name,
  last_name,
  email,
}: IUser) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-gray-950">
      <Image
        className="w-5/12 h-5/12"
        src={defaultUserImage}
        alt="User"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {first_name} {last_name}
        </div>
        <p className="text-gray-700 text-base">{email}</p>
      </div>
    </div>
  );
};
