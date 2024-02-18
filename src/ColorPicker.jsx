import { useState } from "react";
import { CiPickerHalf } from "react-icons/ci";


export default function ColorPicker ({onColorPick}) {
    const [color, setColor] = useState("#C45A9D");

    function save () { 
        console.log("save called")

        const currentId = localStorage.getItem("currentId") || "1"; 
        const existingColorsJSON = localStorage.getItem("colors") || "[]"; 
        const existingColors= JSON.parse(existingColorsJSON) 
        const newColor = {id: currentId, color, date: Date.now()}
        existingColors.push(newColor) 

        localStorage.setItem("colors", JSON.stringify(existingColors)) 
        localStorage.setItem("currentId", `${+currentId+1}`) 

        onColorPick(newColor); 
    }

    return (   
        <div className="p-2 flex flex-col items-center">
            <div className="inline-flex items-center">       
                <h3 className=" text-zinc-700 text-4xl">Color Picker</h3>
                <p className="ml-5 text-5xl text-zinc-800"><CiPickerHalf /></p>
            </div>
            <div className="border-b-2 border-y-rose-400 w-[100%] flex justify-center items-center pb-5 my-2">           
                <input className="my-2 p-1 w-[30%] min-h-[55px] border-none bg-[#ddbac1]" type="color" name="color" value={color}  onChange={(event)=>{setColor(event.target.value)}}/>
                <button onClick={save} className="py-[6px] ml-4 px-5 bg-rose-400 h-full text-white rounded hover:bg-rose-500 text-lg">Save</button>
            </div>
        </div>   
    )
}   