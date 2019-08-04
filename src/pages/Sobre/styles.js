import styled from 'styled-components';

export const Content = styled.main`
  min-height: calc(100vh - 288px);
  padding-top: 60px;
  background-color: #f5f5f5;
  .accordion{
    margin-bottom: 20px;
    .card-header{
      button{
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
