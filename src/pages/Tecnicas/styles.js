import styled from 'styled-components';

export const Content = styled.main`
  min-height: calc(100vh - 288px);
  padding-top: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--branco-fundo);
  .container{
    p{
      text-indent: 1rem;
    }
    ul{
      padding: 5px 20px;
      list-style: circle;
      li{
        font-family: 'Open Sans',serif;
      }
    }
  }
`;
