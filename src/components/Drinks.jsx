const Drinks = ({ drinks, setSelectedOption, selectedOption }) => {
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="drinks">
            <h2 className="drinks__title">Drinks</h2>

            <div className="recommended">
                <h3 className="recommended__title">Recommended drinks</h3>
                <ul className="recommended__drinks">
                    {drinks.map(drink => (
                        <li key={drink.id} className="recommended__drink">
                            {drink.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="dropdown">
                <label htmlFor="drink-select" className="dropdown__title">
                    Choose a drink:
                </label>
                <select
                    id="drink-select"
                    className="dropdown__content"
                    value={selectedOption}
                    onChange={handleChange}
                >
                    <option value="">-- Select a drink --</option>
                    {drinks.map(drink => (
                        <option key={drink.id} className="drink" value={drink.co2}>
                            {drink.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Drinks;
