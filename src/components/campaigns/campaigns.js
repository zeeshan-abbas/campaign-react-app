import 'react-datepicker/dist/react-datepicker.css';
import './campaigns.scss';

import React, {useState} from 'react';
import {Col, Form, Pagination, Row, Table} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import DatePicker from 'react-datepicker';
import {
    applyDateFilter,
    applySearch,
    applyPagination,
    isCampaignActive,
    formatBudget
} from './campaigns.util';
import { ITEMS_PER_PAGE } from '../../constants';
import useDebounce from '../../hooks/debouce';
import Item from './item';

export default function Campaigns() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const debouncedSearchText = useDebounce(searchText);

    let campaignList = useSelector(state => state.campaign);
    campaignList = applyDateFilter(campaignList, startDate, endDate);
    campaignList = applySearch(campaignList, debouncedSearchText);

    const paginatedList = applyPagination(campaignList, currentPage, ITEMS_PER_PAGE);
    const campaignDiv = getCampaignDiv(paginatedList);
    const paginationDiv = getPaginationDiv(campaignList.length, currentPage, setCurrentPage);
    return (
        <div className='main-content'>
            <Row className='content-title'>
                <Col><h1>Campaigns</h1></Col>
            </Row>
            <Row className='filters-row'>
                <Col sm={3} md='auto' lg={2}>
                    <DatePicker
                        className='form-control'
                        placeholderText='Start Date'
                        selectsStart
                        selected={startDate}
                        startDate={startDate}
                        endDate={endDate}
                        maxDate={endDate}
                        onChange={date => {setStartDate(date)}}
                    />
                </Col>
                <Col sm={3} md='auto' lg={2}>
                    <DatePicker
                        className='form-control'
                        placeholderText='End Date'
                        selectsEnd
                        selected={endDate}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        onChange={date => {setEndDate(date)}}
                    />
                </Col>
                <Col md='auto' lg={{span: 4, offset: 4}}>
                    <Form.Control
                        type='search'
                        placeholder='Search'
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />
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
            <Pagination className='justify-content-center' size='sm'>{paginationDiv}</Pagination>
        </div>
    );
}

function getCampaignDiv(campaignList) {
    return campaignList.map(({id, name, startDate, endDate, Budget}) => {
        return <Item
            key={id}
            name={name}
            startDate={startDate}
            endDate={endDate}
            isActive={isCampaignActive(startDate, endDate)}
            budget={formatBudget(Budget)} />
    });
}

function getPaginationDiv(totalItems, currentPage, setCurrentPage) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    return Array.from({length: totalPages}).map((val, index) => {
        const pageNo = index + 1;
        return (
            <Pagination.Item
                key={index}
                onClick={() => setCurrentPage(pageNo)}
                active={pageNo === currentPage} >
                {pageNo}
            </Pagination.Item>)
    });
}