import styled from "styled-components";
import backimg from "../../assets/images/fire-bg.jpg";

export const HeaderStyle = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  padding: 30px 100px;
  background-image: url(${backimg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  margin: 0 0 50px 0;
  h1 {
    font-size: 4.8vw;
    color: white;
    span {
      color: #f02b2b;
    }
  }
  mark{
    color: #333;
  }
  
`;
