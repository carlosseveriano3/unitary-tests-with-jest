import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count should increment by 1 when the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBttn = getByRole("button", { name: "Increment" });
    const countValue1 = getByTestId("count").textContent;
    expect(countValue1).toEqual("0");
    fireEvent.click(incrementBttn);
    const countValue2 = getByTestId("count").textContent;
    expect(countValue2).toEqual("1");
  });

  it("count should decrement by 1 if the decrement button is called", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0}/>);
    const decrementBttn = getByRole("button", { name: "Decrement" });
    expect(getByTestId("count").textContent).toEqual("0");
    fireEvent.click(decrementBttn);
    expect(getByTestId("count").textContent).toEqual("-1");
  });

  it("count should be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const restartBttn = getByRole("button", { name: "Restart" });
    expect(getByTestId("count").textContent).toEqual("50");
    fireEvent.click(restartBttn);
    expect(getByTestId("count").textContent).toEqual("0");
  });

  it("count should invert signs if the switch signs button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const switchBttn = getByRole("button", { name: "Switch Signs" });
    expect(getByTestId("count").textContent).toEqual("50");
    fireEvent.click(switchBttn);
    expect(getByTestId("count").textContent).toEqual("-50");
  });
});