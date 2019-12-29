import styled from 'styled-components';

export const Content = styled.footer`
  min-height: 288px;
  background-color: #b1ca84;
  box-shadow: 0px -5px 10px -5px;
  .row{
    padding: 20px 0;
    text-align: left;
    color: var(--dark-green);
    > div:first-child{
      display:flex;
      justify-content: left;
      border-right: 2px solid black;
      img{
        max-width: 200px;
        max-height: 200px;
      }
      @media (max-width: 767px) {
        justify-content: center;
      }
    }
    > div:last-child{
      border-left: 2px solid black;
    }
    div{
      strong{
        font-size: 1.2rem;
      }
      div{
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
          flex-direction: row;
          justify-content: space-evenly;
          padding: 10px;
        }
        a{
          text-decoration: none;
          font-size: 2rem;
          color: var(--dark-green);
          :hover{
            color: var(--dark-olive);
          }
        }
      }
      address{
        margin: 1rem 0;
      }
      @media (max-width: 767px) {
        p{
          text-align: center;
        }
      }
    }
    @media (max-width: 767px) {
      text-align: center;
      padding-bottom: 0;
      div{
        margin: 5px 0;
      }
    }
  }
  > div:last-child{
    background-color: var(--dark-olive);
    > p{
      margin: 0;
      padding: 10px 0;
      color: var(--branco-fundo);
      text-align: center;
    }
  }
`;
