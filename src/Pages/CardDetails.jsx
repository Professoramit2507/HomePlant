import React, { useEffect, useState } from 'react';
import CardDetailsCard from '../Components/CardDetailsCard/CardDetailsCard';
import { useLoaderData, useParams } from 'react-router'; 
const CardDetails = () => {
  const data = useLoaderData(); 
  const { id } = useParams();   
  const [card, setCard] = useState({});

  useEffect(() => {
    if (data && id) {
      const SingleCard = data.find(singleCard => singleCard.id == id);
      setCard(SingleCard);
    }
  }, [data, id]);

  console.log('Data:', data);
  console.log('Id from URL:', id);
  console.log('Single Card:', card);

  return (
    <div className='w-11/12 mx-auto py-10'>
      <h2 className='text-xl font-bold mb-4'>This is card details</h2>
      {card ? (
        <CardDetailsCard card={card} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardDetails;
