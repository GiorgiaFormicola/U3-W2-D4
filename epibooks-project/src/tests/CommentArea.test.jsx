import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("Tests the initial mounting of the component", () => {
  it("Checks the alert presence", () => {
    render(<CommentArea />);
    const alert = screen.getByText("Select a book to leave a comment or read its reviews!");
    expect(alert).toBeInTheDocument();
  });

  it("Checks the absence of a selected book title initially", () => {
    render(<CommentArea />);
    const bookTitle = screen.queryByTestId("selected-book-title");
    expect(bookTitle).not.toBeInTheDocument();
  });
});
