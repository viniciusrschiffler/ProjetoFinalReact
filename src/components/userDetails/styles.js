import styled from 'styled-components';

export const Container = styled.div`
        width: 100%
        height: 100px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px;
    `

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #444;
`

export const Username = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    color: #777;
    padding: 5px;
`

export const Description = styled.p`
    width:100%;
    height: 30px;
    margin: 10px 0;
    text-align: center; //vai ocupar os 300 px
    font-size: 12px;
    color: #777;
    line-height: 1.3;
    overflow: hidden;
    flex-direction: column;


    @media (max-width: 430px) {
        width: 250px;
    } //para nao quebrar no mobile
`
