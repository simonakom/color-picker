import { useState } from "react"
import ColorPicker from './components/ColorPicker';
import TableOfColors from './components/TableOfColors';

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
    <div className='flex justify-center items-center h-screen py-8 px-5'>
    <div className='border border-pink-200 rounded-2xl shadow-2xl p-4 bg-[#ddbac1] zoom-out'>
      <ColorPicker onColorPick={onColorPick}/>
      <TableOfColors colors={colors} />
    </div>
  </div>
  );
}

export default App;
