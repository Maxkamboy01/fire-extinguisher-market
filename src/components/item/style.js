import styled from "styled-components";

export const Itemstyle = styled.div`
  width: 29%;
  border: 1px solid #da112f;
  padding: 8px 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition-duration: 0.4s;
  &:hover {
    background-color: #da112f;
    box-shadow: 0 0 5px rgb(235,56,42);
    color: white;
    .contact{
        background-color: #da112f;
      a {
        color: white;
      }
      border: 1px solid white;
    }
    }
  }
  img{
    width: 70%;
    margin: 20px auto 10px auto;
  }
  .contact {
    width: 180px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #da112f;
    margin: 10px auto;
    font-size: 16px;
    letter-spacing: 1px;
    transition-duration: 0.4s;
    a {
      color: #da112f;
    }
    &:hover {
      background-color: #fff;
      a {
        color: #da112f;
      }
      border: 1px solid white;
    }
  }
`;
