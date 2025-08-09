import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap'; // Agrega Container aquí

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 py-4">
        <Container> {/* Ahora está importado */}
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;