import React from "react";
import styled from "styled-components";
import { ShowtypeType } from "../../../modules/movieInfo";

const Section = styled.section`
  0.8rem;
  display: flex;
`;

const ShowType = styled.div`
  margin-right: 6px;
  background-color: gray;
  font-size: 0.75rem;
`;

interface ShowTypesProps {
  showTypes: Array<ShowtypeType>;
}
const ShowTypes: React.SFC<ShowTypesProps> = ({ showTypes }) => {
  return (
    <Section>
      {showTypes.map((showType, index) => (
        <ShowType key={index}>{showType.showTypeNm}</ShowType>
      ))}
    </Section>
  );
};

export default ShowTypes;
