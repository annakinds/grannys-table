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
            drinks: [
                { id: 101, name: "Home-made Appelcider" },
                { id: 102, name: "Rode wijn" },
                { id: 103, name: "Kamille-thee" }
            ]
        },
        {
            id: 2,
            name: "Boerenkost",
            drinks: [
                { id: 201, name: "Zwarte bessen limonade" },
                { id: 202, name: "Jenever" },
                { id: 203, name: "Gemberthee" }
            ]
        },
        {
            id: 3,
            name: "Ouderwetse Smaken",
            drinks: [
                { id: 301, name: "Oranjebitter" },
                { id: 302, name: "Koffie met een scheutje likeur" },
                { id: 303, name: "Frambozenlimonade" }
            ]
        },
        {
            id: 4,
            name: "Oma’s Gehaktbal",
            drinks: [
                { id: 401, name: "Bruin bier" },
                { id: 402, name: "Druivensap" },
                { id: 403, name: "Pepermuntthee" },
            ]
        },
        {
            id: 5,
            name: "Knusse Winterkost",
            drinks: [
                { id: 501, name: "Warme chocolademelk" },
                { id: 502, name: "Rode wijn" },
                { id: 503, name: "Wildevruchtenlimonade" }
            ]
        },
        {
            id: 6,
            name: "Zoete Herinneringen",
            drinks: [
                { id: 601, name: "Vruchtensap" },
                { id: 602, name: "Kruidenlikeur" },
                { id: 603, name: "Zwarte thee met honing" }
            ]
        },
        {
            id: 7,
            name: "Tijdloze Maaltijd",
            drinks: [
                { id: 701, name: "Witte wijn" },
                { id: 702, name: "Peer-wijn" },
                { id: 703, name: "Kruidenthee" }
            ]
        },
        {
            id: 8,
            name: "Grootmoeders Speciaal",
            drinks: [
                { id: 801, name: "Puntensap" },
                { id: 802, name: "Cognac" },
                { id: 803, name: "Citroenlimonade" }
            ]
        },
    ];
    const selectedMenu = menuItems.find(item => item.id === checked);


    return (
        <div className={`${active ? 'service' : 'hidden'}`}>
            <h2 className="service__title">Table {active}</h2>
            <div className="service__row">
                <MenuItems menuItems={menuItems} setChecked={setChecked} checked={checked} />
                <div className="drinksAndMeter">
                {selectedMenu && <Drinks drinks={selectedMenu.drinks} />}
                <Co2Meter />
                </div>
            </div>

        </div>
    );

}

export default Service;