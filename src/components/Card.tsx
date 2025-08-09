import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap'; // Agrega Button aquí

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <BootstrapCard className="h-100 shadow-sm">
      <div className="bg-secondary" style={{ height: '150px' }}></div>
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{description}</BootstrapCard.Text>
        <Button variant="primary">Ver más</Button> {/* Ahora está importado */}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;