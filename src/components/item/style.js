import styled from "styled-components";

export const Itemstyle = styled.div`
  width: 29vw;
  border: 1px solid #da112f;
  padding: 0.3vh 0.4vw;
  margin: 10px auto;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  @media (max-width: 767px) {
    color: green;
    width: 48vw;
  }
  @media (max-width: 512px) {
    width: 80vw;
    color: purple;
  }
  .h3 {
    font-size: 2.2vw;
    font-family: Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    @media (max-width: 788px) {
      font-size: 3vw;
    }
    @media (max-width: 512px) {
      font-size: 4vw;
    }
  }
  .h4 {
    font-size: 1.3vw;
    color: #da112f;
    @media (max-width: 788px) {
      font-size: 2.1vw;
    }
    @media (max-width: 512px) {
      font-size: 2.6vw;
    }
  }
  &:hover {
    background-color: #da112f;
    box-shadow: 0 0 5px rgb(235, 56, 42);
    color: white;

    .contact {
      background-color: #da112f;

      a {
        color: white;
      }
      border: 1px solid white;
    }

    .h4 {
      color: #ccc;
    }
  }
  img {
    width: 70%;
    margin: 20px auto 10px auto;
  }
  .contact {
    width: 10vw;
    height: 4.7vh;
    background-color: #fff;
    border: 1px solid #da112f;
    margin: 1.4vh auto;
    font-size: 1.3vw;
    letter-spacing: 1px;
    transition-duration: 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 788px) {
      font-size: 2.3vw;
      width: 17vw;
      height: 4.5vh;
    }
    @media (max-width: 512px) {
      font-size: 3.3vw;
      width: 24vw;
      height: 4.4vh;

    }
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
