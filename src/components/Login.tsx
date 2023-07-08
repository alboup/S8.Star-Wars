import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // recupera les dades d'usuari del localStorage
    const user = JSON.parse(localStorage.getItem('user') as string);

    if(user && user.username === username && user.password === password) {
      console.log('Usuari logat correctament');
    } else {
      console.log('Error en el login: Dades incorrectes');
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'usuari" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contrasenya" />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
