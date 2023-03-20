import * as React from "react";

const Sort: React.FC = () => {
    const [isChecked, setChecked] = React.useState(false);

    const handleEventOption = () => {
        setChecked(true);
        if (isChecked == true) {
            setChecked(false);
        }
    };

    return (
        <div className="relative md:after:pt-[5.214286%] after:content-[''] after:h-0 after:block">
            <div className={`md:absolute md:bottom-0 md:w-[33.85714286%] md:right-[2.85%] md:z-[9999]`} onClick={() => handleEventOption()}>
                <div className={`md:bg-sort-close bg-auto relative md:after:pt-[16.03375527%] after:content-[''] after:h-0 after:block ${isChecked ? 'invisible' : ''}`}></div>
                <div className={`md:absolute md:top-0 md:left-0 w-full ${isChecked ? 'block' : 'hidden'}`}>
                    <div className={`md:bg-select-open bg-auto relative ${isChecked ? "md:after:pt-[15.82278481%] after:content-[''] after:h-0 after:block" : ""}`}></div>
                    <div className="md:bg-select-open bg-auto bg-sort relative bg-no-repeat">
                        <ul className="p-sml">
                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer md:hover:bg-hover_gain" style={{ transition: "hsla(0,0%,100%,.3) .5s" }}>Số thấp nhất (trước)</li>
                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer md:hover:bg-hover_gain" style={{ transition: "hsla(0,0%,100%,.3) .5s" }}>Số cao nhất (trước)</li>
                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer md:hover:bg-hover_gain" style={{ transition: "hsla(0,0%,100%,.3) .5s" }}>Cân nặng thấp nhất (trước)</li>
                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer md:hover:bg-hover_gain" style={{ transition: "hsla(0,0%,100%,.3) .5s" }}>Cân nặng cao nhất (trước)</li>
                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer md:hover:bg-hover_gain" style={{ transition: "hsla(0,0%,100%,.3) .5s" }}>Chiều cao thấp nhất (trước)</li>
                            <li className="text-white w-[86%] m-auto_1 text-center p-lml cursor-pointer md:hover:bg-hover_gain" style={{ transition: "hsla(0,0%,100%,.3) .5s" }}>Chiều cao cao nhất (trước)</li>
                        </ul>
                    </div>
                </div>
                <div className="md:top-[1.2rem] absolute text-white w-full text-center z-hm cursor-pointer">Số thấp nhất (trước)</div>
            </div>
        </div>
    );
};

export default Sort;