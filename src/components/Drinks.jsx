
const Drinks = ({drinks}) => {
    return (
        <div className="drinks">
            <h2 className="drinks__title">Drinks</h2>
            <div className="recommended">
                <h3 className="recommended__title">Recommended drinks</h3>
                <ul className="recommended__drinks">
                    {drinks.map(drink =>(
                        <li key={drink.id} className="recommended__drink">
                            {drink.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div class="dropdown">
                <label htmlFor="" className="dropdown__title">Choose a drink:</label>
                <select class="dropdown__content">
                    {/* <option value="">chosen drink</option> */}
                    {drinks.map(drink => (
                        <option key={drink.id} className="drink">
                            {drink.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Drinks;