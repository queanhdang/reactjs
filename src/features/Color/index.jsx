import React from 'react';
import PropTypes from 'prop-types';
import ColorList from './Components/ColorList';

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
            <ColorList colorList={colorList} />
        </div>
    );
}

export default ColorFeature;