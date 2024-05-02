/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Card from "../../components/atoms/Card";
import Search from "../../components/atoms/Search";
import Spinner from "../../components/atoms/Spinner";
import RepoCard from "../../components/atoms/RepoCard";
import { notify } from "../../helpers";
import { useRepoStore } from "../../store/repo";
import { useUserStore } from "../../store/user";

const Home = () => {
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const repos = useRepoStore((state) => state.repos);
  const data = useUserStore((state) => state.data);
  const isLoading = useUserStore((state) => state.isLoading);
  const error = useUserStore((state) => state.error);

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const getUserInfo = () => {
    useUserStore.getState().getUser(name);
    useRepoStore.getState().getRepo(name);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const paginatedRepos = repos?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (error) {
      notify("error", error);
    }
  });
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-[30px] font-medium text-white py-10">
        Github user details
      </p>
      <Search
        onClick={getUserInfo}
        value={name}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.code === "Enter" && !e.shiftKey) {
            e.preventDefault();
            getUserInfo();
          }
        }}
        placeholder="Enter User Name"
        transparent={true}
        disabled={isLoading && true}
      />
      <div className="mt-[50px]">
        {isLoading ? (
          <Spinner size={60} color="#FFFFFF" />
        ) : (
          data && (
            <div className="flex sm:flex-row flex-col items-start  sm:space-x-10">
              <Card
                name={data?.name}
                location={data?.location}
                repos={data?.public_repos}
                followers={data?.followers}
                following={data?.following}
                created={data?.created_at}
                updated={data?.updated_at}
                url={data?.html_url}
                image_src={data?.avatar_url}
              />
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-0 mt-4">
                  {paginatedRepos.map((repo: any, index: number) => (
                    <RepoCard
                      key={index}
                      name={repo.name}
                      language={repo.language}
                      description={repo.description}
                      stars={repo.stargazers_count}
                      forks={repo.forks_count}
                    />
                  ))}
                </div>
                {paginatedRepos.length > 0 && (
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="bg-gray-800 text-white px-4 py-2 mr-2"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage * itemsPerPage >= repos.length}
                      className="bg-gray-800 text-white px-4 py-2"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Home;
