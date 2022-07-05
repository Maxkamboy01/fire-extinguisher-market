import styled from "styled-components";
import Aboutimg from "../../assets/images/about-bg.jpg";

export const Aboutstyle = styled.div`
  width: 100vw;
  height: auto;
  padding: 0 90px;

  ul {
    font-size: 30px;
    list-style: none;
    li {
      line-height: 30px;
      font-size: 19px;
      margin: 10px 0;
      img {
        width: 20px;
      }
    }
  }
`;

export const Board = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${Aboutimg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 5em;
  color: white;
`;
