import React from 'react';
import errorimg from '../../assets/img/error-404.png'
import { Link } from 'react-router';
const Error = () => {
    return (
        <div className=' w-94 md:w-96 mx-auto md:mt-20 mt-0'>
            <img src={errorimg} alt="" />
           <Link to='/'>
                 <button className='btn btn-primary text-center'>Back Home</button>
           </Link>
        </div>
    );
};

export default Error;