import { render, screen } from "@testing-library/react";
import * as React from "react";

import Search from "./Search";

test("allows you to search launches", () => {
  render(<Search />);
  const SearchButton = screen.getByText(/Search/i);

  expect(SearchButton).toHaveTextContent(`Search`);
});
