import 'react-datepicker/dist/react-datepicker.css';
import './campaigns.scss';

import React,  { useState } from 'react';
import { Table, Pagination, Row, Col, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import Item from './item';

const ITEMS_PER_PAGE = 2;

export default function Campaigns(props) {
    const [state, setState] = useState({
        page: 1,
        searchText: '',
        startDateText: '',
        endDateText: ''
    });

    const campaignList = useSelector(state => state.campaign);
    const campaignDiv = campaignList.map((campaign, index) => <Item key={index} {...campaign} />);

    const handlePageChange = page => {
        setState({page})
    };

    const totalPages = Math.ceil(campaignList.length / ITEMS_PER_PAGE);
    const pages = Array.from({length: totalPages}).map((val, index) => {
        const pageNo = index + 1;
        return <Pagination.Item onClick={handlePageChange.bind(this, pageNo)} key={index} active={pageNo === state.page}>{pageNo}</Pagination.Item>
    });

    return (
        <div className='main-content'>
            <Row className='content-title'>
                <Col><h1>Campaigns</h1></Col>
            </Row>
            <Row className='filters-row'>
                <Col sm={3} md='auto' lg={2}>
                    <DatePicker
                        className="form-control"
                        onChange={() => {}}
                        placeholderText="Start Date"
                    />
                </Col>
                <Col sm={3} md='auto' lg={2}>
                    <DatePicker
                        className="form-control"
                        onChange={() => {}}
                        placeholderText="End Date"
                    />
                </Col>
                <Col md='auto' lg={{span: 4, offset: 4}}>
                    <Form.Control type="search" placeholder="Search" />
                </Col>
            </Row>
            <Table className='table-content' responsive>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Budget</th>
                </tr>
                </thead>
                <tbody>
                {campaignDiv}
                </tbody>
            </Table>
            <Pagination className="justify-content-center" size="sm">{pages}</Pagination>
        </div>
    );
}
