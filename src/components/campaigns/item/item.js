import React from 'react';
import './item.scss';

export default function Item(props) {
    const {name, startDate, endDate, Budget} = props;

    return (
        <tr>
            <td>{name}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>Active</td>
            <td>{Budget}</td>
        </tr>
    );
}
