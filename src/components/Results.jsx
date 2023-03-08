import {useState} from "react";
import {BsArrowDown} from "react-icons/bs";

import Profile from "./Profile";
import Repos from "./Repos";

const Results = ({sort, users, username}) => {
  const [repoResults, setRepoResults] = useState("");
  const [isMoreClicked, setIsMoreClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const reposPerPage = 6;

  const handleClick = () => {
    if(!isMoreClicked) {
      setCurrentPage(prevState => prevState + 1);
    }

    fetch(
      `https://api.github.com/users/${username}/repos?page=${currentPage}&per_page=${reposPerPage}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setRepoResults(data));
  };

  return (
    <div className="w-full mt-10">
      <Profile users={users} handleClick={handleClick} />
      <div>
        {repoResults &&
          <>
            <h1 className="text-lg md:text-xl mt-8 text-center">Repositories⬇️</h1>
            {repoResults.map(repo => (
              <Repos key={repo.id} repo={repo} />
            ))}
            <div className="w-full mt-5 flex flex-col items-center">
              <button
                className="hover:translate-y-3 hover:scale-125 duration-200"
                onClick={() => {setIsMoreClicked(true); handleClick();}}
              >
                <BsArrowDown size={24} />
              </button>
              <p className="mt-10 text-gray-500 text-xs text-center md:text-base">Note: Refresh the page after making 3 requests</p>
            </div>  
          </>
        }
      </div>
    </div>
  );
};

export default Results;
