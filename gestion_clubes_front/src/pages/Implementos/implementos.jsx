import React, { useState, useEffect } from 'react';
import PageContainer from '../../components/container/PageContainer';

function Implementos() {
  const [implementos, setImplementos] = useState([]);

  useEffect(() => {
    fetch('/api/implementos')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setImplementos(data.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const handleEliminarImplemento = (id) => {
    fetch(`/api/implementos/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          setImplementos(implementos.filter(implemento => implemento.id !== id));
        }
      })
      .catch(error => {
        console.error('Error al eliminar el implemento:', error);
      });
  };

  return (
    <PageContainer>
    <div className="card-container">
      {implementos.map((implemento) => (
        <Card key={implemento.id} className='card'>
          <Card.Body>
            <Card.Title>Implemento #{implemento.id}</Card.Title>
            <Card.Text>
              <strong>Fecha de compra:</strong> {implemento.fecha}<br />
              <strong>Tipo:</strong> {implemento.tipo}<br />
              <strong>Estado:</strong> {implemento.estado}<br />
            </Card.Text>
            <Button variant="danger" onClick={() => handleEliminarImplemento(implemento.id)}>
              Eliminar
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </PageContainer>
  );
}

export default Implementos;