const Form = ({
  query,
  sort,
  handleSubmit,
  handleQueryChange,
  handleSortChange,
}) => {
  return (
    <div className="w-full border-1 border-gray-800 p-10 rounded-2xl shadow-md hover:border-gray-600 duration-200">
      <form
        className="grid grid-cols-1 place-items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search github users..."
          value={query}
          onChange={handleQueryChange}
          className="w-full py-3 mb-3 rounded-lg indent-5"
        />
        <div className="w-full mb-4 flex justify-evenly">
          <div className="flex">
            <input
              id="star-radio"
              type="radio"
              value="stargazers_count"
              name="star-radio"
              checked={sort === "stargazers_count"}
              onChange={handleSortChange}
              className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 focus:ring-2"
            />
            <label htmlFor="star-radio" className="ml-2 text-sm font-medium">
              Sort by stars
            </label>
          </div>
          <div className="flex">
            <input
              id="fork-radio"
              type="radio"
              value="forks_count"
              name="fork-radio"
              checked={sort === "forks_count"}
              onChange={handleSortChange}
              className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 focus:ring-2"
            />
            <label htmlFor="fork-radio" className="ml-2 text-sm font-medium">
              Sort by forks
            </label>
          </div>
        </div>
        <button
          disabled={!query}
          className="w-full py-2 rounded-lg bg-indigo-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
