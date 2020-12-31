import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
    @media (min-width: 992px) {
    margin-top: 10rem;
  }
  h1{
      font-family:Arial, Helvetica, sans-serif;
      text-align:center;
      position:relative;
      padding-left:4rem;
      &::before{
          content:open-quote;
          font-size:10rem;
          color:black;
          position:absolute;
          left:-1rem;
          right:--2rem;
      }
  }
  p{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size:1.4rem;
    font-weight:bold;
    text-align:right;
    color:green;
    margin-top:2rem;

  }
`;

const Frase = ({ frase }) => {
    /* if(Object.keys(frase).length ===0)return null *///para que no aparezca el componente frase vacio si no hay frase(como en el inicio)
  return (
    <ContenedorFrase>
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </ContenedorFrase>
  );
};

export default Frase;
