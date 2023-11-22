/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/atoms/Card";
import Search from "../../components/atoms/Search";
import { userSelector, getUser, clear } from "../../state/reducers/user";
import { repoSelector, getRepos } from "../../state/reducers/repo";
import Spinner from "../../components/atoms/Spinner";
import RepoCard from "../../components/atoms/RepoCard";
import { notify } from "../../helpers";

const Home = () => {
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const { data, isLoading, error } = useSelector(userSelector);
  const { repos } = useSelector(repoSelector);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const getUserInfo = () => {
    dispatch(getUser(name) as any);
    dispatch(getRepos(name) as any);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const paginatedRepos = repos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (error) {
      notify("error", error);
      dispatch(clear());
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
