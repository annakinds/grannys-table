import MenuItems from "./MenuItems.jsx";
import { useState } from "react";

// import Drinks from "./Drinks.jsx";
// import Co2Meter from "./Co2Meter.jsx";
// import Bill from "./Bill.jsx";


const Service = ({ active }) => {
    return (
        <div className={`${active ? 'service' : 'hidden'}`}>
            <h2>Table {active}</h2>
            <MenuItems />
            {/* <Drinks />
            <Co2Meter />
            <Bill /> */}
        </div>
    );
}

export default Service;