import React, { useEffect, useRef, useState } from 'react';


function randomColor(currentColor) {    
    const COLOR_LIST = ['red', 'pink', 'yellow', 'green', 'blue', 'gray'];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    while(currentIndex === newIndex) {
        const randomIndex = Math.trunc(Math.random() * 3);
        newIndex = randomIndex;
    }
    
    return COLOR_LIST[newIndex];
}
function useMagicColor(props) {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000)
        return () => {
            clearInterval(colorInterval);
        }
    })
    return color;
}

export default useMagicColor;