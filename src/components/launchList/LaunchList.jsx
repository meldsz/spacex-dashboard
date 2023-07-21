import * as React from "react";
import styled from "@emotion/styled";
import LaunchDetails from "../launchDetails/LaunchDetails";

const LaunchGrid = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1em;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LaunchList = ({ launches = [] }) => {
  return (
    <LaunchGrid data-testid="launchList">
      {launches.map((flight) => (
        <LaunchDetails key={flight.id} flight={flight} />
      ))}
    </LaunchGrid>
  );
};

export default React.memo(LaunchList);
