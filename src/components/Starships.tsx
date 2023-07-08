import React, { useEffect, useState, useRef } from "react";
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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(loading);
  loadingRef.current = loading;

  const loadStarships = async (page: number) => {
    setLoading(true);
    const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
    setStarships(prevStarships => {
      const newStarships = response.data.results.filter((newStarship: Starship) =>
        !prevStarships.some((prevStarship: Starship) => prevStarship.url === newStarship.url)
      );
      return [...prevStarships, ...newStarships];
    });
    setLoading(false);
  };

  useEffect(() => {
    if (!loadingRef.current) {
      loadStarships(page);
    }
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (!loadingRef.current) {
          setPage(prevPage => prevPage + 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
