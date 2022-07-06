import styled from "styled-components";
import Aboutimg from "../../assets/images/about-bg.jpg";

export const Aboutstyle = styled.div`
  width: 100vw;
  height: auto;
  padding: 0;

  ul {
    font-size: 2.1vw;
    list-style: none;
    li {
      line-height: 1.7vw;
      font-size: 1.3vw;
      margin: 0.6vh 0;
      img {
        width: 1.3vw;
      }
    }
  }
`;

export const Board = styled.div`
  width: 100vw;
  height: 70vh;
  background-image: url(${Aboutimg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  &:hover {
    .cover {
      margin-top: 0px;
    }
    .h3 {
      left: 60vw;
    }
  }
  .h3 {
    position: absolute;
    font-size: 5.5vw;
    top: 5vw;
    left: 4.3vw;
    transition-duration: 0.5s;
    color: #ddd;
  }
  .cover {
    width: 190vw;
    height: 79vh;
    background-color: rgba(0, 0, 0, 0.6);
    transition-duration: 0.5s;
    margin-top: 148vh;
    display: flex;
    align-items: center;
  }
`;
