import { useState } from "react"
import ColorPicker from './components/ColorPicker';
import TableOfColors from './components/TableOfColors';

function App() {
  // State to manage colors
  const [colors, setColors] = useState(()=>{ 
    // Fetch colors from local storage or initialize an empty array
    const localColors = JSON.parse(localStorage.getItem("colors")) || [];
    return localColors;
  });  

  // Function to handle color pick event
  function onColorPick(color) {
    console.log(colors)
    // Update colors state by adding the new color
    setColors ([...colors, color]) 
    console.log("informs about added new color", color )
  }

  return (
    <div className='flex justify-center items-center mt-5 py-16 px-5'>
    <div className='border border-neutral-400 rounded-2xl shadow-2xl p-4 table-bg zoom-out'>
      {/* ColorPicker component for picking colors */}
      <ColorPicker onColorPick={onColorPick}/>
      {/* TableOfColors component for displaying saved colors */}
      <TableOfColors colors={colors} />
    </div>
  </div>
  );
}

export default App;
