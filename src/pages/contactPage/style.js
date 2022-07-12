import styled from "styled-components";
import BG from "../../assets/images/fire-bg.jpg";

export const Board = styled.div`
  width: 100vw;
  height: 70vh;
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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
    .h3 {
      color: #ddd;
      transform: scale(1.05);
    }
  }

  .cover {
    width: 100vw;
    height: 70vh;
    background-color: rgba(218, 17, 47, 0.6);
    position: relative;
    margin-top: -140vh;
    transition-duration: 0.6s;
  }
  .h3 {
    position: absolute;
    top: auto;
    left: auto;
    transition-duration: 0.4s;
    text-align: center;
    color: #005bb1;
    font-size: 4vw;
    font-weight: 900;
    margin: 3vh auto -9vh auto;
    @media (max-width: 788px) {
      font-size: 6vw;
      margin: 2vh auto -6vh auto;
    }
    @media (max-width: 512px) {
      font-size: 6.5vw;
      margin: 1vh auto -4vh auto;
    }
    .span {
      color: lightgrey;
      font-size: 2vw;
      margin: 0;
      margin-top: -9vh;
      @media (max-width: 788px) {
        font-size: 2.5vw;
        margin-top: -6vh;
      }
      @media (max-width: 512px) {
        font-size: 2.8vw;
        margin-top: -4vh;
      }
    }
  }
`;

export const ContactStyle = styled.div`
  width: 100vw;
  height: auto;
  padding: 0px;
  font-family: "Mukta", sans-serif;

  h3 {
    font-size: 2.4vw;
    font-weight: bold;
    margin-left: 4.4vw;
    @media (max-width: 788px) {
      font-size: 3.8vw;
    }
    @media (max-width: 512px) {
      font-size: 4.2vw;
    }
    mark {
      color: white;
      background-color: #da112f;
    }
  }
  .wrap {
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    padding: 0.5vh 1.3vw;
    @media (max-width: 788px) {
      flex-wrap: wrap;
    }
    @media (max-width: 512px) {
      flex-wrap: wrap;
    }
    section {
      display: flex;
      justify-content: space-between;
    }
    .inputs {
      border: 1px solid #ccc;

      input,
      textarea {
        margin: 0.9vh 0.4vw;
        transition-duration: 0.4s;
        border: none;
        background-color: #f4f5f7;
        text-indent: 0.2vw;
        height: 4.6vh;
        border-radius: 4px;
        &:hover {
          box-shadow: 0 0 5px #ccc;
          border-color: #da112f;
        }
      }
      button {
        width: 30vw;
        height: 6vh;
        font-size: 0.8vw;
        margin: 1vh auto;
        background-color: #da112f;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
        background: rgb(218, 17, 47);
        background: linear-gradient(
          45deg,
          rgba(218, 17, 47, 1) 42%,
          rgba(204, 204, 204, 1) 100%,
          rgba(65, 105, 225, 1) 100%
        );
        transition-duration: 0.4s;
        @media (max-width: 788px) {
          width: 70vw;
          font-size: 1.8vw;
          letter-spacing: 1.8px;
        }
        @media (max-width: 512px) {
          width: 80vw;
          font-size: 2.2vw;
          letter-spacing: 2px;
        }
        &:hover {
          border-radius: 10px;
          box-shadow: 0 0 10px #bbb;
        }
      }
      textarea {
        height: 15vh;
        @media (max-width: 788px) {
          height: 18vh;
        }
        @media (max-width: 512px) {
          height: 20vh;
        }
      }
      label {
        margin-left: 0.4vw;
        color: grey;
      }
      width: 40vw;
      display: flex;
      flex-direction: column;
      @media (max-width: 788px) {
        width: 90vw;
        margin-bottom: 2vh;
      }
      @media (max-width: 512px) {
        margin-bottom: 2.4vh;
      }
      .names {
        display: flex;
        justify-content: space-between;
        input {
          width: 19vw;
          @media (max-width: 788px) {
            width: 44vw;
          }
          @media (max-width: 512px) {
          }
          &:hover {
            box-shadow: 0 0 5px #ccc;
            border-color: #da112f;
          }
        }
        div {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;

export const MapStyle = styled.section`
  width: 48vw;
  border: 1px solid #111;
  padding: 0.3vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 788px) {
    width: 88vw;
    height: auto;
    flex-wrap: wrap;
  }
  @media (max-width: 512px) {
  }
  iframe {
    width: 99%;
    height: 40vh;
    border: none;
    margin: 0 auto;
    @media (max-width: 788px) {
      width: 90vw;
      height: 44vh;
      flex-wrap: wrap;
    }
    @media (max-width: 512px) {
      height: 48vh;
    }
  }
  p {
    text-align: right;
    @media (max-width: 788px) {
      text-align: center;
    }
    @media (max-width: 512px) {
      text-align: center;
    }
    a {
      color: #318ce7;
      margin-left: 31vw;
      @media (max-width: 788px) {
        margin-left: 0vw;
      }
      @media (max-width: 512px) {
        margin-left: 0;
      }
    }
  }
`;
