import React from "react";
import styled from "styled-components";

const Section = styled.section`
  font-size: 0.75rem;
`;

interface GenreProps {
  genres: Array<{ genreNm: string }>;
  showTm: string;
  openDt: string;
}
const Genre: React.SFC<GenreProps> = ({ genres, showTm, openDt }) => {
  return (
    <Section>
      <span>
        {genres.map((genre, index) =>
          genres.length - 1 === index /* 장르가 1개 이하라면 */
            ? `${genre.genreNm}`
            : `${genre.genreNm}, `
        )}
        <span> / </span>
        <span>{showTm}분</span>
        <span> / </span>
        <span>
          {openDt
            ? openDt.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3")
            : "정보없음"}{" "}
          개봉
        </span>
      </span>
    </Section>
  );
};

export default Genre;
