import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from './layouts/Header';
import Side from './layouts/SideBar';

const MainView = ({ route }) => (
    <div className='main-view'>
        <Header/>
        <div className='right-view'>
            <Side/>
            <div className='view'>
                {renderRoutes(route.childRoutes)}
            </div>
        </div>
    </div>
);

MainView.prototype.propTypes = {
    route: PropTypes.object,
};

export default MainView;
