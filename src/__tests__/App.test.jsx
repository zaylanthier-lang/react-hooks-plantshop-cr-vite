import './test_suites/AllPlants.test'
import './test_suites/CreatePlant.test'
import './test_suites/InStock.test'
import './test_suites/SearchPlants.test'

import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders Plantsy header", () => {
  render(<App />);
  expect(screen.getByText(/Plantsy/i)).toBeInTheDocument();
});