import * as React from "react";

const Search: React.FC = () => {
    return (
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
    );
};

export default Search;