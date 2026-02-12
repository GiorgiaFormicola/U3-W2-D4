import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import scifiBooksList from "../data/scifi.json";
import fantasyBooksList from "../data/fantasy.json";
import historyBooksList from "../data/history.json";
import horrorBooksList from "../data/horror.json";
import romanceBooksList from "../data/romance.json";

// const arrayOfGenres = [fantasyBooksList, historyBooksList, horrorBooksList, romanceBooksList, scifiBooksList];

describe("Tests the initial mounting of the component", () => {
  it("Checks searchbar placeholder", () => {
    render(<BookList />);
    const searchBarPlaceholder = screen.getByPlaceholderText("Search your book here...");
    expect(searchBarPlaceholder).toBeInTheDocument();
  });

  it("Checks the number of book cards to be as the file json used", () => {
    render(<BookList />);
    const allBookCards = screen.getAllByTestId("book-card");
    console.log(allBookCards.length);
    expect(allBookCards).toHaveLength(fantasyBooksList.length);
  });
});
