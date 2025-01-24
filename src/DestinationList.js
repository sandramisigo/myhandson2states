import React, {useState} from 'react'

const DestinationList = ({destinations, addToItinerary}) => {

   const [selectedActivity, setSelectedActivity]=useState('');

   function handleAdd(destination, activity){
    addToItinerary(destination,activity);
    setSelectedActivity(''); // after adding, it resets selected activity

   }


  return (
    <div>
      <h2>Favorite Destinations</h2>
      {destinations.map((destination)=>(
        <div key={destination.id}>
            <h3>{destination.name}</h3>
            <select value={selectedActivity} onChange={(e)=>setSelectedActivity(e.target.value)}>
                <option value="">Select Activity</option>
            {destination.activities.map((activity)=>(<option key={activity} value={activity}> 
                {activity} 
                </option>))
      };
     </select>
     <button onClick={()=>handleAdd(destination.name, selectedActivity)} disabled={!selectedActivity}>
        Add to itinerary</button>
        </div>
    ))}
    </div>
  )
};

export default DestinationList
