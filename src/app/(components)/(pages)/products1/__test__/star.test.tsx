import { render, screen } from "@testing-library/react";
import StarRating from "../star";


describe("StarRating Component", () => {
  it("renders 5 full stars for a perfect rating", () => {
    render(<StarRating rate={5} />);

    const fullStars = screen.getAllByText("★", {
      selector: ".text-yellow-400",
    });
    expect(fullStars).toHaveLength(5);

    const emptyStars = screen.queryAllByText("★", {
      selector: ".text-gray-300",
    });
    expect(emptyStars).toHaveLength(0);

    expect(screen.getByText("(5)")).toBeInTheDocument();
  });

  it("renders correct number of full and empty stars for integer rating", () => {
    render(<StarRating rate={3} />);

    const fullStars = screen.getAllByText("★", {
      selector: ".text-yellow-400",
    });
    const emptyStars = screen.getAllByText("★", { selector: ".text-gray-300" });

    expect(fullStars).toHaveLength(3);
    expect(emptyStars).toHaveLength(2);
    expect(screen.getByText("(3)")).toBeInTheDocument();
  });

  it("renders half star when rating includes .5", () => {
    render(<StarRating rate={3.5} />);

    const yellowStars = screen.getAllByText("★", {
      selector: ".text-yellow-400",
    });
    const grayStars = screen.getAllByText("★", { selector: ".text-gray-300" });

    // 3 full + 1 half = 4 yellow stars total
    expect(yellowStars).toHaveLength(4);
    expect(grayStars).toHaveLength(1);
    expect(screen.getByText("(3.5)")).toBeInTheDocument();
  });

  it("renders no full stars and all empty stars for 0 rating", () => {
    render(<StarRating rate={0} />);

    const yellowStars = screen.queryAllByText("★", {
      selector: ".text-yellow-400",
    });
    const grayStars = screen.getAllByText("★", { selector: ".text-gray-300" });

    expect(yellowStars).toHaveLength(0);
    expect(grayStars).toHaveLength(5);
    expect(screen.getByText("(0)")).toBeInTheDocument();
  });

  it("handles rating less than 1 correctly", () => {
    render(<StarRating rate={0.5} />);

    const yellowStars = screen.getAllByText("★", {
      selector: ".text-yellow-400",
    });
    const grayStars = screen.getAllByText("★", { selector: ".text-gray-300" });

    // 0 full + 1 half = 1 yellow star total
    expect(yellowStars).toHaveLength(1);
    expect(grayStars).toHaveLength(4);
    expect(screen.getByText("(0.5)")).toBeInTheDocument();
  });
});
