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
    .span {
      color: lightgrey;
      font-size: 2vw;
      margin: 0;
      margin-top: -9vh;
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
    mark {
      color: white;
      background-color: #da112f;
    }
  }
  .wrap {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100vw;
    padding: 0.5vh 1.3vw;
    section {
      width: 48vw;
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
        &:hover {
          border-radius: 10px;
          box-shadow: 0 0 10px #bbb;
        }
      }
      textarea {
        height: 15vh;
      }
      label {
        margin-left: 0.4vw;
        color: grey;
      }
      width: 40vw;
      display: flex;
      flex-direction: column;
      .names {
        display: flex;
        justify-content: space-between;
        input {
          width: 19vw;
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
  border: 1px solid #111;
  padding: 0.3vw;
  iframe {
    width: 48vw;
    height: 40vh;
    border: none;
  }
  p {
    text-align: right;
    a {
      color: #318ce7;
      margin-left: 31vw;
    }
  }
`;
