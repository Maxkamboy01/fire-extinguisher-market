import styled from "styled-components";
import ProductBg from "../../assets/images/extin-bg.jpg";

export const Productsstyle = styled.div`
  width: 100vw;
  height: auto;
  padding: 0px;
  h3 {
    font-size: 2.4vw;
    font-weight: bold;
    margin-left: 230px;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

export const Board = styled.div`
  width: 100%;
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
  &:hover {
    .cover {
      margin-top: 0;
    }
    h3{
      color: #ddd;
      left: -100px;
    }
  }
  .cover {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    margin-top: -138vh;
    transition-duration: 0.4s;
    position: relative;
  }
  h3 {
    position: absolute;
    top: 340px;
    left: 230px;
    font-size: 5.5vw;
    color: #ea1c3a;
    color: #ccc;
    transition-duration: 0.6s;
    transition-delay: 0.3s;
  }
`;
