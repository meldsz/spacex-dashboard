import { memo } from "react";
import Filter from "../filter/Filter";
import Search from "../search/Search";
import styled from "@emotion/styled";
import { usePostLaunches } from "../../hooks/usePostLaunches";
import { Typography, Box } from '@mui/material'

const HeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 100px 100px;
  padding: 10px 5px 10px 5px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr 80px 80px;
  }
`;
const Header = () => {
  const { mutate } = usePostLaunches();

  const filterLaunches = (payload) => {
    mutate(payload);
  };

  return (
    <HeaderStyled>
      <Box 
        sx={{
              fontSize: 24,
              fontWeight: "bold"
            }}
      >SpaceX Launch Dashboard</Box>
      <Box></Box>
      <Filter updateFilter={filterLaunches} sx={{mt:4}}/>
      <Search updateSearch={filterLaunches} />
    </HeaderStyled>
  );
};

export default memo(Header);
