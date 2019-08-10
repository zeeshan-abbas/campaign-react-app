import React from 'react';
import './item.scss';

export default function Item(props) {
    const {name, startDate, endDate, isActive, budget} = props;

    return (
        <tr className="campaign-item">
            <td>{name}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td><div className={`indicator ${isActive ? 'active' : 'inactive'}`} ></div> {isActive ? 'Active' : 'Inactive'}</td>
            <td>{budget}</td>
        </tr>
    );
}
