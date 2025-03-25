import Table from "./TableCard";

const Tables = ({ setActive, active }) => {
    const tables = [
        { id: 1, width: "6rem" },
        { id: 2, width: "10rem" },
        { id: 3, width: "8rem" },
        { id: 4, width: "6rem" },
        { id: 5, width: "10rem" },
        { id: 6, width: "10rem" },
        { id: 7, width: "6rem" },
        { id: 8, width: "6rem" },
        { id: 9, width: "8rem" },
        { id: 10, width: "8rem" },
        { id: 11, width: "6rem" },
        { id: 12, width: "8rem" },
        { id: 13, width: "8rem" },
        { id: 14, width: "6rem" },
        { id: 15, width: "6rem" },
        { id: 16, width: "8rem" },
        { id: 17, width: "12rem" },
        { id: 18, width: "8rem" },
        { id: 19, width: "6rem" },
        { id: 20, width: "10rem" },
        { id: 21, width: "8rem" },
        { id: 22, width: "8rem" },
        { id: 23, width: "10rem" },
        { id: 24, width: "10rem" },
        { id: 25, width: "10rem" },
        { id: 26, width: "6rem" },
        { id: 27, width: "6rem" },
        { id: 28, width: "8rem" },
        { id: 29, width: "6rem" },
        { id: 30, width: "6rem" },
    ];

    return (
        <div className="tables">
            <h1 className="tables__title">Table Dashboard</h1>
            <ul className="tables__list">
                {tables.map((table) => (
                    <li className={`tables__listitem table-${table.id}`} key={table.id} style={{ width: table.width }}>
                        <Table width={table.width} id={table.id} setActive={setActive} active={active} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tables;