import Search from '@/app/ui/search';
import MainMovie from '@/app/ui/dashboard/main-movie';
import ListMovies from '@/app/ui/dashboard/list-movies';
 
export default async function Page() {
    return (
        <main>
            <div className='w-full h-screen bg-[#EEE]'>
                <div className='flex w-full h-auto justify-center items-center'>
                    <MainMovie />
                </div>
                <div className='flex w-full h-auto justify-center items-center'>
                    <ListMovies title="Destaques" orderBy="popularity" />
                </div>
                <div className="flex w-full h-auto items-center justify-between">
                    <ListMovies title="Seus amigos adoram" orderBy="friends-popularity"/>
                </div>
            </div>
        </main>
    );
}