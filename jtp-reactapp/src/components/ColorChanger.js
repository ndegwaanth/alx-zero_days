import React, { useRef } from 'react';

function ColorChanger() {
  const divRef = useRef(null);

  const changeColor = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'lightblue';
    }
  };

  return (
    <div>
      <div ref={divRef} style={{ width: '200px', height: '200px', backgroundColor: 'lightcoral' }}>
        Click the button to change my color!
      </div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ColorChanger;