import * as React from "react";

import { ByName } from "../../pages/App";

interface Props {
    showPokemon: ByName;
    setPokemonByName: React.Dispatch<React.SetStateAction<ByName>>;
    abilities: | { name: string; ability: string; }[] | undefined;
    name: string;
    id: number;
    image: string;
}

const Card: React.FC<Props> = (props) => {
    const { name, id, image, abilities, showPokemon, setPokemonByName } = props;
    const [isChecked, setChecked] = React.useState(false);

    React.useEffect(() => {
        setChecked(id === showPokemon?.id);
    }, [showPokemon]);

    const handleClose = () => {
        setPokemonByName({
            id: 0,
            isOpened: false
        });
    };

    return (
        <>
            {isChecked ? (
                <></>
            ) : (
                <>
                    <div className="flex w-full justify-center items-center rounded-lg bg-[#d9d9d9] text-[#d9d9d9]">
                        <img src={image} loading="lazy" alt={name} className="w-full h-full" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="mt-[0.3rem]">#001</div>
                        <div className="pokemon__exp">EXP: 64</div>
                    </div>
                    <div className="text-[1.6rem]">{name}</div>
                    <div className="bg-[#47ab57] flex w-[4.65rem] h-[1.39rem] justify-center items-center rounded-lg text-white text-[1.2rem]">Grass </div>
                </>
            )}
        </>
    );
};

export default Card;