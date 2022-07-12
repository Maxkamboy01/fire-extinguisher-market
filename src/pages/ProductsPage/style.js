import styled from "styled-components";
import ProductBg from "../../assets/images/extin-bg.jpg";

export const Productsstyle = styled.div`
  width: 100vw;
  height: auto;
  padding: 0px;
  h3 {
    font-size: 2.4vw;
    font-weight: bold;
    margin-left: 4.4vw;
    margin-bottom: 0vh;
    @media (max-width: 788px) {
      font-size: 3.3vw;
    }
    @media (max-width: 512px) {
      font-size: 4.2vw;
    }
  }
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

export const Board = styled.div`
  width: 100vw;
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${ProductBg});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 788px) {
    height: 55vh;
  }
  @media (max-width: 512px) {
    height: 45vh;
  }
  &:hover {
    .cover {
      margin-top: 0;
    }
    h3 {
      color: #ddd;
      left: 2.2vw;
    }
  }
  .cover {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
    margin-top: -138vh;
    transition-duration: 0.4s;
    position: relative;
  }
  h3 {
    position: absolute;
    top: 33vh;
    left: 52vw;
    font-size: 5.5vw;
    color: #ea1c3a;
    color: #ccc;
    transition-duration: 0.6s;
    @media (max-width: 788px) {
      font-size: 6.5vw;
    }
    @media (max-width: 512px) {
      font-size: 7vw;
    }
  }
`;
