import { PlayIcon, HeartIcon } from "@heroicons/react/20/solid";
export default async function MainMovie() {
    return (
        <div className="w-screen h-full z-10 pt-36 bg-[#111]">
            <div className="h-full mt-[-20vh] h-[80vh]">
                <div className="w-full h-full">
                    <img src="https://i.pinimg.com/originals/10/0e/40/100e40496828d3aff5f25586879cd7cd.jpg" alt="" className="object-cover w-full h-full"/>
                </div>
                <div className="absolute top-40 text-foreground right-0 bg-black bg-opacity-90 w-2/5 h-auto rounded-l-2xl rounded-l-2xl p-10">
                    <h1 className="text-4xl py-4">Batman</h1>
                    <p className="text-[#888]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum odio, sollicitudin tempor accumsan sit amet, dapibus vitae arcu.</p>
                    <div className="flex">
                        <button className="text-md flex items-center bg-primary text-white p-2 rounded-md px-5 mt-5 justify-between hover:opacity-70"><PlayIcon className="w-7 h-7 mr-2" /> ASSISTIR</button>
                        <button className="ml-2 text-md flex items-center bg-red-500 text-white p-2 rounded-md px-5 mt-5 justify-between hover:opacity-70"> <HeartIcon className="w-7 h-7 mr-2" /> Adicionar a lista</button>
                    </div>
                    <div className="w-full h-auto">
                        <h2 className="pt-6 text-secondary">Assistir com</h2>
                        <div className="w-3/5 grid grid-cols-5 gap-3 flex justify-start items-center">
                            <button className="opacity-70 hover:opacity-100"><img src="/users/user-isabela-profile.png" alt="User Profile Pic" className="object-cover w-12 h-12 rounded-md m-2" /></button>
                            <button className="opacity-70 hover:opacity-100"><img src="https://imagem.natelinha.uol.com.br/tudo-sobre/celso_portiolli_a08311086540bd70c71e054ad79e0af3692206c1_52bbdc5f7cfeef2732c3e7773f4934cb0c64ca38.jpeg" alt="User Profile Pic" className="object-cover w-12 h-12 rounded-md m-2" /></button>
                            <button className="opacity-70 hover:opacity-100"><img src="https://cdns-images.dzcdn.net/images/artist/06f74d521d7214030523073e006bc9eb/500x500.jpg" alt="User Profile Pic" className="object-cover w-12 h-12 rounded-md m-2" /></button>
                            <button className="opacity-70 hover:opacity-100"><img src="https://conteudo.imguol.com.br/c/splash/be/2023/01/11/a-cantora-marvilla-1673446134870_v2_4x3.jpg" alt="User Profile Pic" className="object-cover w-12 h-12 rounded-md m-2" /></button>
                            <button className="opacity-70 hover:opacity-100"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Racionais_MC%27s_%2812197960953%29_%28cropped%29.jpg/250px-Racionais_MC%27s_%2812197960953%29_%28cropped%29.jpg" alt="User Profile Pic" className="object-cover w-12 h-12 rounded-md m-2" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}