import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Starships.css";

type Starship = {
  url: string;
  name: string;
  model: string;
}

const Starships: React.FC = () => {
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(response => {
        setStarships(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {starships.map(starship => (
        <Link key={starship.url} to={`/starships/${starship.url.split('/')[5]}`}>
          <div className="naus">
          <h2>{starship.name}</h2>
          <p>{starship.model}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Starships;
