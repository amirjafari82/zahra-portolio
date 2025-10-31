import React from "react";
import styled from "styled-components";

const StyledLastProject = styled.div`
  margin-top: 64px;
`;

const LastHeader = styled.h3``;

const LastHeaderBold = styled.span``;

const LastProjects = () => {
  return (
    <StyledLastProject>
      <LastHeader>
        Last <LastHeaderBold>Projects</LastHeaderBold>
      </LastHeader>
    </StyledLastProject>
  );
};

export default LastProjects;
