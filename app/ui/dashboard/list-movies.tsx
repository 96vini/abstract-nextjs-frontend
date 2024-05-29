import { fetchMovies } from '@/app/lib/data';
import { MovieFormOrderBy } from '@/app/lib/definitions';

export default async function ListMovies({ title }: MovieFormOrderBy) {
    const movies = await fetchMovies();

    return (
        <div className='w-full h-full px-10 py-5'>
                <div className='py-4'>
                    <h2 className='text-2xl text-secondary'>{title}</h2>
                </div>
                <div className='w-full h-full grid grid-cols-7 gap-6'>
                    {movies.map(movie =>
                        <div className='bg-white w-full h-full rounded-xl text-center'>
                            <img src={movie.image_url} className="object-cover w-full h-full shadow-xl rounded-xl" alt="" />
                            <h2 className='text-md w-1/7 h-auto text-primary my-4'>{movie.title}</h2>
                        </div>
                    )}
                </div>
        </div>
    );
}