import React from "react";
import styled from "styled-components";

import { DirectorType } from "../../../modules/movieInfo";

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

const Wrapper = styled.div`
  display: flex;
`;
const Content = styled.dl`
  padding: 0.13rem 0.6rem 0.6rem 0;
  dt {
    font-size: 1.1rem;
    font-weight: bold;
  }
  dd {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.83);
  }
`;

interface DirectorsProps {
  directors: Array<DirectorType>;
}
const Directors: React.SFC<DirectorsProps> = ({ directors }) => {
  return (
    <Section>
      <Title></Title>
      <UnderLine />
      <Wrapper>
        {directors.map((director, index) => (
          <Content key={index}>
            <dt>{director.peopleNm}</dt>
            <dd>{director.peopleNmEn}</dd>
          </Content>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Directors;
