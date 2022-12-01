import * as React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-white" style={{padding: '2px 0'}}>
            <div className="md:max-w-screen-xl md:p-1 md:m-auto md:w-full flex justify-between items-center">
                <div className="global-header__title">
                    <h1 className="text-base w-[170px] text-center" style={{margin: '6px 0'}}>
                        <a href="/" className="block"><img src="https://vn.portal-pokemon.com/img/common/logo.png" alt="Pokemon" width="130"/></a>
                    </h1>
                </div>
            </div> 
        </header>
    );
};

export default Header;