import * as React from "react";
import axios from "axios";

import Search from "./Search.component";

const Random: React.FC = () => {
    const [pos, setValue] = React.useState([]);

    
    React.useEffect(() => {
        const getPokemon = async () => {
            const response = axios.get(`https://vn.portal-pokemon.com/play/pokedex/api/v1/random?limit=13`);
            setValue((await response).data);
        };
        getPokemon();
    }, []);

    return (
        <div className="relative z-xl md:after:pt-[33.571429%] after:content-[''] after:h-0 after:block">
            <div className="md:absolute md:top-[-45%] md:left-0 w-full">
                <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png" className="md:animate-spin-slow w-full" />
                <div>
                    {pos.map((item) => {
                        return (
                            <div className="md:m-ml top-0 left-0 absolute text-center md:before:content-[''] md:before:h-0 md:before:block md:before:pt-[67%]
                                    md:after:content-[''] md:after:h-0 md:after:block md:after:pt-[21.42857143%]" style={{ animationName: 'random_pokemon', animationDuration: '2s', animationFillMode: 'both', animationDelay: '1.6s' }}>
                                <a href="/play/pokedex/421_1">
                                    <h4>{item['name']}</h4>
                                    <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/f9e5bed33fca5d267f8fe38e14bb37fb06020e10.png" style={{
                                        width: "100%",
                                        backgroundImage: "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/random_center_bg.png')",
                                        backgroundSize: "100% auto",
                                        padding: "8%"
                                    }} />
                                </a>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <div className="pokemon-img__random--05"
                        style={{ animationName: 'random_pokemon', animationDuration: '2s', animationFillMode: 'both', animationDelay: '1.6s' }}>
                        <a href="/057">
                            <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/f9e5bed33fca5d267f8fe38e14bb37fb06020e10.png" className="w-full bg-cut-pokemon p-[8%]" style={{ backgroundSize: '100% auto' }} />
                        </a>
                    </div>
                </div>
            </div>
            <Search />
        </div>
    );
};

export default Random;