import Image from "next/image";

export default async function MoviePage({params}) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.api_key}`);
    const movie = await res.json();
  return (
    <div className="w-full p-4 md:p-6 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-0">
        <div className="p-4 md:p-6 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-0">
            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} width={500} height={300} className="rounded-lg" />
        </div>
        <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">{movie.title || movie.first_air_date}</h2>
            <p className="text-lg mb-3">{movie.overview}</p>
            <p className="mb-3">
                <span className="text-semibold mr-1">Date Released:</span>
                {movie.release_date || movie.first_air_date}</p>
            <p className="mb-3">
            <span className="text-semibold mr-1">Rating:</span>
                {movie.vote_count}</p>
        </div>
    </div>
  )
}
