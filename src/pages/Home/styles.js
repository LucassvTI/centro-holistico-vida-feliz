import styled from 'styled-components';

export const Main = styled.div`
  min-height: calc(100vh - 288px);
  padding-top: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--branco-fundo);
  .row{
    div{
      margin: 15px 0;
    }
  }
  .card{
    border: none;
    box-shadow: 0px 5px 10px -5px;
    .card-body{
      flex: 1 1 320px;
      margin: 0;
      padding-top: 0;
      @media (max-width: 767px) {
        flex: 1 1 auto;
      }
    }
  }
  .card-title{
    color: var(--verde-claro);
  }
`;