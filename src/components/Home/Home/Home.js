import React from 'react';
import Brand from '../Brand/Brand';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';

import Header from '../Header/Header';
import PreviousWork from '../PreviousWork/PreviousWork';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header>
            </Header>
            <Brand></Brand>
            <Services></Services>
            <PreviousWork></PreviousWork>
            <Clients></Clients>
            <Contact></Contact>
            

        </div>
    );
};

export default Home;