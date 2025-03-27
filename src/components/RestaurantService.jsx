import { useState } from 'react'

import React from "react";
import MenuItems from "./MenuItems.jsx";
import Drinks from "./Drinks.jsx";
import Co2Meter from "./Co2Meter.jsx";
// import Bill from "./Bill.jsx";

const Service = ({ active, checked, setChecked }) => {
    const menuItems = [
        {
            id: 1,
            name: "Oma’s Stoofpot",
            co2: 0.05,
            drinks: [
                { id: 101, name: "Home-made Appelcider", co2: 0.2 },
                { id: 102, name: "Rode wijn", co2: 0.1 },
                { id: 103, name: "Kamille-thee", co2: 0.3 }
            ]
        },
        {
            id: 2,
            name: "Boerenkost",
            co2: 0.1,
            drinks: [
                { id: 201, name: "Zwarte bessen limonade", co2: 0.3 },
                { id: 202, name: "Jenever", co2: 0.1 },
                { id: 203, name: "Gemberthee", co2: 0.2 }
            ]
        },
        {
            id: 3,
            name: "Ouderwetse Smaken",
            co2: 0.1,
            drinks: [
                { id: 301, name: "Oranjebitter", co2: 0.1 },
                { id: 302, name: "Koffie met een scheutje likeur", co2: 0.1 },
                { id: 303, name: "Frambozenlimonade", co2: 0.3 }
            ]
        },
        {
            id: 4,
            name: "Oma’s Gehaktbal",
            co2: 0.05,
            drinks: [
                { id: 401, name: "Bruin bier", co2: 0.1 },
                { id: 402, name: "Druivensap", co2: 0.2 },
                { id: 403, name: "Pepermuntthee", co2: 0.3 }
            ]
        },
        {
            id: 5,
            name: "Knusse Winterkost",
            co2: 0.1,
            drinks: [
                { id: 501, name: "Warme chocolademelk", co2: 0.2 },
                { id: 502, name: "Rode wijn", co2: 0.1 },
                { id: 503, name: "Wildevruchtenlimonade", co2: 0.2 }
            ]
        },
        {
            id: 6,
            name: "Zoete Herinneringen",
            co2: 0.15,
            drinks: [
                { id: 601, name: "Vruchtensap", co2: 0.3 },
                { id: 602, name: "Kruidenlikeur", co2: 0.2 },
                { id: 603, name: "Zwarte thee met honing", co2: 0.3 }
            ]
        },
        {
            id: 7,
            name: "Tijdloze Maaltijd",
            co2: 0.1,
            drinks: [
                { id: 701, name: "Witte wijn", co2: 0.2 },
                { id: 702, name: "Peer-wijn", co2: 0.2 },
                { id: 703, name: "Kruidenthee", co2: 0.3 }
            ]
        },
        {
            id: 8,
            name: "Grootmoeders Speciaal",
            co2: 0.05,
            drinks: [
                { id: 801, name: "Puntensap", co2: 0.2 },
                { id: 802, name: "Cognac", co2: 0.1 },
                { id: 803, name: "Citroenlimonade", co2: 0.3 }
            ]
        },
    ];

    const selectedMenu = menuItems.find(item => item.id === checked);
    const [selectedOption, setSelectedOption] = useState("");
    return (
        <div className={`${active ? "service" : "hidden"}`}>
            <h2 className="service__title">Table {active}</h2>
            <div className="service__row">
                <MenuItems menuItems={menuItems} setChecked={setChecked} checked={checked} />
                {selectedMenu && (
                    <div className="drinksAndMeter">
                        <Drinks drinks={selectedMenu.drinks} setSelectedOption={setSelectedOption}/>
                        <Co2Meter co2Menu={selectedMenu.co2} selectedOption={selectedOption} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Service;
