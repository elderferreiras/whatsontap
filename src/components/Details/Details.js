import React from 'react';
import { Card } from "react-bootstrap";

const details = (props) => {
    const subtitle = [];

    if(props.abv.length) {
        subtitle.push(props.abv + '% ABV');
    }

    if(props.ibu.length > 0) {
        subtitle.push(props.ibu + ' IBU');
    }

    return subtitle.length? <Card.Subtitle className="mb-2 text-muted">{subtitle.join(' | ')}</Card.Subtitle> : null;
};

export default details;