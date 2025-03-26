
const Drinks = ({drinks}) => {
    return (
        <div className="drinks">
            <h2 className="drinks__title">Drinks</h2>
            <div className="recommended">
                <h3>Recommended drinks</h3>
                <ul>
                    {drinks.map(drink =>(
                        <li key={drink.id}>
                            {drink.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Drinks;