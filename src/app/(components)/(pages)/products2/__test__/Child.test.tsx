import { render, screen, waitFor } from "@testing-library/react";
import Child from "../Child";

// --- Mock ProductItem ---
jest.mock("../../products1/productItem", () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => (
    <div data-testid="product-item">{title}</div>
  ),
}));

// --- Mock Loading ---
jest.mock("../../products1/loading", () => ({
  __esModule: true,
  default: () => <div data-testid="loading">Loading...</div>,
}));

// --- Mock global fetch ---
global.fetch = jest.fn();

describe("Child Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Loading component while fetching", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise(() => {}) // never resolves
    );

    render(<Child />);

    // Immediately should show the loading state
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders product list after successful fetch", async () => {
    const mockProducts = [
      {
        id: 1,
        title: "Product A",
        description: "Description A",
        image: "/a.jpg",
        rating: { rate: 4.5, count: 10 },
      },
      {
        id: 2,
        title: "Product B",
        description: "Description B",
        image: "/b.jpg",
        rating: { rate: 3.5, count: 8 },
      },
    ];

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    render(<Child />);

    // Should first show loading
    expect(screen.getByTestId("loading")).toBeInTheDocument();

    // Wait for data to render
    await waitFor(() => {
      expect(screen.getAllByTestId("product-item")).toHaveLength(2);
    });

    expect(screen.getByText("Product A")).toBeInTheDocument();
    expect(screen.getByText("Product B")).toBeInTheDocument();
  });

  it("renders 'Products are not available' if API returns empty list", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<Child />);

    await waitFor(() => {
      expect(
        screen.getByText("Products are not available")
      ).toBeInTheDocument();
    });
  });

  it("handles fetch error gracefully", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Network error")
    );

    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(<Child />);

    // Wait for fallback UI
    await waitFor(() => {
      expect(
        screen.getByText("Products are not available")
      ).toBeInTheDocument();
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      "Error fetching products:",
      expect.any(Error)
    );

    consoleSpy.mockRestore();
  });
});
