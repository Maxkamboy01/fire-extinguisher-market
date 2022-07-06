import styled from "styled-components";

export const NavbarStyle = styled.div`
  height: 9vh;
  background-color: rgba(255, 255, #2b2b32, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  width: 100%;
  padding: 0px 5vw;
  .logo {
    font-size: 2.5vw;
    color: #da112f;
    letter-spacing: 1px;
    font-weight: 900;
  }
  ul {
    display: flex;
    font-size: 1.4vw;
    li {
      margin: auto   17px;
      &:hover {
        a {
          color: #f02b2b;
        }
      }
      a {
        color: #da112f;
        text-transform: capitalize;
        transition-duration: 0.3s;
      }
    }
    button {
      width: 15vw;
      height: 43px;
      border-radius: 22px;
      font-size: 1.2vw;
      font-weight: bold;
      background-color: #da112f;
      text-transform: capitalize;
      transition-duration: 0.3s;
      padding: 6px 15px;
      a {
        color: #ccc;
      }
      &:hover {
        background-color: #f02b2f;
        box-shadow: 0 0 5px rgb(0, 0, 0, 0.2);
        a {
          color: white;
        }
      }
    }
  }
`;
