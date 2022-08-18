import React, {useState} from "react";
import {Button} from "./components/Button";

type CurrentType = {
    banknotes: string
    nominal: number
    number: string
}
type NewComponentPropsType = {
    current: Array<CurrentType>
}
type FilterType = 'all' | 'dollar' | 'ruble'

export const NewComponent = (props: NewComponentPropsType) => {
    let currentMoney = props.current;
    const [filter, setFilter] = useState<FilterType>('all')

    if (filter === 'dollar') {
        currentMoney = props.current.filter(filteredMoney => filteredMoney.banknotes === 'dollar')
    }
    if (filter === 'ruble') {
        currentMoney = props.current.filter(filteredMoney => filteredMoney.banknotes === 'ruble')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknotes}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'all'} callBack={() => onClickFilterHandler('all')}/>
                <Button name={'rubles'} callBack={() => onClickFilterHandler('ruble')}/>
                <Button name={'dollars'} callBack={() => onClickFilterHandler('dollar')}/>
            </div>
        </>
    )
}