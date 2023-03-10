import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export default function PaginaIndex() {
  const history = useHistory();

  // Função executada quando página carrega
  useEffect(() => {
    history.push('/login');
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="text-center">
        <div className="spinner-border" role="status"></div>
        <h1>Carregando...</h1>
        <p>Aguarde enquanto carregamos sua página.</p>
      </div>
    </div>
  );
}
