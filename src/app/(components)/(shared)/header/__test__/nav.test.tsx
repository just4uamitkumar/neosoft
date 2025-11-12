import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "../nav";


describe("Nav Component", () => {
  it("renders all navigation links correctly", () => {
    render(<Nav />);

    // check each link text
    expect(screen.getByText("Products 1")).toBeInTheDocument();
    expect(screen.getByText("Products 2")).toBeInTheDocument();
    expect(screen.getByText("Demo")).toBeInTheDocument();

    // check that correct href attributes are present
    expect(screen.getByText("Products 1").closest("a")).toHaveAttribute(
      "href",
      "/products1"
    );
    expect(screen.getByText("Products 2").closest("a")).toHaveAttribute(
      "href",
      "/products2"
    );
    expect(screen.getByText("Demo").closest("a")).toHaveAttribute(
      "href",
      "/demo"
    );
  });

  it("calls onLinkClick when a link is clicked", () => {
    const handleClick = jest.fn();
    render(<Nav onLinkClick={handleClick} />);

    const firstLink = screen.getByText("Products 1");
    fireEvent.click(firstLink);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("has accessible navigation landmarks", () => {
    render(<Nav />);
    const nav = screen.getByRole("navigation", { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
  });
});
