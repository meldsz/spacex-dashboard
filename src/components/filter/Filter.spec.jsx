import { render, screen } from "@testing-library/react";
import * as React from "react";

import Filter from "./Filter";

test("allows you to filter launches", () => {
  render(<Filter />);
  const FilterButton = screen.getByText(/Filter/i);

  expect(FilterButton).toHaveTextContent(`Filter`);
});
