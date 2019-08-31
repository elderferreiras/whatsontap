import React from 'react';
import { Card } from "react-bootstrap";

const details = (props) => {
    const subtitle = [];
    if(props.abv) {
        subtitle.push(props.abv + '% ABV');
    }

    if(props.ibu) {
        subtitle.push(props.ibu + ' IBU');
    }

    return subtitle.length? <Card.Subtitle className="mb-2 text-muted">{subtitle.join(' | ')}</Card.Subtitle> : null;
};

export default details;