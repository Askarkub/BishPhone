import { Container } from '@material-ui/core';
import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Navbar from '../components/Navbar';

const InfoPage = () => {

    return (
        <div className="mainphoto">
            <Navbar />
            <Container>
                <h1 className="maintext">Your dream PHONES</h1>
                <div className="main">
                    <div className="content">

                    </div>
                    <LeftSidebar />
                </div>
            </Container>
        </div>
    );
};

export default InfoPage;
