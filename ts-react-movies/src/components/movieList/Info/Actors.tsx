import React from "react";
import styled from "styled-components";
import { ActorType } from "../../../modules/movieInfo";

const Section = styled.section`
  margin-top: 1.6rem;
`;

const Title = styled.span`
  font-size: 2.35rem;
  font-weight: bold;
  margin-bottom: 2px solid red;
`;

const ActorsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ActorsCard = styled.dl`
  width: 7rem;
  height: 4rem;
  margin-bottom: 0.3rem;
  margin-right: 0.5rem;
`;

const ActorKrNm = styled.dt`
  font-size: 1.95rem;
  font-weight: bold;
`;
const ActorEnNm = styled.dd`
  font-size: 1.6rem; // 12px
`;
const Cast = styled.dd`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 0.3rem;
`;

interface ActorsProps {
  actors: Array<ActorType>;
}
const Actors: React.SFC<ActorsProps> = ({ actors }) => {
  return (
    <Section>
      <Title>Actors</Title>
      <ActorsContent>
        {actors.map((actor, index) => (
          <ActorsCard key={index}>
            <ActorKrNm>{actor.peopleNm}</ActorKrNm>
            <ActorEnNm>{actor.peopleNmEn}</ActorEnNm>
            <Cast>{actor.cast}</Cast>
          </ActorsCard>
        ))}
      </ActorsContent>
    </Section>
  );
};

export default Actors;
