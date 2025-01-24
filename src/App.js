import React,{useState} from 'react';
import DestinationList from './DestinationList';
import Itinerary from './Itinerary';
import './App.css';


function App() {
const [destinations]=useState([
  {id:1, name:"Bali", activities: ["hiking", "swimming", "museum", "coding"]},
  {id:1, name:"Los Angeles", activities: ["wine", "fishing", "shopping", "nightlife"]},
  {id:1, name:"Tokyo", activities: ["food", "swimming", "hiking", "dining"]},
  {id:1, name:"Paris", activities: ["hiking", "sight seeing", "museum", "coding"]},
  {id:1, name:"New York", activities: ["go-carting", "Central Park", "Broadway", "nightlife"]},
]);

const [itinerary, setItinerary]= useState([]);

const addToItinerary=(destination,activity)=>{
    setItinerary([...itinerary, {destination, activity}]);
};

const deleteFromItinerary=(indexToDelete)=>{
  const updatedItinerary=itinerary.filter((item, index)=> index!==indexToDelete);
  setItinerary(updatedItinerary);
}

  return (
    <div className="App">
      <h1>My Vacations Planner</h1>
      <DestinationList  destinations={destinations} addToItinerary={addToItinerary} />
      <Itinerary itinerary={itinerary} deleteFromItinerary={deleteFromItinerary}/>
      
    </div>
  );
}

export default App;
