import { render, screen } from "@testing-library/react";
import { Home } from "../src/home";

it("should render page correctly", () => {
    render(<Home />);
    const button = screen.getByText('New user');
    expect(button).toBeTruthy();
});
