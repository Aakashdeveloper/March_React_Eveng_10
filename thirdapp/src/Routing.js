import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listingApi';
import HotelDetails from './component/details/hotelDetails';
import PlaceBooking from './component/booking/placeBooking';
import Booking from './component/booking/bookingApi'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:id" component={Listing}/>
            <Route path="/details/:id" component={HotelDetails}/>
            <Route path="/booking/:hotel_name" component={PlaceBooking}/>
            <Route path="/viewBooking" component={Booking}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;