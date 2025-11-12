import { render, screen, fireEvent } from "@testing-library/react";
import ProductItem from "../productItem";

// Mock next/image to render a normal <img>
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

// Mock framer-motion to just return children
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

// Mock StarRating
jest.mock("../star", () => ({
  __esModule: true,
  default: ({ rate }: { rate: number }) => <div data-testid="star-rating">Rating: {rate}</div>,
}));

describe("ProductItem Component", () => {
  const mockProduct = {
    image: "/test.jpg",
    title: "Test Product",
    description: "This is a test product description",
    rating: { rate: 4.5, count: 200 },
  };

  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders product title, description, and rating", () => {
    render(<ProductItem {...mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("This is a test product description")).toBeInTheDocument();
    expect(screen.getByTestId("star-rating")).toHaveTextContent("Rating: 4.5");
  });

  it("renders Add to Cart and View More buttons", () => {
    render(<ProductItem {...mockProduct} />);

    expect(screen.getByRole("button", { name: /add test product to cart/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /view more details about test product/i })
    ).toBeInTheDocument();
  });

  it("logs correct message when Add to Cart is clicked", () => {
    render(<ProductItem {...mockProduct} />);

    const addToCartBtn = screen.getByRole("button", { name: /add test product to cart/i });
    fireEvent.click(addToCartBtn);

    expect(console.log).toHaveBeenCalledWith("Add to cart clicked for:", "Test Product");
  });

  it("logs correct message when View More is clicked", () => {
    render(<ProductItem {...mockProduct} />);

    const viewMoreBtn = screen.getByRole("button", {
      name: /view more details about test product/i,
    });
    fireEvent.click(viewMoreBtn);

    expect(console.log).toHaveBeenCalledWith("View more clicked for:", "Test Product");
  });

  it("renders image with correct alt text", () => {
    render(<ProductItem {...mockProduct} />);
    const img = screen.getByAltText("Test Product - Product image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test.jpg");
  });

  it("renders shimmer placeholder before image load", () => {
    render(<ProductItem {...mockProduct} />);
    const shimmer = screen.getByRole("img", { name: /product image for test product/i });
    expect(shimmer).toBeInTheDocument();
  });
});
