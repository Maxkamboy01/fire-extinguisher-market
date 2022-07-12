import styled from "styled-components";
import Aboutimg from "../../assets/images/about-bg.jpg";

export const Aboutstyle = styled.div`
  width: 100vw;
  height: auto;

  ul {
    font-size: 2.1vw;
    list-style: none;
    @media (max-width: 788px) {
      font-size: 3.6vw;
    }
    @media (max-width: 512px) {
      font-size: 4.8vw;
    }
    li {
      line-height: 1.7vw;
      font-size: 1.3vw;
      margin: 0.6vh 0;
      @media (max-width: 788px) {
        font-size: 2.7vw;
        line-height: 3.9vh;
      }
      @media (max-width: 512px) {
        font-size: 3.9vw;
        line-height: 4.6vh;

      }
      img {
        width: 1.3vw;
        @media (max-width: 788px) {
          width: 2.2vw;
        }
        @media (max-width: 512px) {
          width: 3.3vw;
        }
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
  @media (max-width: 788px) {
    height: 55vh;
  }
  @media (max-width: 512px) {
    height: 45vh;
  }
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
    @media (max-width: 788px) {
      font-size: 7vw;
    }
    @media (max-width: 512px) {
      font-size: 7.5vw;
    }
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
