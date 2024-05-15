export default function TableRow ({id,color,colorHex, date}) {

    // Function to parse and format the date
    function parseDate(date){
        const dateObject = new Date(date);
        console.log(dateObject)

        const year = dateObject.getFullYear();
        console.log(year);

        const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
        console.log(month);

        const day = dateObject.getDate().toString().padStart(2, "0");
        console.log(day);

        const hour = dateObject.getHours().toString().padStart(2, "0");
        console.log(hour);

		const minutes = dateObject.getMinutes().toString().padStart(2, "0");
        console.log(minutes);

        return `${year}-${month}-${day}, ${hour}:${minutes}`;
    }

    return (
        <tr className="text-xl text-zinc-700">
            {/* Display ID */}
            <td>{id}</td>
            {/* Display colored box representing the color */}
            <td><div className={`w-[40px] h-[40px] mx-auto`} style={{background: color}}></div></td>
            {/* Display color hex value */}
            <td>{colorHex}</td>
            {/* Display formatted date */}
            <td>{parseDate(date) }</td>
        </tr>
    );
} 