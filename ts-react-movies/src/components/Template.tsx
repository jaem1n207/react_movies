import * as React from "react";
import styled from "styled-components";

const Main = styled.div`
  height: 100vh;
`;

interface TemplateProps {}
const Template: React.SFC<TemplateProps> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Template;
