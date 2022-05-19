import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../../../hooks/useClock';

function Clock(props) {
    const {timeString} = useClock();
    return (
        <>
        <p className="" style={{fontSize: '42px'}}>{timeString}</p>
        
        </>
    );
}

export default Clock;