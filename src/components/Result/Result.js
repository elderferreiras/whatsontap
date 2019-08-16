import React from 'react';
import { Card } from "react-bootstrap";
import Details from '../Details/Details';

const result = (props) => {
    return (
        <Card className="mb-3">
            <Card.Header className="font-weight-bold">{props.result.name}</Card.Header>
            <Card.Body>
                <Details ibu={props.result.ibu} abv={props.result.abv}/>
                <Card.Text>
                    {props.result.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default result;