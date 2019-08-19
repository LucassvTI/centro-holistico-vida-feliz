import styled from 'styled-components';

export const Content = styled.main`
  min-height: calc(100vh - 375px);
  padding-top: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--branco-fundo);
  form{
    display: flex;
    flex-direction: column;
    input{
      width: 80%;
      padding: 5px 10px;
      margin: 0 auto 10px;
      border: 0;
      border-radius: 10px;
    }
    textarea{
      width: 80%;
      min-height: 100px;
      padding: 5px 10px;
      margin: 0 auto 10px;
      border: 0;
      border-radius: 10px;
    }
    button{
      width: 80%;
      padding: 5px;
      margin: 0 auto 10px;
      border: 0;
      border-radius: 10px;
      background-color: var(--verde-escuro);
      color:  var(--branco-fundo);
      outline: none;
      :disabled{
        opacity: 0.6;
      }
    }
    div{
      align-self: center;
      transition: 0.2;
    }
    #message{
      text-align: center;
      color: var(--verde-escuro);
      font-size: 1.2rem;
      transition: 0.2;
    }
  }
`;
