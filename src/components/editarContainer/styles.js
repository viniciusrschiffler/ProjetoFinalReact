import styled from 'styled-components';

export const Section = styled.section`
    width: 90%;
    padding: 10px;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-bottom: 10px solid #808080;
    margin-top: 15px;

    @media (max-width: 430px) {
        width: 300px;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListFormulario = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
`

export const Form = styled.h2`
    width: 100%
`