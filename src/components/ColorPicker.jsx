import { useState } from "react";
import { CiPickerHalf } from "react-icons/ci";

export default function ColorPicker ({onColorPick}) {
    // State to manage selected color
    const [color, setColor] = useState("#558eb9");

    // Function to save the selected color
    function save () { 
        console.log("save called")

        // Generate a unique ID for the color
        const currentId = localStorage.getItem("currentId") || "1"; 
        // Fetch existing colors from local storage or initialize an empty array
        const existingColorsJSON = localStorage.getItem("colors") || "[]"; 
        const existingColors = JSON.parse(existingColorsJSON) 
        // Create a new color object with ID, color value, and current timestamp
        const newColor = {id: currentId, color, date: Date.now()}
        // Add the new color to the existing colors array
        existingColors.push(newColor) 

        // Update local storage with the updated colors array
        localStorage.setItem("colors", JSON.stringify(existingColors)) 
        // Update the current ID for the next color
        localStorage.setItem("currentId", `${+currentId+1}`) 

        // Call the onColorPick function provided by the parent component, passing the new color
        onColorPick(newColor); 
    }

    return (   
        <div className="p-2 flex flex-col items-center">
            <div className="inline-flex items-center">       
                <h3 className=" text-zinc-700 text-4xl">Color Picker</h3>
                <p className="ml-5 text-5xl text-zinc-800"><CiPickerHalf /></p>
            </div>
            <div className="border-b-2 border-y-zinc-700 w-[100%] flex justify-center items-center pb-5 my-2">           
                <input className="my-2 p-1 w-[30%] min-h-[55px] border-none bg-[#ddbac1]" type="color" name="color" value={color}  onChange={(event)=>{setColor(event.target.value)}}/>
                <button onClick={save} className="py-[6px] ml-4 px-5 bg-pink-900 h-full text-white rounded hover:bg-pink-800 text-lg">Save</button>
            </div>
        </div>   
    )
}   