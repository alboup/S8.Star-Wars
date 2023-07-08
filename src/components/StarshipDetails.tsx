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
        <p>Model: {starship.model}</p>
        <p>Starship Class: {starship.starship_class}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Cost: {starship.cost_in_credits}</p>
        <p>Crew: {starship.crew}</p>
        <p>Passenger Capacity: {starship.passengers}</p>
        <p>Cargo Capacity: {starship.cargo_capacity}</p>
        <p>Consumables: {starship.consumables}</p>
        <p>Length: {starship.length}</p>
        <p>Maximum Atmosphering Speed: {starship.max_atmosphering_speed}</p>
        <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
        <p>Maximum Speed in Realspace: {starship.MGLT}</p>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt={starship.name} />
      </div>
    );
  };
  
  export default StarshipDetails;