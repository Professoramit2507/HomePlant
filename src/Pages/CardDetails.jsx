import React, { useEffect, useState } from 'react';
import CardDetailsCard from '../Components/CardDetailsCard/CardDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [card,setCard] = useState({})
    //console.log(data,id,card)

    useEffect(()=>{
        const SingleCard = data.find(singleCard => singleCard.Id == id)
        setCard(SingleCard)
    },[data,id])
    return (
        <div className='w-11/12 mx-auto py-10'>
            This is card details
            <CardDetailsCard card={card}></CardDetailsCard>
        </div>
    );
};

export default CardDetails;