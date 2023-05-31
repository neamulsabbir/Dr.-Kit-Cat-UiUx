import React from 'react';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';
import BookShedule from './BookShedule/BookShedule';
import Services from './Services/Services';
import Groomers from './Groomers/Groomers';
import Blog from './Blog/Blog';
import Footer from '../../../ShareFolder/Footer/Footer';
import Facilities from './Facilities/Facilities';

const Home = () => {

    return (
        <div>
            <Header />
            <Reviews />
            <BookShedule />
            <Services />
            <Facilities />
            <Groomers />
            <Blog />
            <Footer />
        </div>
    );
};
export default Home;