import React from 'react';
import logo from '../..//assets/logo.png'
import moment from 'moment'
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div>
            <div className='text-center my-4'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            <div className='my-4 d-flex mx-4'>
                <div className="btn btn-secondary">Letest</div>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default Header;