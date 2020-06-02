import React from "react";
import styled from "styled-components";

import { AuditType } from "../../../modules/movieInfo";

const AuditsStyle = styled.span``;

interface AuditsProps {
  audits: Array<AuditType>;
}
const Audits: React.SFC<AuditsProps> = ({ audits }) => {
  return (
    <div>
      {audits.map((a, index) => (
        <AuditsStyle key={`${a.auditNo}${index}`}></AuditsStyle>
      ))}
    </div>
  );
};

export default Audits;
