import './app.scss';

import React from "react";
import { Container } from 'react-bootstrap';
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css';
import { useDispatch } from "react-redux";
import { addCampaigns } from "../redux/actions/campaignActions";
import { validateCampaignList } from "../utils/validator";

import MainRoutes from '../routes/main'
import Header from './header'
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    const dispatch = useDispatch();
    window.AddCampaigns = (campaigns) => {
        const valid = validateCampaignList(campaigns);
        if (valid) {
            dispatch(addCampaigns(campaigns))
        }
    };

    return (
        <div className='app' data-test="appComponent">
            <Router>
                <Header data-test="header"/>
                <Container className='main-content' data-test="mainContent">
                    <MainRoutes/>
                </Container>
                <NotificationContainer />
            </Router>
        </div>
    );
}

export default App;
