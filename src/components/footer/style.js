import styled from "styled-components";

export const MainFooterStyle = styled.div`
  width: 100vw;
  height: auto;
  background-color: rgba(218,17,47,0.8);
  background-color: rgb(146, 146, 146);
  padding: 20px 130px 30px 130px;
  display: flex;
  justify-content: space-between;
  margin-top: 3vh;
  @media (max-width: 788px) {
      flex-wrap:wrap;
      padding: 15px 50px 20px 50px;
      
    }
    @media (max-width: 512px) {
      flex-wrap:wrap;
      padding: 15px 50px 20px 50px;
  }
  a{
    color:#ddd;
    transition-duration: 0.3s;
  }
  section {
    width: 26vw;
    margin: 0.5vh 0.5vw;
    mark{
        background-color: #da112f;
        color:white;
        font-size: 1.6vw;
        font-weight:bold;
        padding: 0 0.2vw;
        @media (max-width: 788px){
            font-size: 2.6vw;

        }
        @media (max-width: 512px){
            font-size: 3.5vw;
        }
    }

    @media (max-width: 788px) {
        width: 40vw;
    }
    @media (max-width: 512px) {
        width: 80vw;
    }
    &:nth-child(2){
        li{
            &:hover{
                img{
                    margin-left: 0.1vw;
                }
        a{
            
                color:white;
                margin-left: 0.7vw;
            }
        }
    }

}
    h4{
        font-size: 2.3vw;
        color:#ddd;
        transition-duration: 0.3s;
        @media (max-width: 788px) {
            font-size: 3vw;
          }
          @media (max-width: 512px) {
            font-size: 4vw;
          }
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
        @media (max-width: 788px){
            font-size: 2.2vw;
        }
        @media (max-width: 512px){
            font-size: 3.2vw;
        }
        
        img{
            width: 1.2vw;
            margin: auto 12px auto 0;
            transition-duration: 0.3s;
            @media(max-width: 788px){
                width: 2.4vw;
            }
            @media(max-width: 512px){
                width: 3.2vw;
            }
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
