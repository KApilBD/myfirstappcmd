import React from 'react';

import CapgeminiLogo from '../../assets/logo.png';
import classes from './Logo.css'


const logo = () => (
    <div className={classes.Logo}>
        <img src={CapgeminiLogo} alt ="Capgemini India"/>
    </div>
);

export default logo;