import styled from 'styled-components';

export const Section = styled.section`
    width: 90%;
    
    padding: 10px;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-bottom: 10px solid #808080;
    margin-top: 15px;
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

export const ListFormulario = styled.p`
    width: 100%;
    padding: 10px;
`

export const Form = styled.p`
    color: black;
`

export const Row = styled.p`
    width: 100%;
`
export const Col = styled.p`
    width: 100%;
`
export const FormGroup = styled.p`
    width: 100%;
`
export const Label = styled.p`
    width: 100%;
`
export const Input = styled.input`
    width: 100%;
`
export const Button = styled.button`
    width: 80px;
    height: 40px;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 20px;
        width: 80px;
        height: 40px;
        text-align: center;
        color: #fff;
        background: rgb(68, 7, 83,.70);
        border-radius: 5px;
        padding-top: 6.5px;
    }

    &:hover {
        width: 80px;
        height: 40px;
        text-align: center;
        background: rgb(68, 7, 83);
        border-radius: 5px;
    }
`