import styled from "styled-components";

export const MainFooterStyle = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(218,17,47,0.8);
  background-color: rgb(146, 146, 146);
  padding: 20px 130px 30px 130px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  a{
    color:#ddd;
    transition-duration: 0.3s;
  }
  section {
    width: 32%;
    margin: 0 20px;
    &:nth-child(2){
        li{
            &:hover{
                img{
                    margin-left: 6px;
                }
        a{
            
                color:white;
                margin-left: 6px;
            }
        }
    }

}
    h4{
        font-size: 30px;
        margin: 0;
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
        margin: 17px 0;
        margin-left:0
        font-size: 17px;
        display:flex;
        align-items:center;
        .logofooter{
            color:#444;
            font-size: 20px;
            font-weight: bold;
        }
        img{
            width: 20px;
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
