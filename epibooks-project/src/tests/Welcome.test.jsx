import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Tests the initial mounting of the component", () => {
  it("Checks alert heading", () => {
    render(<Welcome />);
    const alertHeading = screen.getByText(/welcome to epibook/i);
    expect(alertHeading).toBeInTheDocument();
  });
});
