import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

type Starship = {
  name: string;
  model: string;
  // Add other properties as needed
}

const StarshipDetails: React.FC = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState<Starship | null>(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}/`)
      .then(response => {
        setStarship(response.data);
      })
      .catch(error => console.log(error));
  }, [id]);

  if (!starship) return <p>Loading...</p>;

  return (
    <div>
      <h2>{starship.name}</h2>
      <p>{starship.model}</p>
      {/* Show other properties as needed */}
      <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt={starship.name} />
    </div>
  );
};

export default StarshipDetails;
