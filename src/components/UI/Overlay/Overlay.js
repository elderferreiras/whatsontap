import React from 'react';
import classes from './Overlay.scss';

const overlay = (props) => {
    return (
        <div className="Overlay">{props.children}</div>
    );
};

export default overlay;