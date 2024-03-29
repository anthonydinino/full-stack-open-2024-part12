import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("Check if todo shows not done", () => {
  const todo = {
    text: "Test todo",
    done: true,
  };

  render(<Todo todo={todo} />);

  const element = screen.getByText("This todo is not done");
  expect(element).toBeDefined();
});
