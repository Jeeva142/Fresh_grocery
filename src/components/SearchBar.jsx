function SearchBar({ search, setSearch }) {

    return (

        <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 w-full rounded mb-6"
        />
    );
}

export default SearchBar;