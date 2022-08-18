import React, {MouseEvent, useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {
    //BLL
    const [money, setMoney] = useState([
        {banknotes: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknotes: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknotes: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknotes: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknotes: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknotes: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknotes: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknotes: 'ruble', nominal: 50, number: ' v1234567890'},
    ])


//UI
    return (
        <>
            <NewComponent current={money}/>
        </>
    )
}

export default App;
