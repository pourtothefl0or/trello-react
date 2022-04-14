import styled from "styled-components";
import { PRIMARY } from "../../../constants";
import { Container } from "../../../components";

export const StyledBoard = styled.section`
  overflow-x: auto;
  width: 100%;
  height: 100vh;
`;

export const BoardContainer = styled(Container)`
  display: flex;
  column-gap: 20px;
  padding-top: ${PRIMARY.containerIndent};
  padding-bottom: ${PRIMARY.containerIndent};
  height: 100%;
`;
