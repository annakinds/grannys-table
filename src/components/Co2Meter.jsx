const Co2Meter = ({ co2Menu, selectedOption }) => {
    let procentMeter = (100 * co2Menu) + (100 * selectedOption);
    let widthMeter = (20 * co2Menu) + (20 * selectedOption);
    return (
        <div className="co2Meter">
            <h2 className="co2Meter__title">CO2 meter</h2>
            <div className="meter__background">
                <div className="meter" style={{ width: `${widthMeter}rem` }}></div>
                <p className="meter__discount">-{procentMeter}%</p>
            </div>
        </div>
    );
}

export default Co2Meter;
