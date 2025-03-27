import React from "react";


const MenuItems = ({ menuItems, setChecked, checked }) => {
    const toggleChecked = (id) => {
        setChecked(id);
    };

    return (
        <div className="menu">
            <h2 className="menu__title">Menu</h2>
            <ul className="menuItems">
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <button className={`item ${checked === item.id ? 'checked' : ''}`} id={item.id} onClick={() => toggleChecked(item.id)}>
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuItems;