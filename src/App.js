import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaRecetas from './components/ListaRecetas';
import CategoriasPrivider from './context/CategoriaContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider, { ModalContext } from './context/ModalContext';

function App() {
  return (
    <CategoriasPrivider>
      <RecetasProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Formulario/>
            </div>
            <ListaRecetas/>
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasPrivider>
  );
}

export default App;
