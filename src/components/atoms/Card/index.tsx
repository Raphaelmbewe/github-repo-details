import { FC } from "react";
import { formatDate } from "../../../helpers";

type userProps = {
  name: string;
  location: string;
  repos: number;
  following: number;
  followers: number;
  created: string;
  updated: string;
  url: string;
  image_src: string;
};

const Card: FC<userProps> = ({
  name,
  location,
  repos,
  followers,
  following,
  created,
  updated,
  url,
  image_src,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="flex flex-col  bg-white  rounded-lg shadow sm:max-w-[300px] w-full  hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-[320px!important] md:h-auto"
        src={image_src}
        alt="avatar"
      />
      <div className="flex flex-col justify-between items-start p-4 leading-normal">
        <h5 className="mb-2 text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white">
          Name: {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Location: {location || 'Unknown'}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Repos: {repos}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Followers: {followers}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Following: {following}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Created: {formatDate(created)}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Updated: {formatDate(updated)}
        </p>
      </div>
    </a>
  );
};
export default Card;
