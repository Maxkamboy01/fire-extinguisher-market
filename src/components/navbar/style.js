import styled from "styled-components";

export const openMenu = styled.div`
  left: 60vw;
`;

export const NavbarStyle = styled.div`
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  width: 100%;
  padding: 0px 5vw;
  position: relative;
  position:fixed;
  top:o;
  z-index:111;
  background-color: rgba(255,255,255,0.5);
  background-color:rgba(0,0,0,0.2);
  backdrop-filter:blur(6px);
  
  @media (max-width: 788px){
    height 7.5vh;
    padding: 0 3.5vw;
  }
  @media (max-width: 512){
    height 6vh;
    padding: 0 2.4vw;
  }
  
  .logo {
    font-size: 2.5vw;
    color:#eee;
    letter-spacing: 1px;
    font-weight: 900;
    @media (max-width: 788px){
      font-size: 3.3vw;
    }
    @media (max-width: 512px){
      font-size: 4.2vw;
    }
  }
  .ul {
    display: flex;
    font-size: 1.4vw;
    @media (max-width: 788px){
      display:none;
    }
    
    li {
      margin: auto  11px;
      &:hover {
        a {
          color: #f02b2b;
        }
      }
      a {
        color: #da112f;
        color:#eee;
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

export const BurgerMenu = styled.div`
  font-family: "Comfortaa", cursive;
  width: 35vw;
  height: 100vh;
  background-color: rgba(218, 17, 47, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  position: absolute;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-35vw")};
  transition-duration: 0.4s;
  display: none;
  @media (max-width: 788px) {
    display: flex;
  }
  @media (max-width: 512px) {
    width: 40vw;
  }

  .burgermenu-icon {
    width: 35px;
    height: 45px;
    margin-left: -60px;
    margin: 1vh auto 1vh -60px;
    cursor: pointer;

    img {
      width: 35px;
      border-radius: 3px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    border: 1px solid white;
    border: none;
    margin-right: auto;
    font-size: 3.3vw;
    color: white;
    @media (max-width: 512px) {
      font-size: 3.8vw;
    }
    li {
      margin: 15px 0;
      padding: 20px 10px;
      font-size: 2.2vw;
      border-radius: 4px;
      transition-duration: 0.4s;
      @media (max-width: 512px) {
        font-size: 3vw;
      }
      &:hover {
        background-color: rgba(218, 17, 47, 1);
        background-color: #fff;
        transform: scale(1.05);
        a {
          color: #da112f;
        }
      }
      a {
        color: white;
      }
    }
  }
`;
