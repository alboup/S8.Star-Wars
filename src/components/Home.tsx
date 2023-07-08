import React from 'react';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
            <h1>Benvingut a l'explorador de naus d'Star Wars!</h1>
            <h2>Que la força t'acompanyi!</h2>
            <Link to="/starships">
        <button>Accedir!</button>
      </Link>
        </div>
        
    );
}

export default Home;
