import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";

export const Container = styled.main`
  width: 100%;
  max-width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #1a1a1a;
  overflow: hidden;
  position: relative;
`;

export const Box = styled.div`
  width: 10%;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #2c2c2c;
  color: #454545;
  border: 1px #1a1a1a solid;

  .video {
    width: 100% !important;
    overflow: hidden !important;
    background-color: #ccc;

    video {
      object-fit: cover !important;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%
    ${props =>
      props.url && `background: url(${props.url}) no-repeat center center`};
  background-size: cover;
`;

export const Status = styled.span`
  display: flex;
  padding: 8px;
  color: #fff;
  background-color: #f00;
  ${props => props.online && `background-color: #00C853;`}
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  font-weight: bold;
`;

export const Loading = styled.span`
  display: flex;
  padding: 8px;
  color: #fff;
  background-color: #6a1b9a;
  position: absolute;
  top: 0px;
  left: 16px;
  font-size: 12px;
  font-weight: bold;
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: 200ms ease;
  opacity: 0;
  ${props => props.visible && "opacity: 1;"}

  img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
  }

  div.bg {
    z-index: 98;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
