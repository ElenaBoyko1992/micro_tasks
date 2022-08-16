import React from 'react';
import './App.css';
import {CarFeaturesType, NewComponent} from "./NewComponent";

function App() {
    //BLL
    const topCars: Array<CarFeaturesType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ]


    //UI
    return (
        <>
            <NewComponent carFeatures={topCars}/>
        </>
    );
}

export default App;
