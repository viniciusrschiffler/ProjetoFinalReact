import React, { useContext } from 'react';

import Container from '../components/container'
import EditarContainer from '../components/editarContainer'

import { context } from '../context'


const Editar = props => {
    const ctx = useContext(context);

    return(
        <Container>
            <EditarContainer name='abc' editar={[]} />
        </Container>
    )
}

export default Editar;

