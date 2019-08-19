import styled from 'styled-components';

export const Content = styled.div`
  height: 63px;
  .navbar{
    background-color: #b1ca84;
    text-align: right;
    box-shadow: 0px 0px 6px;
    padding: 0;
    .navbar-brand{
      padding: 0;
      a{
        font-size: 1.6rem;
        text-decoration:none;
        color: #FFF;
        :hover{
          color: #FFF;
        }
        @media (max-width: 992px){
          font-size: 1.4rem;
        }
      }
    }
    button{
      margin: 0.5rem 1rem;
      background-color: #b1ca84;
      :focus{
        outline: none;
      }
    }
    @media (max-width: 992px){
      .navbar-collapse{
        background-color: rgb(177, 202, 132, 0.8);
      }
    }
  }
  .nav-item{
    a{
      :active,
      :hover{
        color: #FFF !important;
      }
    }
    .nav-link{
      display: block;
      padding: 0.5rem 1rem;
      font-size: 1.3rem;
      
      @media (min-width: 992px){
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
    }
  }
  .navbar-nav{
    @media (min-width: 992px){
      padding: 0.5rem 1rem;
    }
  }
`;