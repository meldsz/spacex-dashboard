import { useState } from "react";

export const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const openPopoverMenu = (event = {}) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopoverMenu = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    openPopoverMenu,
    closePopoverMenu
  };
};