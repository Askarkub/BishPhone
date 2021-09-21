import { Container } from '@material-ui/core';
import React from 'react';
import Content from '../components/Content';
import LeftSidebar from '../components/LeftSidebar';
import Navbar from '../components/Navbar';

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <div className="main">
                    <LeftSidebar />
                    <Content />
                </div>
            </Container>
        </div>
    );
};

export default MainPage;
