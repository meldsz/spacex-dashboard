import { memo } from "react";
import Filter from "../filter/Filter";
import Search from "../search/Search";
import styled from "@emotion/styled";
import { usePostLaunches } from "../../hooks/usePostLaunches";

const HeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 100px 100px;
  padding: 10px 40px 10px 20px;

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
      <h2>SpaceX Launch Dashboard</h2>
      <div></div>
      <Filter updateFilter={filterLaunches} />
      <Search updateSearch={filterLaunches} />
    </HeaderStyled>
  );
};

export default memo(Header);
