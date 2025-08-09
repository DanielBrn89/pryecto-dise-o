import React from 'react';
import Layout from './components/Layout';
import Card from './components/Card';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const cardsData = [
    {
      id: 1,
      title: "Diseño Web Responsivo",
      description: "Creación de sitios web que se adaptan a cualquier dispositivo"
    },
    {
      id: 2,
      title: "Desarrollo React",
      description: "Aplicaciones modernas con React y TypeScript"
    },
    {
      id: 3,
      title: "Optimización SEO",
      description: "Mejora el posicionamiento de tu sitio web"
    }
  ];

  return (
    <Layout>
      <Container className="py-5">
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <h1 className="mb-3">Diseño Responsivo con React</h1>
            <p className="lead">
              Este proyecto demuestra cómo implementar un diseño responsivo usando 
              React, TypeScript y Bootstrap. Explora cómo el diseño se adapta a 
              diferentes dispositivos.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
  {cardsData.map((card) => (
    <Col 
      key={card.id}
      xs={12} 
      className="mb-4"
      md={6}
      lg={4}
    >
      <Card
        title={card.title}
        description={card.description}
      />
    </Col>
  ))}
</Row>
      </Container>
    </Layout>
  );
};

export default App;