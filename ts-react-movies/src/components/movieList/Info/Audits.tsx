import React from "react";
import styled from "styled-components";

import { AuditType } from "../../../modules/movieInfo";

const AuditsWrap = styled.span``;

const AuditsStyle = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
`;

interface AuditsProps {
  audits: Array<AuditType>;
}
const Audits: React.SFC<AuditsProps> = ({ audits }) => {
  return (
    <div>
      {audits.map((a, index) => (
        <AuditsWrap key={`${a.auditNo}${index}`}>
          <AuditsStyle>{a.watchGradeNm}</AuditsStyle>
        </AuditsWrap>
      ))}
    </div>
  );
};

export default Audits;
