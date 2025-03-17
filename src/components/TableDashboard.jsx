import Table from "./TableCard";

const Tables = () => {
    const tables = [
        { id: 1, name: "Table 1", width: "5rem" },
        { id: 2, name: "Table 2", width: "10rem" },
        { id: 3, name: "Table 3", width: "7rem" }
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold">Table Dashboard</h1>
            <ul className="list-disc pl-5">
                {tables.map((table) => (
                    <li key={table.id} style={{ width: table.width }}>
                        <Table name={table.name} width={table.width} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tables;