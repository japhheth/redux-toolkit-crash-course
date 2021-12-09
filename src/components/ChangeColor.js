import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColorTheme } from '../features/theme/theme';

const ChangeColor = () => {
    const [color, setColor] = useState('');
    const dispatch = useDispatch()

    const changeColorHandler = () => {
        dispatch(changeColorTheme(color))
    }
    return (
        <div>
            <input type="text" onChange={(event) => { setColor(event.target.value) }} />
            <button onClick={changeColorHandler}>Change Color</button>
        </div>
    )
}

export default ChangeColor;