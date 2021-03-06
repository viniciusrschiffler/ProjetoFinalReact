import styled from "styled-components";

export const Container = styled.div `
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(12, 6, 29);
  background: linear-gradient(135deg, rgba(12, 6, 29, 1) 14%, rgba(35, 8, 113, 1)52%, rgba(68, 7, 83, 1) 100%);
  background-repeat: no-repeat;
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;
  padding: 40px 20px;
  font-size: 16px;
`;

export const Title = styled.div `
  margin-left: 10px;
`;

export const BoxLogin = styled.div `
  background-color: black;
  padding: 30px;
  border-radius: 10px;
`;

export const Divider = styled.div `
  width: 100%;
  height: 1px;
  margin: 2rem 0;
  background-color: #666;
`;