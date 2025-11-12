import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "..";


describe("Footer Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders footer element with correct role", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("displays correct copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/NeoSOFT Pvt\. Ltd\. All rights reserved\./i)
    ).toBeInTheDocument();
  });

  it("includes valid time elements with correct years", () => {
    render(<Footer />);
    const timeElements = screen.getAllByText(/202\d/);
    expect(timeElements).toHaveLength(2);
    expect(timeElements[0]).toHaveAttribute("dateTime", "2022");
    expect(timeElements[1]).toHaveAttribute("dateTime", "2025");
  });
});
