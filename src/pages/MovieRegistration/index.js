import React from 'react';

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


    return (
        <>
            <Navbar />
            <Container>
                <Form>

                    <AlignItemsCenter style={{ marginBottom: '50px' }}>
                        <h1 style={{ color: '#4d4d4d' }} >CADASTRAR FILMES</h1>
                    </AlignItemsCenter>

                    <InputsContainer>
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
                            <Input type="number" placeholder="Digite o valor de alugue" />
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
                        <Button>CADASTRAR</Button>
                    </AlignItemsCenter>
                </Form>
            </Container>
        </>

    );
}

export default MovieRegistration;