import React from 'react';
import { useNavigate } from 'react-router-dom';

import{
    Container,
    EditInfo
} from './styles.js'

const Edit = props => {
    const navigation=useNavigate()
    const handleOnClick = route => navigation(route);

    return (
    <Container>
        <EditInfo onClick={() => handleOnClick('/editar')}>
            <h1>Editar</h1>
        </EditInfo>
    </Container>
);
}

export default Edit;