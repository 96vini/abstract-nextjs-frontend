import { fetchMovies } from '@/app/lib/data';
import { MovieFormOrderBy } from '@/app/lib/definitions';

export default async function ListMovies({ title, orderBy }: MovieFormOrderBy) {
    const movies = await fetchMovies(orderBy);

    return (
        <div className='w-full h-full px-10 py-5'>
                <div className='py-4'>
                    <h2 className='text-2xl text-secondary'>{title}</h2>
                </div>
                <div className='w-full h-full grid grid-cols-7 gap-2'>
                    <div className='bg-white w-full h-full rounded-xl'>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/ce578c174088799.649bb208e091f.png" className="object-cover w-full h-full shadow-xl rounded-xl" alt="" />
                    </div>
                    <div className='bg-white w-full h-full rounded-xl'>
                        <img src="https://images.justwatch.com/poster/307512771/s718/django-livre.jpg" className="object-cover w-full h-full shadow-xl rounded-xl" alt="" />
                    </div>
                    <div className='bg-white w-full h-full rounded-xl'>
                        <img src="https://br.web.img2.acsta.net/pictures/13/12/30/18/11/111145.jpg" className="object-cover w-full h-full shadow-xl rounded-xl" alt="" />
                    </div>
                    <div className='bg-white w-full h-full rounded-xl'>
                        <img src="https://posterhouse.org/wp-content/uploads/2021/05/moonlight_0.jpg" className="object-cover w-full h-full shadow-xl rounded-xl" alt="" />
                    </div>
                    <div className='bg-white w-full h-full rounded-xl'>
                        <img src="https://m.media-amazon.com/images/I/61aXrMrKlyS._AC_UF894,1000_QL80_.jpg" className="w-full h-full shadow-xl rounded-xl" alt="" />
                    </div>
                    <div className='bg-white w-full h-full rounded-xl'>
                        <img src="https://posterhouse.org/wp-content/uploads/2021/05/silence_of_the_lambs_0.jpg" className="w-full h-full shadow-xl rounded-xl" alt="" />
                    </div>
                    <div className='bg-white w-full h-full rounded-xl'>
                        <img src="https://parade.com/.image/t_share/MTkwNTgxMjk2NzkxODg5MDIx/parasite2.jpg" className="w-full h-full shadow-xl rounded-xl" alt="" />
                    </div>
                </div>
        </div>
    );
}