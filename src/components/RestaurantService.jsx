import { useState } from 'react'

import React from "react";
import MenuItems from "./MenuItems.jsx";
import Drinks from "./Drinks.jsx";
import Co2Meter from "./Co2Meter.jsx";
import Bill from "./Bill.jsx";

const Service = ({ active, checked, setChecked, setReadyTables }) => {
    const menuItems = [
        {
            id: 1,
            name: "Oma’s Stoofpot",
            price: 15.99,
            co2: 0.05,
            drinks: [
                { id: 101, name: "Home-made Appelcider", price: 4.50, co2: 0.2 },
                { id: 102, name: "Rode wijn", price: 5.00, co2: 0.1 },
                { id: 103, name: "Kamille-thee", price: 3.00, co2: 0.3 }
            ]
        },
        {
            id: 2,
            name: "Boerenkost",
            price: 14.50,
            co2: 0.1,
            drinks: [
                { id: 201, name: "Zwarte bessen limonade", price: 3.50, co2: 0.3 },
                { id: 202, name: "Jenever", price: 6.00, co2: 0.1 },
                { id: 203, name: "Gemberthee", price: 3.00, co2: 0.2 }
            ]
        },
        {
            id: 3,
            name: "Ouderwetse Smaken",
            price: 16.50,
            co2: 0.1,
            drinks: [
                { id: 301, name: "Oranjebitter", price: 5.50, co2: 0.1 },
                { id: 302, name: "Koffie met een scheutje likeur", price: 4.00, co2: 0.1 },
                { id: 303, name: "Frambozenlimonade", price: 3.50, co2: 0.3 }
            ]
        },
        {
            id: 4,
            name: "Oma’s Gehaktbal",
            price: 13.99,
            co2: 0.05,
            drinks: [
                { id: 401, name: "Bruin bier", price: 5.00, co2: 0.1 },
                { id: 402, name: "Druivensap", price: 3.50, co2: 0.2 },
                { id: 403, name: "Pepermuntthee", price: 3.00, co2: 0.3 }
            ]
        },
        {
            id: 5,
            name: "Knusse Winterkost",
            price: 17.00,
            co2: 0.1,
            drinks: [
                { id: 501, name: "Warme chocolademelk", price: 4.00, co2: 0.2 },
                { id: 502, name: "Rode wijn", price: 5.00, co2: 0.1 },
                { id: 503, name: "Wildevruchtenlimonade", price: 3.50, co2: 0.2 }
            ]
        },
        {
            id: 6,
            name: "Zoete Herinneringen",
            price: 14.99,
            co2: 0.15,
            drinks: [
                { id: 601, name: "Vruchtensap", price: 3.50, co2: 0.3 },
                { id: 602, name: "Kruidenlikeur", price: 6.50, co2: 0.2 },
                { id: 603, name: "Zwarte thee met honing", price: 3.00, co2: 0.3 }
            ]
        },
        {
            id: 7,
            name: "Tijdloze Maaltijd",
            price: 15.50,
            co2: 0.1,
            drinks: [
                { id: 701, name: "Witte wijn", price: 5.50, co2: 0.2 },
                { id: 702, name: "Peer-wijn", price: 5.00, co2: 0.2 },
                { id: 703, name: "Kruidenthee", price: 3.00, co2: 0.3 }
            ]
        },
        {
            id: 8,
            name: "Grootmoeders Speciaal",
            price: 12.99,
            co2: 0.05,
            drinks: [
                { id: 801, name: "Puntensap", price: 3.50, co2: 0.2 },
                { id: 802, name: "Cognac", price: 6.50, co2: 0.1 },
                { id: 803, name: "Citroenlimonade", price: 3.50, co2: 0.3 }
            ]
        },
    ];

    const [checkedDrink, setCheckedDrink] = useState("");
    const selectedMenu = menuItems.find(item => item.id === checked);
    const [selectedOption, setSelectedOption] = useState("");
    const [chosenMenu, setChosenMenu] = useState(0);

    const handleChoosen = () => {
        if (selectedMenu) {
            setChosenMenu(prevPrice => prevPrice + selectedMenu.price);
        }

        setReadyTables(prev => ({ ...prev, [checked]: true }));
        
    };

    return (
        <div className={`${active ? "service" : "hidden"}`}>
            <h2 className="service__title">Table {active}</h2>
            <div className="service__row">
                <MenuItems menuItems={menuItems} setChecked={setChecked} checked={checked} />
                {selectedMenu && (
                    <div className="drinksAndMeter">
                        <Drinks drinks={selectedMenu.drinks} setSelectedOption={setSelectedOption} checkedDrink={checkedDrink} setCheckedDrink={setCheckedDrink} />
                        <Co2Meter co2Menu={selectedMenu.co2} selectedOption={selectedOption} />
                        <button className='service__addMenu' onClick={handleChoosen}>voeg toe</button>
                    </div>
                )}
                <Bill chosenMenu={chosenMenu} />
            </div>
        </div>
    );
};

export default Service;
