import { getActionMovie, getDramaMovice, getallMovies } from "@/app/services/movie.service"
import Link from "next/link";

export const CardsComponent = async () => {
    const getMovie = await getallMovies();
    return (
        <section className="flex overflow-x-scroll gap-3 no-scrollbar pt-3 ">
            {getMovie.payload.map((movie) => (
                <div key={movie.movie_id} className="flex flex-nowrap">
                    <Link className=" p-4 border w-[300px] bg-white border-indigo-300 rounded-lg hover:shadow-xl  flex flex-col items-center"
                        href={`/movieDetail/${movie.movie_id}`}>
                        <img src={movie.image ? movie.image : 'https://m.ykimg.com/053500006590DC8E13EB661B8CAC8E11'} alt="" />
                        <div className="mt-3 ">
                            <h4 className="font-bold text-xl line-clamp-1">{movie.movie_title}</h4>
                            <p className="mt-2 text-gray-600 line-clamp-2">
                                {movie.description}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </section>

    )
}


export const ActionCard = async () => {
    const getMovieAction = await getActionMovie();
    return (
        <>
            <section className="flex overflow-x-auto gap-3 no-scrollbar  pt-3 ">
                {getMovieAction.payload.map((movieAction) => (
                    <div key={movieAction.movie_id}>                      
                            <Link className="p-4 border w-[300px] bg-white border-indigo-300 rounded-lg hover:shadow-xl  flex flex-col items-center"
                                href="">
                                <img src={movieAction.image ? movieAction.image : 'https://m.ykimg.com/053500006590DC8E13EB661B8CAC8E11'} alt="" />
                                <div className="mt-3 ">
                                    <h4 className="font-bold text-xl line-clamp-1">{movieAction.movie_title}</h4>
                                    <p className="mt-2 text-gray-600 line-clamp-2">
                                        {movieAction.description}
                                    </p>
                                </div>
                            </Link>                      
                    </div>
                ))}
            </section>
        </>
    )
}

export const DramaCard = async () => {
    const getMovieDrama = await getDramaMovice();
    return (
        <>
            <section className="flex overflow-x-auto gap-3 no-scrollbar  pt-3 ">
                {getMovieDrama.payload.map((movieDrama) => (
                    <div key={movieDrama.movie_id}>                       
                            <Link className="p-4 border w-[300px] bg-white border-indigo-300 rounded-lg hover:shadow-xl  flex flex-col items-center"
                                href={`/dramaDetail/${movieDrama.movie_id}`}>
                                <img src={movieDrama.image ? movieDrama.image : 'https://m.ykimg.com/053500006590DC8E13EB661B8CAC8E11'} alt="" />
                                <div className="mt-3 ">
                                    <h4 className="font-bold text-xl line-clamp-1">{movieDrama.movie_title}</h4>
                                    <p className="mt-2 text-gray-600 line-clamp-2">
                                        {movieDrama.description}
                                    </p>
                                </div>
                            </Link>                    
                    </div>
                ))}
            </section>
        </>
    )
}

