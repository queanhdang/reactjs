import React from 'react';
import PropTypes from 'prop-types';
import ColorList from './Components/ColorList';
import MagicBox from './Components/MagicBox';

ColorFeature.propTypes = {
    
};

function ColorFeature(props) {
    const colorList = [
        {
            id: 1,
            color: 'red'
        },
        {
            id: 2,
            color: 'blue'
        }
    ]
    return (
        <div>
            <MagicBox />
        </div>
    );
}

export default ColorFeature;