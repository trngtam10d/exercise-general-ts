import * as React from "react";

const Logo: React.FC = () => {
    return (
        <header className="bg-white" style={{padding: '2px 0'}}>
            <div className="global-header__body">
                <div className="global-header__title">
                    <h1 className="global-header__site-name">
                        <a href="/"><img src="https://vn.portal-pokemon.com/img/common/logo.png" alt="Pokemon" width="130"/></a>
                    </h1>
                </div>
            </div> 
            <div className="global-header__sp-menu visible-xs">
                <button>
                    <span></span> <span></span> <span></span>
                </button>
            </div>
        </header>
    );
};

export default Logo;