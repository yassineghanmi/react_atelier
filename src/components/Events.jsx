/* eslint-disable no-unused-vars */
import axios from "axios";
import Event from "./Event";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";

function Events() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); 

      try {
        const response = await axios.get('src/data/events.json');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleBookEvent = async (eventId) => {
    try {
      const updatedData = data.map((item) =>
      
        item.id === eventId
          ? { ...item, nbParticipants: item.nbParticipants + 1, nbTickets: item.nbTickets - 1 }
          : item
          
      );
      
      setData(updatedData);
    } catch (error) {
      console.error("Error booking event:", error);
    }
  };
  return (
 <Stack direction="horizontal " gap={3}>
       
          {data.map((item) => (
            <Event
              key={item.id} 
              name={item.name} 
              price={item.price}
              nbTickets={item.nbTickets}
              nbParticipants={item.nbParticipants} 
              description={item.description}
              img={item.img}
              handleBookEvent={handleBookEvent}
            />
          ))}
       
        </Stack>
  );
}

export default Events;