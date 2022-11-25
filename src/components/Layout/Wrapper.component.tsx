import * as React from "react";

const Wrapper: React.FC = () => {
    return (
        <div className="fixed inset-x-0 top-0 bottom-auto">
            <div className="absolute inset-x-0 top-0 bottom-auto overflow-hidden w-0 h-0"></div>
        </div>
    );
};

export default Wrapper;