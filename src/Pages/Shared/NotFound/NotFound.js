import React from 'react';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='NotFound-main'>
            <div>
                <FontAwesomeIcon className='icon' icon={faCircleExclamation}></FontAwesomeIcon>
            </div>
            <div>
                <h1>404</h1>
                <p>Page Not Found</p>
            </div>
        </div>
    );
};

export default NotFound;