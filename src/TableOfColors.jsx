import TableRow from "./TableRow";

function TableOfColors({colors}) { 
    return (
    <div className="p-4 max-h-[500px] overflow-y-auto">
    <table className="border border-collapse text-2xl w-[100%] text-zinc-700"> 
        <thead>
            <tr>
                <th>ID</th>
                <th>Color</th>
                <th>Hex</th>
                <th>Save date</th>
            </tr>
        </thead>
        <tbody>
            {/* <TableRow id="example" color="#D22828" colorHex="#D22828" date="2024-02-15 09:21" /> */}
            {colors.map((color => 
            <TableRow 
                id={color.id} 
                color={color.color} 
                colorHex={color.color} 
                date={color.date}
                key={color.id} 
            />
            )) } 
        </tbody>
    </table>
    </div>
    )
}

export default TableOfColors; 