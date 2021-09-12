import React from 'react';
import{Link} from 'react-router-dom';

export default function Toppage(){
    return (
        <>
        <h1 align="center">TOP</h1>
        <Link to="/home">ENTER</Link>
        </>
    );
}