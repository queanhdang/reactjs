import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';

ClockFeatures.propTypes = {
    
};


function ClockFeatures(props) {
    const [show, setShow] = useState(true);
    const setShowClock = () => {
        setShow(!show);
    }
    
    return (
        <>
        {show && <Clock />}
        <button onClick={setShowClock}>Show/Hidden Clock</button>
        {show && <BetterClock />}
        <button onClick={setShowClock}>Show/Hidden Clock</button>
        </>
    );
}

export default ClockFeatures;