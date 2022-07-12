import styled from "styled-components";

export const Homepagestyle = styled.div`
  background-color: white;
  color: #111;
`;

export const Itemswrapper = styled.div`
  width: 100vw;
  height: auto;
  padding: 0px 1vw;

  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .moreproducts {
    width: auto;
    padding: 0.8vh 2.1vw;
    border-radius: 3px;
    text-align: center;
    border: 1px solid white;
    background-color: #da112f;
    font-size: 1.3vw;
    margin: 1.7vh auto 5vh auto;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    transition-duration: 0.4s;
    a {
      color: white;
    }
    &:hover {
      background-color: white;
      border-color: #da112f;
      a {
        color: #da112f;
      }
    }
  }
`;

export const Aboutlist = styled.div`
  padding: 0.7vh 2.1vw;
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
