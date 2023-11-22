import { FC } from "react";
type repoProps = {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
};

const RepoCard: FC<repoProps> = ({
  name,
  description,
  language,
  stars,
  forks,
}) => {
  return (
    <div className="flex flex-col bg-transparent p-4 gap-y-4 dark:border-gray-700 border rounded-lg sm:w-[431.5px] w-full ">
      <div className="flex sm:flex-row sm:items-center  items-start flex-col justify-between ">
        <p className="text-md text-gray-600 font-medium">{name}</p>
        <div className="sm:mt-0 mt-2 border border-gray-400 rounded-[20px] px-4 py-1 text-white">
          Public
        </div>
      </div>
      <p className="text-white text-start">{description}</p>
      <div className="flex space-x-4">
        <p className="text-white">{language}</p>
        <p className="text-gray-600">Stars: {stars}</p>
        <p className="text-gray-600">Forks: {forks}</p>
      </div>
    </div>
  );
};
export default RepoCard;
