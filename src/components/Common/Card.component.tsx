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
                <>
                    <section className="pokemon-list-detailed">
                        <div className="detail-container">
                            <p className="detail-close" onClick={handleClose}>
                                X
                            </p>
                            <div className="detail-info">
                                <img src={image} alt="pokemon" className="detail-img" />
                                <p className="detail-name"> {name}</p>
                            </div>
                            <div className="detail-skill">
                                <p className="detail-ability"> Ablities: </p>
                                {abilities?.map((ab: any) => {
                                    return <div className=""> {ab.ability.name}</div>;
                                })}
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <>
                    <div className="bg-white rounded-full h-[120px] w-[120px] text-center">
                        <img src={image} loading="lazy" alt={name} className="w-full h-full" />
                    </div>
                    <div className="mt-12">
                        <span className="bg-gray rounded-lg text-sm p-5">#001</span>
                        <h3 className="tracking-[1px]" style={{ margin: "15px 0 7px" }}>{name}</h3>
                        <small className="type">
                            Type:
                            <span>Grass</span>
                        </small>
                    </div>
                </>
            )}
        </>
    );
};

export default Card;