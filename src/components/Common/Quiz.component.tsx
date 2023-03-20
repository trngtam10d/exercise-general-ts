import * as React from "react";

const Quiz: React.FC = () => {
    return (
        <div className="md:mb-[10px] md:p-bm relative z-hm">
            <a href="/quiz" className="rounded-[10px] block hover:bg-blue">
                <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/quiz/bnr_quiz.png" alt="Đố vui Pokémon" className="md:rounded-[10px] shadow-quiz w-full max-w-full align-bottom" />
                {/* <img src="https://vn.portal-pokemon.com/play/resources/pokedex/img/quiz/bnr_quiz_sp.png" alt="Đố vui Pokémon" className="md:rounded-[10px] shadow-quiz w-full max-w-full align-bottom" /> */}
            </a>
        </div>
    );
};

export default Quiz;