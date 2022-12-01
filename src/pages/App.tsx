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
            <main className="xl:max-w-[1400px] xl:min-w-[950px] xl:m-auto bg-content-pokemon bg-top bg-no-repeat bg-auto bg-black relative overflow-hidden">
                <div className="text-black text-md leading-[1.6] max-w-[1400px] w-full" style={{margin: '0 auto'}}>
                    {/* Heading main */}
                    <div className="md:w-full md:bg-heading-list z-110 relative after:content-[''] after:h-0 after:block after:pt-[9.28571429%]" style={{backgroundSize: '100% auto',margin: '0 auto'}}>
                        <div className="pokemon-list__header__inner">
                            <a href="/">
                                <span className="xl:text-small absolute top-[48%] left-[50%] text-center text-black w-[30%]" style={{transform: 'translate(-50%,-50%)'}}>Tra cứu Pokémon</span>
                            </a>
                        </div>
                    </div>
                    {/* Main list */}
                    <div className="relative z-xl md:after:pt-[25.571429%] after:content-[''] after:h-0 after:block">
                        <div className="md:absolute md:top-[-45%] md:left-0 w-full">
                            {/* md:animate-spin-slow  */}
                            <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png" className="w-full" />
                            <div>
                                <div className="md:m-ml top-0 left-0 absolute text-center opacity-0 
                                    md:before:content-[''] md:before:h-0 md:before:block md:before:pt-[67%]
                                    md:after:content-[''] md:after:h-0 md:after:block md:after:pt-[21.42857143%]"
                                    style={{ animationName: 'random_pokemon', animationDuration: '2s', animationFillMode: 'both', animationDelay: '.6s'}}>
                                    <a href="/057">
                                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" className="w-full bg-cut-pokemon p-[8%]" style={{backgroundSize: '100% auto'}}/>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="md:m-ml md:w-[8.92857143%] top-[40%] left-[5%] absolute text-center opacity-0 
                                    md:before:content-[''] md:before:h-0 md:before:block md:before:pt-[67%]
                                    md:after:content-[''] md:after:h-0 md:after:block md:after:pt-[21.42857143%]"
                                    style={{ animationName: 'random_pokemon', animationDuration: '2s', animationFillMode: 'both', animationDelay: '1.6s'}}>
                                    <a href="/057">
                                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" className="w-full bg-cut-pokemon p-[8%]" style={{backgroundSize: '100% auto'}}/>
                                    </a>
                                </div>
                            </div>
                            {/* <div>
                                <div className="md:my-[39.28571429%] top-0 left-0 absolute text-center opacity-0 
                                    md:before:content-[''] md:before:h-0 md:before:block md:before:pt-[67%]
                                    md:after:content-[''] md:after:h-0 md:after:block md:after:pt-[21.42857143%]"
                                >
                                    <a href="/057">
                                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" className="w-full bg-cut-pokemon p-[8%]" style={{backgroundSize: '100% auto'}}/>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="md:my-[39.28571429%] top-0 left-0 absolute text-center opacity-0 
                                    md:before:content-[''] md:before:h-0 md:before:block md:before:pt-[67%]
                                    md:after:content-[''] md:after:h-0 md:after:block md:after:pt-[21.42857143%]"
                                >
                                    <a href="/057">
                                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" className="w-full bg-cut-pokemon p-[8%]" style={{backgroundSize: '100% auto'}}/>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="md:my-[39.28571429%] top-0 left-0 absolute text-center opacity-0 
                                    md:before:content-[''] md:before:h-0 md:before:block md:before:pt-[67%]
                                    md:after:content-[''] md:after:h-0 md:after:block md:after:pt-[21.42857143%]"
                                >
                                    <a href="/057">
                                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" className="w-full bg-cut-pokemon p-[8%]" style={{backgroundSize: '100% auto'}}/>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    );
};

export default App;