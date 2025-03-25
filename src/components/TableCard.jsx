import { useState } from "react";

const Table = ({ id, setActive, active }) => {
//noem active nog anders, bv. currenTabel
    const toggleActive = () => {
        setActive(id);
    };

    return (
        <div>
            <button
                className={`table__button ${active === id ? 'fill' : ''}`}
                onClick={toggleActive}
            >
                {id}
            </button>
        </div >
    );
};

export default Table;
