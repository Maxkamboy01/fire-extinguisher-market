import styled from "styled-components";

export const Homepagestyle = styled.div`
  background-color: white;
  color: #111;
`;

export const Itemswrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 130px;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .moreproducts {
    width: auto;
    padding: 10px 58px;
    border-radius: 3px;
    text-align: center;
    border: 1px solid white;
    background-color: #da112f;
    font-size: 18px;
    margin: 40px auto 110px auto;
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
padding: 10px 100px;
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
