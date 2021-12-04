import React from 'react';

import Container from '../../components/container'
import EditarContainer from '../../components/editarContainer'




function Editar(props) {

  localStorage.getItem("nome")
  localStorage.removeItem("nome")
  return (

    <Container>
      <EditarContainer name='abc' editar={[]} />
    </Container>

  );
};

export default Editar;

/*const Editar = props => (
    <h1>Pagina 2</h1>

);

export default Editar;*/

