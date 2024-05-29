import { BellAlertIcon, MagnifyingGlassIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { signOut } from '@/auth';

export default async function Header() {
    return (
        <div className="w-full h-[15vh] bg-[#444] bg-opacity-30 shadow-xl text-foreground px-10 fixed z-20">
            <div className="grid grid-cols-2 gap-4 h-full opacity-100">
                <div className="flex justify-center items-center">
                    <div className="w-1/4 h-full flex justify-center items-center">
                        <GlobeAltIcon className="w-10 h-10" />
                    </div>
                    <ul className="w-3/4 h-fullflex flex justify-between">
                        <li>Início</li>
                        <li>Séries</li>
                        <li>Filmes</li>
                        <li>Bombando</li>
                        <li>Minha Lista</li>
                    </ul>
                </div>
                <div className="w-full flex justify-end items-center">
                    <ul className="md:1/4 lg:w-[35%] xl:1/4 2xl:1/4 h-fullflex flex justify-between items-center p-5">
                        <li className="text-white"><MagnifyingGlassIcon className="w-6 h-6" /></li>
                        <li className="text-white"><BellAlertIcon className="w-6 h-6" /></li>
                        <li>
                        <form
                            action={async () => {
                                'use server';
                                await signOut();
                            }}
                        >
                            <button><img src="/users/user-cartoon-nice-guy.png" alt="User Profile Pic" className="w-12 h-12 rounded-sm" /></button>
                        </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}