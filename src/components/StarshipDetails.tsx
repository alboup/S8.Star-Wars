import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

type Starship = {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    pilots: string[];
    length: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
  }
  
  const StarshipDetails: React.FC = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState<Starship | null>(null);
    const [imageFailed, setImageFailed] = useState(false);
  
    useEffect(() => {
      axios.get(`https://swapi.dev/api/starships/${id}/`)
        .then(response => {
          setStarship(response.data);
        })
        .catch(error => console.log(error));
    }, [id]);

    const handleImageError = () => {
      setImageFailed(true);
    };

    if (!starship) return <p>Loading...</p>;

    const imageUrl = imageFailed ? 'https://starwars-visualguide.com/assets/img/starships/15.jpg' : `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

    return (
      <div>
        <h1>{starship.name}</h1>
        <img src={imageUrl} onError={handleImageError} alt={starship.name} />
        <p><b>Model:</b> {starship.model}</p>
        <p><b>Starship Class:</b> {starship.starship_class}</p>
        <p><b>Manufacturer:</b> {starship.manufacturer}</p>
        <p><b>Cost:</b> {starship.cost_in_credits}</p>
        <p><b>Crew:</b> {starship.crew}</p>
        <p><b>Passenger Capacity:</b> {starship.passengers}</p>
        <p><b>Cargo Capacity:</b> {starship.cargo_capacity}</p>
        <p><b>Consumables:</b> {starship.consumables}</p>
        <p><b>Length:</b> {starship.length}</p>
        <p><b>Maximum Atmosphering Speed:</b> {starship.max_atmosphering_speed}</p>
        <p><b>Hyperdrive Rating:</b> {starship.hyperdrive_rating}</p>
        <p><b>Maximum Speed in Realspace: </b>{starship.MGLT}</p>
      </div>
    );
  };
  
  export default StarshipDetails;
