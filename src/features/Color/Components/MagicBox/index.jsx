import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../../../hooks/useMagicColor';

MagicBox.propTypes = {
    
};

function MagicBox(props) {
    const color = useMagicColor();
    return (
        <div className="magic-box" style={{background: color, width: '50px', height: '50px'}}></div>
    );
}

export default MagicBox;