import React from 'react';

type NewComponentType = {
    carFeatures: Array<CarFeaturesType>
}

export type CarFeaturesType = {
    manufacturer: string
    model: string
}


export const NewComponent = (props: NewComponentType) => {
    return (
        <table>
            <tbody>
            {props.carFeatures.map((objectFromCarFeatures, index) => {
                return (
                    <tr key={index}>
                        <th>{objectFromCarFeatures.manufacturer}</th>
                        <th>{objectFromCarFeatures.model}</th>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}