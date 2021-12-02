import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 110vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #f9f9f9;

    margin: 0;
    padding: 0;
`

export const Form = styled.form`
    width: 60%;
    padding: 50px;

    background: #ECECEC;
`

export const InputsContainer = styled.div`
    
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &#textArea {
        justify-content: center;
    }

    &#links {
        flex-direction: column;
        justify-content: center;
    }
`

export const InputLabelContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

    &#textArea-input-and-label {
        width: 90%;
    }

    &#link-input-and-label {
        width: 90%;
        /* margin-bottom: 20px; */
    }
`

export const Input = styled.input`
    width: 100%;
    height: 60px;
    background: #fff;
    padding: 10px;

    border: none;
    border-radius: 5px;

    &.link {
        width: 100%;
        margin-bottom: 20px;
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 200px;

    background: #fff;
    padding: 10px;

    border: none;
    border-radius: 5px;
`

export const Label = styled.label`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #000;
`

export const AlignItemsCenter = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    width: 200px;
    height: 50px;

    border: 2px solid #00a82d;
    border-radius: 20px;

    color: #00a82d;
    background: none;

    font-weight: bold;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background: #00a82d;
        color: #fff;
    }
`


