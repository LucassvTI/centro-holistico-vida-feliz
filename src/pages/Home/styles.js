import styled from 'styled-components';

export const Main = styled.div`
  min-height: calc(100vh - 288px);
  padding-top: 60px;
  background-color: var(--branco-fundo);
  header{
    padding: 20px 0;
    text-align: center;
    
  }
  .row{
    div{
      margin: 15px 0;
    }
  }
  .card{
    border: none;
    box-shadow: 0px 5px 10px -5px;
  }
  .card-title{
    color: var(--verde-claro);
  }
`;