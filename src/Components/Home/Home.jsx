import React, { Suspense } from 'react';
import {motion} from 'framer-motion'
import { Link, useLoaderData } from 'react-router';
import HomeData from '../HomeData/HomeData';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {

    const homeData = useLoaderData()
    console.log(homeData)
    return (
        <motion.div   initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}>
              


            <h1 className='text-2xl font-bold text-center py-5'>This is <span className='text-green-600'>Home </span></h1>
           
            <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto py-5 gap-5'>
                <Suspense fallback={<span>Loading...</span>}>
                    {
                        homeData.map((homeData) => <HomeData key={homeData.plantId} homeData={homeData}></HomeData>)
                    }
                </Suspense>
            </div>
             <div className="card-actions flex justify-center">
                    <Link to='/plants'>
                        <button className="btn btn-secondary">See All</button>
                    </Link>
        </div>
            
        </motion.div>
    );
};

export default Home;