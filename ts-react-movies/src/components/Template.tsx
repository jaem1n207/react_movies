import * as React from "react";

interface TemplateProps {}
const Template: React.SFC<TemplateProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Template;
