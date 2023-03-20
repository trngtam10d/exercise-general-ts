import * as React from "react";
import axios from "axios";

import Header from "../components/Layout/Header.component";
import Collection from "../components/Common/Collection.component";
import Quiz from "../components/Common/Quiz.component";
import Random from "../components/Common/Random.component";
import Sort from "../components/Common/Sort.component";

import { Pokemon } from "../types/pokemon.interface";
import "./App.css";

interface Pokemons { name: string; url: string }
export interface ByName { id: number; isOpened: boolean }

const App: React.FC = () => {
    const [showPokemon, setPokemonByName] = React.useState<ByName>({
        id: 0,
        isOpened: false
    });
    const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
    const [nextMore, setMore] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(true);
    const [isChecked, setChecked] = React.useState(false);
    // const [value, setValue] = React.useState(getInitialState);

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
                    <Random />
                    {/* Quiz */}
                    <Quiz />
                    {/* list sub Pokemon */}
                    <div className="z-hm relative bg-list-pokemon bg-top bg-repeat bg-auto">
                        <Sort />
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