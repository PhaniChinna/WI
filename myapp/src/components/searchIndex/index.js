import React, { useState } from "react";
import axios from "axios";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const encodedQuery = encodeURIComponent(query);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=61bcc2f159bfca5b3b3a1331e4bfe24e&language=en-US&query=${encodedQuery}&page=1`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies by name..."
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      <div>
        {results.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
