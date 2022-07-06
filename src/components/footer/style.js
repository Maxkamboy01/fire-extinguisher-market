import styled from "styled-components";

export const MainFooterStyle = styled.div`
  width: 100vw;
  height: auto;
  background-color: rgba(218,17,47,0.8);
  background-color: rgb(146, 146, 146);
  padding: 20px 130px 30px 130px;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  margin-top: 3vh;
  a{
    color:#ddd;
    transition-duration: 0.3s;
  }
  section {
    width: 26vw;
    margin: 0.5vh 0.5vw;
    &:nth-child(2){
        li{
            &:hover{
                img{
                    margin-left: 0.3vw;
                }
        a{
            
                color:white;
                margin-left: 3.3vw;
            }
        }
    }

}
    h4{
        font-size: 2.3vw;
        color:#ddd;
        transition-duration: 0.3s;
        &:hover{
            color: #EA1C3A;
            a{
                color: #EA1C3A;
                
            }
        }
    }
    ul {
        list-style:none;
        padding: 0;
      li {
        margin: 1.3vh 0;
        margin-left:0
        font-size: 1.4vw;
        display:flex;
        align-items:center;
        .logofooter{
            color:#444;
            font-size: 20px;
            font-weight: bold;
        }
        img{
            width: 1.2vw;
            margin: auto 12px auto 0;
            transition-duration: 0.3s;
        }
        a {
            color: black;
            transition-duration: 0.3s;
            &:hover{
                color: white;
            }
        }

      }
    }
  }
`;
