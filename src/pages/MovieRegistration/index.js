import React from 'react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import {
    Container,
    Form,
    Input,
    TextArea,
    Label,
    InputsContainer,
    InputLabelContainer,
    AlignItemsCenter,
    Button
} from './styles.js';

import Navbar from '../../components/Navbar/index.js';

function MovieRegistration() {
    const MySwal = withReactContent(Swal)

    function handeSubmit(e) {
        e.preventDefault();

        MySwal.fire({
            icon: 'success',
            title: "Filme cadastrado com sucesso!",
            timer: 2000,
          })
    }

    return (
        <>
            <Navbar />
            <Container>
                <Form>

                    <AlignItemsCenter style={{ marginBottom: '50px' }}>
                        <h1 id="title" style={{ color: '#4d4d4d' }} >CADASTRAR FILMES</h1>
                    </AlignItemsCenter>

                    <InputsContainer id="frist-inputs">

                        <InputLabelContainer>
                            <Label>Nome</Label>
                            <Input placeholder="Digite o nome do filme" />
                        </InputLabelContainer>

                        <InputLabelContainer>
                            <Label>Valor de Compra</Label>
                            <Input type="number" placeholder="Digite o valor de compra" />
                        </InputLabelContainer>

                        <InputLabelContainer>
                            <Label>Valor de Alugel</Label>
                            <Input type="number" placeholder="Digite o valor de aluguel" />
                        </InputLabelContainer>

                    </InputsContainer>

                    <InputsContainer id="textArea">

                        <InputLabelContainer id="textArea-input-and-label">
                            <Label>Descrição</Label>
                            <TextArea placeholder="Me conte mais sobre o filme..." />
                        </InputLabelContainer>

                    </InputsContainer>

                    <InputsContainer id="links">

                        <InputLabelContainer id="link-input-and-label">
                            <Label>Poster</Label>
                            <Input className="link" placeholder="Cole o link da imagem do filme" />
                        </InputLabelContainer>

                        <InputLabelContainer id="link-input-and-label">
                            <Label>Background</Label>
                            <Input className="link" placeholder="Cole o link da imagem de fundo do filme" />
                        </InputLabelContainer>

                    </InputsContainer>

                    <AlignItemsCenter>
                        <Button onClick={e => handeSubmit(e)}>CADASTRAR</Button>
                    </AlignItemsCenter>
                </Form>
            </Container>
        </>
    );
}

export default MovieRegistration;