import * as React from "react";
import axios from "axios";

import Header from "../components/Layout/Header.component";
import Wrapper from "../components/Layout/Wrapper.component";
import Logo from "../components/Layout/Logo.component";
import Search from "../components/Common/Search.component";
import Collection from "../components/Common/Collection.component";

import { Pokemon } from "../types/pokemon.interface";
import "./App.css";

interface Pokemons { name: string; url: string }
export interface ByName { id: number; isOpened: boolean }

const App: React.FC = () => {
    const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
    const [nextMore, setMore] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(true);
    const [showPokemon, setPokemonByName] = React.useState<ByName>({
        id: 0,
        isOpened: false
    });
    const [isChecked, setChecked] = React.useState(false);

    React.useEffect(() => {
        const getPokemon = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`);
            setMore(response.data.next);
            response.data.results.forEach(async (pokemon: Pokemons) => {
                const item = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                setPokemons((e) => [...e, item.data]);
                setLoading(false);
            });
        };
        getPokemon();
    }, []);

    const nextPage = async () => {
        setLoading(true);
        let res = await axios.get(nextMore);
        setMore(res.data.next);
        res.data.results.forEach(async (pokemon: Pokemons) => {
            const poke = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            setPokemons((p) => [...p, poke.data]);
            setLoading(false);
        });
    };

    const handleEventOption = () => {
        setChecked(true);
        if (isChecked == true) {
            setChecked(false);
        }
    };

    return (
        <>
            <Header />
            {/* <Wrapper /> */}
            <main className="xl:max-w-[1400px] xl:min-w-[950px] bg-main bg-content-pokemon bg-top bg-no-repeat bg-auto relative overflow-hidden" style={{ margin: "0 auto" }}>
                <div className="text-black text-md leading-[1.6] max-w-[1400px] w-full" style={{ margin: '0 auto' }}>
                    {/* Heading main */}
                    <div className="md:w-full md:bg-heading-list z-hm relative after:content-[''] after:h-0 after:block after:pt-[9.28571429%]" style={{ backgroundSize: '100% auto', margin: '0 auto' }}>
                        <div className="pokemon-list__header__inner">
                            <a href="/">
                                <span className="xl:text-small absolute top-[48%] left-[50%] text-center text-black w-[30%]" style={{ transform: 'translate(-50%,-50%)' }}>Tra cứu Pokémon</span>
                            </a>
                        </div>
                    </div>
                    {/* Main list */}
                    <div className="relative z-xl md:after:pt-[33.571429%] after:content-[''] after:h-0 after:block">
                        <div className="md:absolute md:top-[-45%] md:left-0 w-full">
                            <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png" className="md:animate-spin-slow w-full" />
                            <div>
                                <div className="md:m-ml top-0 left-0 absolute text-center
                                    md:before:content-[''] md:before:h-0 md:before:block md:before:pt-[67%]
                                    md:after:content-[''] md:after:h-0 md:after:block md:after:pt-[21.42857143%]" style={{ animationName: 'random_pokemon', animationDuration: '2s', animationFillMode: 'both', animationDelay: '1.6s' }}>
                                    <a href="/play/pokedex/421_1">
                                        <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/f9e5bed33fca5d267f8fe38e14bb37fb06020e10.png" style={{
                                            width: "100%",
                                            backgroundImage: "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/random_center_bg.png')",
                                            backgroundSize: "100% auto",
                                            padding: "8%"
                                        }} />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="md:m-ml md:w-[8.92857143%] top-[40%] left-[5%] absolute text-center opacity-0 
                                    md:before:content-[''] md:before:h-0 md:before:block md:before:pt-[67%]
                                    md:after:content-[''] md:after:h-0 md:after:block md:after:pt-[21.42857143%]"
                                    style={{ animationName: 'random_pokemon', animationDuration: '2s', animationFillMode: 'both', animationDelay: '1.6s' }}>
                                    <a href="/057">
                                        <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/f9e5bed33fca5d267f8fe38e14bb37fb06020e10.png" className="w-full bg-cut-pokemon p-[8%]" style={{ backgroundSize: '100% auto' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <form className="md:top-[67%] w-full absolute text-blue" style={{ textShadow: "0 0 5px #b3eafe, 0 0 5px #b3eafe" }}>
                            <div className="md:ml-[10%] relative mb-2 laptop:text-[2.1rem]">
                                <span id="pokemon_search_title" style={{ fontSize: "100%", visibility: "visible" }}>Tìm theo Tên hoặc Số</span>
                            </div>
                            <div className="md:absolute left-[10%] w-[50%] md:after:pt-[7.14285714%] after:content-[''] after:h-0 after:block">
                                <div className="md:content-[''] md:h-0 md:block md:pt-[7.14285714%] absolute top-0 w-[85.71428571%] rounded-form-search shadow-input-search" style={{ background: 'linear-gradient(180deg,#f0f0f0,#fff 15%,#fff 85%,#f0f0f0)' }}>
                                    <input type="text" name="" className="laptop:text-[1em] w-[90%] absolute top-[50%] left-[50%]" style={{ border: 0, outline: 0, transform: 'translate(-50%,-50%)' }} />
                                </div>
                                <div className="absolute top-0 right-0 w-[14.28571429%] h-full bg-blue rounded-button-search shadow-input-search cursor-pointer">
                                    <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/icon_magnifying_glass.png" className="w-[30%] absolute top-[50%] left-[50%]" style={{ transform: 'translate(-50%,-50%)' }} />
                                </div>
                            </div>
                            <div className="md:w-[28.57142857%] md:right-[8.5%] absolute md:after:pt-[12.5%] after:content-[''] after:h-0 after:block">
                                <a href="" className="md:w-[85.71428571%] absolute top-0 left-0 h-full block rounded-[50px] shadow-button text-white text-center"
                                    style={{
                                        background: '#ffdc00 url(https://vn.portal-pokemon.com/play/resources/pokedex/img/icon_surprise.png) 90% 30% no-repeat',
                                        backgroundSize: 'auto 70%',
                                        border: 0,
                                    }}
                                >
                                    <span className="absolute top-[50%] left-[50%] whitespace-nowrap" style={{ transform: 'translate(-50%,-50%)' }}>Hiển thị ngẫu nhiên</span>
                                </a>
                            </div>
                        </form>
                    </div>
                    {/* Quiz */}
                    <div className="md:mb-[10px] md:p-bm relative z-hm">
                        <a href="/quiz" className="rounded-[10px] block hover:bg-blue">
                            <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/quiz/bnr_quiz.png" alt="Đố vui Pokémon" className="md:rounded-[10px] shadow-quiz w-full max-w-full align-bottom" />
                            {/* <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/quiz/bnr_quiz_sp.png" alt="Đố vui Pokémon" className="md:rounded-[10px] shadow-quiz w-full max-w-full align-bottom" /> */}
                        </a>
                    </div>
                    {/* list sub Pokemon */}
                    <div className="z-hm relative bg-list-pokemon bg-top bg-repeat bg-auto">
                        <div className="relative md:after:pt-[5.214286%] after:content-[''] after:h-0 after:block">
                            <div className={`md:absolute md:bottom-0 md:w-[33.85714286%] md:right-[2.85%] md:z-[9999]`} onClick={() => handleEventOption()}>
                                <div className={`md:bg-sort-close bg-auto relative md:after:pt-[16.03375527%] after:content-[''] after:h-0 after:block ${isChecked ? 'invisible' : ''}`}></div>
                                <div className={`md:absolute md:top-0 md:left-0 w-full ${isChecked ? 'block' : 'hidden'}`}>
                                    <div className={`md:bg-select-open bg-auto relative ${isChecked ? "md:after:pt-[15.82278481%] after:content-[''] after:h-0 after:block" : "" }`}></div> 
                                    <div className="md:bg-select-open bg-auto bg-sort relative bg-no-repeat">
                                        <ul className="p-sml">
                                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer">Số thấp nhất (trước)</li> 
                                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer">Số cao nhất (trước)</li> 
                                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer">Cân nặng thấp nhất (trước)</li> 
                                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer">Cân nặng cao nhất (trước)</li> 
                                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer">Chiều cao thấp nhất (trước)</li> 
                                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer">Chiều cao cao nhất (trước)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div data-init="Số thấp nhất (trước)" className="md:top-[1.2rem] absolute text-white w-full text-center z-hm cursor-pointer">Số thấp nhất (trước)</div>
                            </div>
                        </div>
                        <div className="w-full p-list after:content-[''] after:table after:clear-both">
                            <div>
                                <div className="md:w-[25%] relative float-left block">
                                    <a href="" className="block w-full bg-auto relative mb-4 after:content-[''] after:h-0 after:block after:pt-[152.74390244%]" style={{background: 'transparent url(https://vn.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png) 50% 50% no-repeat'}}>
                                        <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" className="absolute w-[60%] left-[20%] top-[8%]"/>
                                        <span className="absolute w-[80%] left-[10%] top-[57%] text-blue laptop:text-[2.1rem]">001</span>
                                        <span className="absolute w-[80%] left-[10%] top-[62%] text-white laptop:text-[3.1rem]">Fushigidane</span>
                                        <span className="absolute w-[80%] left-[10%] top-[72%] text-white laptop:text-[2.8rem]"></span>
                                        <div className="absolute w-[80%] left-[10%] bottom-[5%]">
                                            <div className="pokemon-list--box__type size-12 pokemon-list--box__type--grass">
                                                <span>hệ Cỏ</span>
                                            </div>
                                            <div className="pokemon-list--box__type size-12 pokemon-list--box__type--poison">
                                                <span>hệ Độc</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="md:w-[25%] relative float-left block">
                                    <a href="" className="block w-full bg-auto relative mb-4 after:content-[''] after:h-0 after:block after:pt-[152.74390244%]" style={{background: 'transparent url(https://vn.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png) 50% 50% no-repeat'}}>
                                        <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" className="absolute w-[60%] left-[20%] top-[8%]"/>
                                    </a>
                                </div>
                                <div className="md:w-[25%] relative float-left block">
                                    <a href="" className="block w-full bg-auto relative mb-4 after:content-[''] after:h-0 after:block after:pt-[152.74390244%]" style={{background: 'transparent url(https://vn.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png) 50% 50% no-repeat'}}>
                                        <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" className="absolute w-[60%] left-[20%] top-[8%]"/>
                                    </a>
                                </div>
                                <div className="md:w-[25%] relative float-left block">
                                    <a href="" className="block w-full bg-auto relative mb-4 after:content-[''] after:h-0 after:block after:pt-[152.74390244%]" style={{background: 'transparent url(https://vn.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png) 50% 50% no-repeat'}}>
                                        <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" className="absolute w-[60%] left-[20%] top-[8%]"/>
                                    </a>
                                </div>
                                <div className="md:w-[25%] relative float-left block">
                                    <a href="" className="block w-full bg-auto relative mb-4 after:content-[''] after:h-0 after:block after:pt-[152.74390244%]" style={{background: 'transparent url(https://vn.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png) 50% 50% no-repeat'}}>
                                        <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" className="absolute w-[60%] left-[20%] top-[8%]"/>
                                    </a>
                                </div>
                                <div className="md:w-[25%] relative float-left block">
                                    <a href="" className="block w-full bg-auto relative mb-4 after:content-[''] after:h-0 after:block after:pt-[152.74390244%]" style={{background: 'transparent url(https://vn.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png) 50% 50% no-repeat'}}>
                                        <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" className="absolute w-[60%] left-[20%] top-[8%]"/>
                                    </a>
                                </div>
                                <div className="md:w-[25%] relative float-left block">
                                    <a href="" className="block w-full bg-auto relative mb-4 after:content-[''] after:h-0 after:block after:pt-[152.74390244%]" style={{background: 'transparent url(https://vn.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png) 50% 50% no-repeat'}}>
                                        <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" className="absolute w-[60%] left-[20%] top-[8%]"/>
                                    </a>
                                </div>
                                <div className="md:w-[25%] relative float-left block">
                                    <a href="" className="block w-full bg-auto relative mb-4 after:content-[''] after:h-0 after:block after:pt-[152.74390244%]" style={{background: 'transparent url(https://vn.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png) 50% 50% no-repeat'}}>
                                        <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" className="absolute w-[60%] left-[20%] top-[8%]"/>
                                    </a>
                                </div>
                            </div>
                            <div className="w-full pb-[3%] text-center" style={{display: "block"}}>
                                <a href="">
                                    <div className="laptop:text-[1.9rem] md:w-[46.2%] md:bg-load-more md:bg-contain md:bg-no-repeat text-blue relative inline-block md:before:pt-[10.8%] before:content-[''] before:block">
                                        <span className="absolute top-[50%] right-0 left-0 text-center shadow-load" style={{transform: "translateY(-50%)"}}>Xem thêm</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;