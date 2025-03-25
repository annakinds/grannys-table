
const Service = () => {
    const menuItems = [
        { id: 1, name: "Oma’s Stoofpot" },
        { id: 2, name: "Boerenkost" },
        { id: 3, name: "Ouderwetse Smaken" },
        { id: 4, name: "Oma’s Gehaktbal" },
        { id: 5, name: "Knusse Winterkost" },
        { id: 6, name: "Zoete Herinneringen" },
        { id: 7, name: "Tijdloze Maaltijd" },
        { id: 8, name: "Grootmoeders Speciaal" },
    ];

    return (
        <div className="menu">
            <h2 className="menu__title">Menu</h2>
            <ul className="menuItems">
                {menuItems.map((menuItem) => (
                    <li key={menuItem.id}>
                        <button className="menuItem">
                            <input type="checkbox" id={menuItem.id} />
                            <label htmlFor={menuItem.id}>{menuItem.name}</label>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Service;