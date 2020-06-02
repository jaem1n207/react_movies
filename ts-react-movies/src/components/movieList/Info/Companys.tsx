import React from "react";
import styled from "styled-components";

import { CompanyType } from "../../../modules/movieInfo";

const Section = styled.section`
  margin-top: 1.8rem !important;
`;
const Title = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: #282828;
`;
const UnderLine = styled.hr`
  border-top: "2px solid #282828";
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CompanyCard = styled.dl`
  padding: 0.3rem 0.6rem;
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  border: 0.8rem solid #282828;
  border-radius: 0.3rem;
  box-shadow: 0.8rem 0.8rem #282828;
  font-size: 0.875rem;
  width: 14rem;
`;
const PartNm = styled.dt`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.83);
`;
const NmKr = styled.dd`
  font-weight: bold;
  color: rgba(255, 255, 255, 0.83);
  padding-top: 0.2rem;
`;
const NmEn = styled.dd`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.83);
`;

interface CompanysProps {
  companys: Array<CompanyType>;
}
const Companys: React.SFC<CompanysProps> = ({ companys }) => {
  return (
    <Section>
      <Title>Company</Title>
      <UnderLine />
      <Content>
        {companys.map((company, index) => (
          <CompanyCard key={`${company.companyCd}${index}`}>
            <PartNm>{company.companyPartNm}</PartNm>
            <NmKr>{company.companyNm}</NmKr>
            <NmEn>{company.companyNmEn}</NmEn>
          </CompanyCard>
        ))}
      </Content>
    </Section>
  );
};

export default Companys;
