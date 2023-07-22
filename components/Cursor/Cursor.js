import styled from "styled-components";
import useMousePosition from "@/hooks/useMousePosition";
import useWindowSize from "@/hooks/useWindowSize";

export const Cursor = ({}) => {
  const { mousePosition } = useMousePosition();

  const { width } = useWindowSize();

  if (width > 800) {
    return (
      <CursorUI style={{ left: mousePosition.x -15 , top: mousePosition.y -15 }}>
        <BlobOne />
        <BlobTwo />
        <BlobThree />
      </CursorUI>
    );
  }
};

const CursorUI = styled.div`
  width: 40px;
  height: 30px;
  border-radius: 20px;
  background: #c6c3ec;
  position: fixed;
  transition: transform 0.1s ease-out;
  animation-name: rotate;
  animation-duration: 5s;
  filter: blur(20px);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 1;
  pointer-events: none;
`;

const BlobOne = styled.div`
  width: 40px;
  height: 30px;
  border-radius: 20px;
  background: #4F619E;
  position: relative;
  left: -5px;
  animation-name: rotate;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const BlobTwo = styled.div`
  width: 30px;
  height: 40px;
  border-radius: 20px;
  background: #0B1D5F;
  position: relative;
  left: 25px;
  top: -25px;
  animation-name: rotate;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const BlobThree = styled.div`
  width: 40px;
  height: 30px;
  border-radius: 20px;
  background: #22367D;
  position: relative;
  left: 5px;
  top: -55px;
  animation-name: rotate;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
