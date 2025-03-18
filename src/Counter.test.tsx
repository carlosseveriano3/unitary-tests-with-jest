import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0)
  });
});