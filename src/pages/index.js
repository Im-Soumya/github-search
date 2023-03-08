import { useState } from "react";
import Head from "next/head";

import Form from "../components/Form";
import Results from "../components/Results";
import NotFound from "../components/NotFound";

export default function Home() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("stargazers_count");
  const [userResults, setUserResults] = useState(null);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserResults(data);
      });
  };

  return (
    <>
      <Head>
        <title>Spot the Devs</title>
        <meta
          name="description"
          content="App for viewing Github Users and their repos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-24 min-h-screen px-7 lg:px-72 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold md:text-2xl mb-4">Spot the devs 🔍</h1>
        <Form
          query={query}
          sort={sort}
          handleSubmit={handleSubmit}
          handleQueryChange={handleQueryChange}
          handleSortChange={handleSortChange}
        />
        {userResults?.message ? (
          <NotFound />
        ) : (
          <>
            {userResults && (
              <Results
                sort={sort}
                users={userResults}
                username={userResults?.login}
              />
            )}
          </>
        )}
      </main>
    </>
  );
}
