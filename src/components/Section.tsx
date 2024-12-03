import styled from "styled-components";
import { useContext } from "react";
import { LevelContext } from "../contexts/LevelContext.js";

interface SectionProps {
  children: React.ReactNode | undefined;
}

const StyledSection = styled.section`
  border: solid black 1px;
  border-radius: 8px;
  padding: 20px;
  width: 50vw;
  overflow: hidden;
  background-color: ${({ color }) =>
    (color === "1" && "#ff00be") ||
    (color === "2" && "#f29fdd") ||
    (color === "3" && "#f1c7e6") ||
    "white"};
`;

const Section = ({ children }: SectionProps) => {
  const level = useContext(LevelContext);

  return (
    <StyledSection color={String(level)}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </StyledSection>
  );
};

export default Section;
