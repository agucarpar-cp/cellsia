import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

// Mock de assets
jest.mock("../assets/react.svg", () => "react-logo.svg");
jest.mock("../assets/vite.svg", () => "vite-logo.svg");
jest.mock("../assets/hero.png", () => "hero.png");

describe("App", () => {
  it("renders the heading", () => {
    render(<App />);
    expect(screen.getByText("Get started")).toBeInTheDocument();
  });

  it("increments counter on button click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });

    expect(button).toHaveTextContent("Count is 0");
    fireEvent.click(button);
    expect(button).toHaveTextContent("Count is 1");
  });
});
