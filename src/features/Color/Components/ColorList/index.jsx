import React from 'react';
import PropTypes from 'prop-types';
import ColorBox from '../ColorBox';

ColorList.propTypes = {
    colorList: PropTypes.array
};

ColorList.defaultProps = {
    colorList: []
}

function ColorList(props) {
    const {colorList} = props 
    return (
        <div className="list-color">
            {colorList.map(item => (
                <ColorBox key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ColorList;