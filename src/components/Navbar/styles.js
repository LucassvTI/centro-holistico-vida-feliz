import styled from 'styled-components';

export const Content = styled.nav`
  .navbar{
    height: 60px;
    background-color: #b1ca84;
    text-align: right;
    box-shadow: 0px 0px 6px;
    padding: 0.5rem 0;
    .navbar-brand{
      a{
        font-size: 1.6rem;
        text-decoration:none;
        color: #FFF;
        :hover{
          color: #FFF;
        }
      }
    }
    button{
      margin-right: 1rem;
      background-color: #b1ca84;
      :focus{
        outline: none;
      }
    }
    > span{
      margin-left: 1rem;
    }
    @media (max-width: 992px){
      .navbar-collapse{
        background-color: rgb(177, 202, 132, 0.8);
      }
    }
  }
  .nav-item{
    a{
      display: block;
      padding: 0.5rem 0rem;
      color: #FFF;
      font-size: 1.3rem;
      z-index: 999;
      @media (min-width: 992px){
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
    }
  }
  .navbar-nav{
    padding: 0.5rem 1rem;
  }
`;