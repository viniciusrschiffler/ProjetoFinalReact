import React from 'react';
import { useHistory } from 'react-router-dom';

import{
    Container,
    EditInfo
} from './styles.js'

const Edit = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);

    return (
    <Container>
        <EditInfo onClick={() => handleOnClick('/editar')}>
            <h1>Editar</h1>
        </EditInfo>
    </Container>
);
}

export default Edit;