import styled from 'styled-components';

export const Content = styled.main`
  min-height: calc(100vh - 288px);
  padding-top: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--branco-fundo);
  .accordion{
    margin-bottom: 20px;
    .card-header{
      padding: 0;
      button{
        display: block;
        width: 100%;
        padding: 0.75rem 1.25rem;
        border: none;
        background: transparent;
        outline: none;
      }
    }
    .card-body{
        text-indent: 1rem;
      }
  }
`;
