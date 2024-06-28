import Results from "@/components/Results";

async function SearchPage({params}) {
    const searchTerms = params.searchTerms;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.api_key}&query=${searchTerms}&language=en-US&page=1&include_adult=false`);
    const data = await res.json();
    const results = data.results;
  return (
    <div>
  {results && results.length === 0 ? (
    <h1 className="text-center pt-5">No results found</h1>
  ) : (
    results && <Results results={results} />
  )}
</div>
  )
}

export default SearchPage;