import * as React from "react";

const Wrapper: React.FC = () => {
    return (
        <div className="fixed inset-x-0 top-0 bottom-auto">
            <div className="absolute inset-x-0 top-0 bottom-auto overflow-hidden w-0 h-0"></div>
        </div>

// <section className="section">
// <div className="container mx-auto">
//     <div className="pt-[2.43rem]">
//         <div className="flex justify-between items-center">
//             <div className="w-[60%]">
//                 <div className="text-block">Filter by type:</div>
//                 {/* <div className="filter__type-wrapper">
//                     <div className="filter__type is--normal">Normal</div>
//                     <div className="filter__type is--grass">Grass</div>
//                     <div className="filter__type is--fire">Fire</div>
//                     <div className="filter__type is--water">Water</div>
//                     <div className="filter__type is--bug">Bug</div>
//                     <div className="filter__type is--electric">Electric</div>
//                     <div className="filter__type is--rock">Rock</div>
//                     <div className="filter__type is--ghost">Ghost</div>
//                     <div className="filter__type is--poison">Poison</div>
//                     <div className="filter__type is--psychic">Psychic</div>
//                     <div className="filter__type is--fighting">Fighting</div>
//                     <div className="filter__type is--ground">Ground</div>
//                     <div className="filter__type is--dragon">Dragon</div>
//                     <div id="btnClear" className="filter__type is--clear">Reset</div>
//                 </div> */}
//             </div>
//             <div className="main__sort">
//                 <div className="mb-0" style={{ margin: "0 0 15px" }}>
//                     <form method="get" className="sort__select-wrapper">
//                         <select className="w-[11.1rem] h-[2rem] mb-0 rounded-lg bg-black text-white text-[12px]">
//                             <option value="id-asc">ID ASC</option>
//                             <option value="id-dsc">ID DSC</option>
//                             <option value="base_experience-asc">Base Experience ASC</option>
//                             <option value="base_experience-dsc">Base Experience DSC</option>
//                         </select>
//                     </form>
//                     <div className="w-form-done">
//                         <div>Thank you! Your submission has been received!</div>
//                     </div>
//                     <div className="w-form-fail">
//                         <div>Oops! Something went wrong while submitting the form.</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="flex justify-center flex-wrap m-0 max-w-screen-xl">
//             <Collection
//                 pokemons={pokemons}
//                 showPokemon={showPokemon}
//                 setPokemonByName={setPokemonByName}
//             />
//         </div>
//         {!showPokemon.isOpened && (
//             <div className="btn text-center mt-10 mb-10">
//                 <button onClick={nextPage} className="bg-yellow hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
//                     {loading ? "Loading..." : "Load more"}{" "}
//                 </button>
//             </div>
//         )}
//     </div>
// </div>
// </section>
    );
};

export default Wrapper;