import { render, screen } from "@testing-library/react";
import React from "react";
import Products2 from "../page";

// --- Mock Child component ---
jest.mock("../Child", () => ({
  __esModule: true,
  default: () => <div data-testid="child-component">Mocked Child Component</div>,
}));

describe("Products2 Component", () => {
  it("renders the main heading correctly", () => {
    render(<Products2 />);
    const heading = screen.getByRole("heading", { name: /Product List/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "main-heading");
  });

  it("renders the Child component", () => {
    render(<Products2 />);
    expect(screen.getByTestId("child-component")).toBeInTheDocument();
  });

  it("has correct accessibility attributes", () => {
    render(<Products2 />);
    const heading = screen.getByText("Product List");
    expect(heading).toHaveAttribute("tabIndex", "0");
  });
});
