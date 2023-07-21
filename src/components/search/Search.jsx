import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Popover,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box
} from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styled from "@emotion/styled";
import { usePopover } from "../../hooks/usePopover";
import { useSearch } from "../../hooks/useSearch";

const SearchStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat;
  padding: 20px;

  @media (min-width: 992px) {
    display: flex;
    padding: 10px;
  }
`;

const Search = ({ updateSearch }) => {
  const { anchorEl, openPopoverMenu, closePopoverMenu } = usePopover();
  const {
    sortBy,
    date,
    updateFromDate,
    updateToDate,
    updateSortBy,
    getLaunchQuery
  } = useSearch();

  const updateSearchData = () => {
    closePopoverMenu();
    updateSearch(getLaunchQuery());
    sessionStorage.setItem("search", JSON.stringify(getLaunchQuery()));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button variant="text" onClick={openPopoverMenu} endIcon={<SearchIcon />}>
        Search
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closePopoverMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <SearchStyled>
          <Box sx={{ py: 2, pr: 2 }}>SEARCH</Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Date"
              value={date.from}
              onChange={updateFromDate}
            />
            <Box sx={{ p: 2 }}>to</Box>

            <DateTimePicker
              label="Date"
              value={date.to}
              onChange={updateToDate}
            />
          </LocalizationProvider>
          <Box sx={{ p: 2 }}>ORDER</Box>
          <FormControl sx={{ pt: "5px" }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={sortBy}
              onChange={updateSortBy}
            >
              <FormControlLabel
                value="asc"
                control={<Radio />}
                label="Ascending"
              />
              <FormControlLabel
                value="desc"
                control={<Radio />}
                label="Descending"
              />
            </RadioGroup>
          </FormControl>
          <Button
            variant="outlined"
            onClick={updateSearchData}
            sx={{ my: "5px" }}
          >
            Go!
          </Button>
        </SearchStyled>
      </Popover>
    </div>
  );
};

export default Search;
