import React from 'react'

const Itinerary = ({itinerary, deleteFromItinerary}) => {
  return (
    <div>
      <h2>My Itinerary</h2>
      <ul> {itinerary.map((item, index)=> (
        <li key={index}> 
            Destination:{item.destination} - Activity:{item.activity}
            <button onClick={()=> deleteFromItinerary(index)}>Delete</button>
            </li>
            ))}
        </ul>
        <h3>Total  Destinations: {itinerary.length}</h3>
    </div>
  )
};

export default Itinerary
