import React from 'react';
import { FaFacebook, FaGithubAlt, FaGoogle, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <div>
                <h3>log in with</h3>
                <button className='mb-2 text-primary px-4 py-1'><FaGoogle />login with google</button>
                <br />
                <button className='text-secondary px-4 py-1'><FaGithubAlt /> login with github</button>
            </div>
            <div className='border'>
                <h3>join with us</h3>
                <ul>
                    <li><FaFacebook></FaFacebook> facebook</li>
                    <li><FaInstagramSquare /> instagram</li>
                    <li><FaTwitter /> twiter</li>
                </ul>
            </div>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;