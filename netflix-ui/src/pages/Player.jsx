import styled from "styled-components"
import {BsArrowLeft} from "react-icons/bs"
import video from "../assets/video.mp4"
import { useNavigate } from "react-router-dom"

//09447229e5df26e0b378a3dfe0aa4812

export default function Player(){
  const navigate = useNavigate()
  return(
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)}/>
        </div>
        <video src={video} autoPlay controls loop muted></video>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .player {
    height: 100vh;
    width: 100vw;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg{
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;