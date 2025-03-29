const Table = ({ id, setActive, active, readyTables }) => {
    const toggleActive = () => {
        setActive(id);
    };
    console.log(readyTables);

    return (
        <div>
            <button
                className={`table__button ${active === id ? 'fill' : ''} ${readyTables[id] ? 'border' : ''}`}
                onClick={toggleActive}
            >
                {id} {readyTables[id] && "🔔"}
            </button>
        </div>
    );
};

export default Table;
