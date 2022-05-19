import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../../../hooks/useClock';

function BetterClock(props) {
    const {timeString} = useClock();
    return (
        <>
        <p className="" style={{fontSize: '42px', color: 'red'}}>{timeString}</p>
        
        </>
    );
}

export default BetterClock;