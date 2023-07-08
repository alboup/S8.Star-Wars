import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // guarda les dades d'usuari al localStorage
    localStorage.setItem('user', JSON.stringify({ username, password }));
    console.log('Usuari registrat correctament');
  }

  return (
    <div>
      <h1>Registre</h1>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'usuari" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contrasenya" />
      <button onClick={handleSignup}>Registra't</button>
    </div>
  );
}

export default Signup;
