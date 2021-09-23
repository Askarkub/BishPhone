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
                <h1 className="maintext">Телефоны на любой выбор</h1>
                <div className="main">
                    <LeftSidebar />
                    <Content />
                </div>
            </Container>
        </div>
    );
};

export default MainPage;
