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
      setError(null); // Clear any previous errors

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
      // Simulate updating data in a real-world scenario (API call, etc.)
      const updatedData = data.map((item) =>
        item.id === eventId
          ? { ...item, nbParticipants: item.nbParticipants + 1, nbTickets: item.nbTickets - 1 }
          : item
      );
      setData(updatedData);
    } catch (error) {
      // Handle any errors during booking
      console.error("Error booking event:", error);
      // Display an error message to the user
    }
  };
  return (
 <Stack direction="horizontal " gap={3}>
       
          {data.map((item) => (
            <Event
              key={item.id} // Assuming each event has a unique 'id' property
              name={item.name} 
              price={item.price}
              nbTickets={item.nbTickets}
              nbParticipants={item.nbParticipants} // Uncomment to display nbofp
              description={item.description}
              img={item.img}
              handleBookEvent={handleBookEvent}
            />
          ))}
       
        </Stack>
  );
}

export default Events;