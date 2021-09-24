import { Container } from '@material-ui/core';
import React from 'react';
import Content from '../components/Content';
import LeftSidebar from '../components/LeftSidebar';
import Navbar from '../components/Navbar';

const MainPage = () => {
    return (
        <div className="mainphoto">
            <Navbar />
            <Container>
                <h1 className="maintext">Your dream PHONES</h1>
                <div className="main">
                    <Content />
                    <LeftSidebar />
                </div>
            </Container>
        </div>
    );
};

export default MainPage;
