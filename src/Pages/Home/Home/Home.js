import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import bgimg from '../../../image/bannerbackground.png'
import './Home.css'

const Home = () => {
    return (
            <div className="home">
                <div class="input-group  w-50 rounded-pill m-auto">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
                <img className="img-fluid" src={bgimg} alt="" />
                <br />
                <div className="d-flex fs-4 w-25 m-auto justify-content-between Nav">
                    
                <Nav.Link as={HashLink} to="/breakfast">Breakfast</Nav.Link>
                <Nav.Link as={HashLink} to="/lunch">Lunch</Nav.Link>
                <Nav.Link as={HashLink} to="/dinner">Dinner</Nav.Link>
                </div>
            </div>
    );
};

export default Home;