import React, { useState } from 'react';
import { GithubPicker } from 'react-color';

function ColorPicker() {
  const [color1, setColor1] = useState('#00ffff');
  const [color2, setColor2] = useState('#9400d3');
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorChange = (newColor) => {
    if (selectedColor === 'color1') {
      setColor1(newColor.hex);
      document.documentElement.style.setProperty('--first-color', newColor.hex);
    } else if (selectedColor === 'color2') {
      setColor2(newColor.hex);
      document.documentElement.style.setProperty('--second-color', newColor.hex);
    }
  };
  const handleColorContainerClick = (color) => {
    setSelectedColor(color);
  };
  const handleColorPickerClose = () => {
    setSelectedColor(null);
  };
  return (
    <div className='colorPicker-principal-div'>
      <div className="color-container" onClick={() => handleColorContainerClick('color1')}>
        <div className="color-box" style={{ backgroundColor: color1 }}></div>
        {selectedColor === 'color1' && (
          <div className="color-picker">
            <GithubPicker 
              color={color1}
              onChange={handleColorChange}
              onChangeComplete={handleColorPickerClose}
            />
          </div>
        )}
      </div>
      <div className="color-container" onClick={() => handleColorContainerClick('color2')}>
        <div className="color-box" style={{ backgroundColor: color2 }}></div>
        {selectedColor === 'color2' && (
          <div className="color-picker">
            <GithubPicker
              color={color2}
              onChange={handleColorChange}
              onChangeComplete={handleColorPickerClose}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default ColorPicker;

