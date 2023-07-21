import {
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Popover,
    Box
  } from "@mui/material";
  import { useFilter } from "../../hooks/useFilter";
  import { usePopover } from "../../hooks/usePopover";
  
  export default function Filter({ updateFilter }) {
    const { anchorEl, openPopoverMenu, closePopoverMenu } = usePopover();
    const { filter, getFilterQuery, filterChange } = useFilter();
  
    const updateFilterData = () => {
      closePopoverMenu();
      const payload = { query: getFilterQuery() };
      updateFilter(payload);
      sessionStorage.setItem("filter", JSON.stringify(payload));
    };
  
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
  
    return (
      <div>
        <Button aria-describedby={id} variant="text" onClick={openPopoverMenu}>
          Filter
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
          <Box sx={{ p: "20px" }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filter.upcoming}
                    onChange={filterChange}
                    name="upcoming"
                  />
                }
                label="Upcoming Launches"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filter.past}
                    onChange={filterChange}
                    name="past"
                  />
                }
                label="Past Launches"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filter.unsuccessful}
                    onChange={filterChange}
                    name="unsuccessful"
                  />
                }
                label="Unsuccessful Launches"
              />
            </FormGroup>
            <Button
              fullWidth
              variant="outlined"
              onClick={updateFilterData}
              sx={{ mr: 2, mt: 2 }}
            >
              Apply
            </Button>
          </Box>
        </Popover>
      </div>
    );
  }
  