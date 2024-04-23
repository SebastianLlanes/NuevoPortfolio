import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPicker() {
  const [color1, setColor1] = useState('#00ffff'); // Color 1 inicial
  const [color2, setColor2] = useState('#9400d3'); // Color 2 inicial
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);

  const handleColorChange1 = (newColor) => {
    setColor1(newColor.hex);
    document.documentElement.style.setProperty('--first-color', newColor.hex); // Actualiza el color 1 en el CSS
  };

  const handleColorChange2 = (newColor) => {
    setColor2(newColor.hex);
    document.documentElement.style.setProperty('--second-color', newColor.hex); // Actualiza el color 2 en el CSS
  };

  const toggleColorPicker1 = () => {
    setShowColorPicker1(!showColorPicker1);
  };

  const toggleColorPicker2 = () => {
    setShowColorPicker2(!showColorPicker2);
  };

  return (
    <div className='colorPicker-principal-div' >
        
      <div className="color-container" onClick={toggleColorPicker1}>
        <div className="color-box" style={{ backgroundColor: color1 }}></div>
        {showColorPicker1 && (
          <div className="color-picker">
            <SketchPicker color={color1} onChange={handleColorChange1} />
          </div>
        )}
      </div>
      <div className="color-container" onClick={toggleColorPicker2}>
        <div className="color-box" style={{ backgroundColor: color2 }}></div>
        {showColorPicker2 && (
          <div className="color-picker">
            <SketchPicker color={color2} onChange={handleColorChange2} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorPicker;
