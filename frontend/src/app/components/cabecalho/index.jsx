'use client'

export default function Cabecalho(){
    
    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Seja bem-vindo!</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white hover:text-gray-300 font-bold">Histórico</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};