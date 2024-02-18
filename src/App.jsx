import { useState } from "react"
import './App.css';
import ColorPicker from './ColorPicker';
import TableOfColors from './TableOfColors';

function App() {

  const [colors, setColors] = useState(()=>{ 
    const localColors = JSON.parse(localStorage.getItem("colors")) || [];
    return localColors;
  });  

  function onColorPick(color) {
    console.log(colors)
    setColors ([...colors, color]) 
    console.log("informs about added new color", color )
  }

  return (
    <div className='flex justify-center items-center min-h-screen my-5 mx-5'>
    <div className='border border-pink-200 rounded-3xl shadow-2xl p-4 bg-[#ddbac1] min-h-[500px] max-w-[100%]'>
      <ColorPicker onColorPick={onColorPick}/>
      <TableOfColors colors={colors} />
    </div>
  </div>
);
}

export default App;
