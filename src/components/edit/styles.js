import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 16 px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    bottom: 25%;
`

export const EditInfo = styled.div`
    width: 80px;
    height: 40px;
    display: flex;
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
        padding: 5px;
    }

    &:hover {
        width: 80px;
        height: 34px;
        text-align: center;
        cursor: pointer;
        background: rgb(68, 7, 83);
        border-radius: 5px;
    }
`