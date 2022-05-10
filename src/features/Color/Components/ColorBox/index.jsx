import React, { useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox(props) {
    const [color, setColor] = useState(props.item.color)
    return (
        <div>
            <div className="box1" style={{ background: color, width: '50px', height: '50px' }}></div>
            <button onClick={()=>setColor('black')} >Change to black</button>
            <button onClick={()=>setColor(props.item.color)} >Change to old color</button>
        </div>
    );
}

export default ColorBox;