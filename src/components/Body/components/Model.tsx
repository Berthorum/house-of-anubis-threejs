import { useEffect } from "react";
import styled from "styled-components";
import main from "../../../threejs/scene";


export default function model() {
  const Canvas = styled.canvas`
    width: 100%;
  `;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
   main();
  }, [])
  return <Canvas id="canvas" />;
}

