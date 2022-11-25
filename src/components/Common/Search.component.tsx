import * as React from "react";

const Search: React.FC = () => {
    return (
        <div className="mt-12 text-[14px] bg-black">
            <div className="flex pt-[2.71rem] mr-[32.64rem] ml-[32.64rem] justify-center items-center">
                <div className="m-[0 0 15px]">
                    <form method="get" className="flex flex-col justify-center items-start">
                        <input type="text" className="w-[8.5rem] h-[1.6rem] border-solid border 
                            border-current rounded-lg 
                            block p-[8px] mb-[10px] leading-[1.42857143]
                            text-black align-middle text-[14px]" name="name" placeholder="Search Pokemon"/>
                        {/* <div className="search__label">Use this input to search for any pokemon. In an instant.</div> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;