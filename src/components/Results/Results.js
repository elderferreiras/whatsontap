import React from 'react';
import Result from '../Result/Result';

const results = (props) => {
    return props.results.map(result => <Result result={result} key={result.id}/>);
};

export default results;