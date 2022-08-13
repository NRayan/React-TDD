import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from "../src/home";

describe("Home Page", () => {

    it("should render page correctly", () => {
        const { getByText } = render(<Home />);
        const button = getByText('New user');
        expect(button).toBeTruthy();
    });

    it("should add new user", () => {
        const name = "lorem ipsum";
        const { container } = render(<Home />);
        const button = screen.getByText('New user');
        const input = container.querySelector("input");
        expect(input).toBeTruthy();
        if (!input) return;
        fireEvent.change(input, { target: { value: name } });
        fireEvent.click(button);
        const tableRow = screen.getByText(name);
        expect(tableRow).toBeTruthy();
    })

    it("should remove new user", () => {
        const name = "lorem ipsum";
        const { container } = render(<Home />);
        const button = screen.getByText('New user');
        const input = container.querySelector("input");
        expect(input).toBeTruthy();
        if (!input) return;
        fireEvent.change(input, { target: { value: name } });
        fireEvent.click(button);

        const deleteButton = screen.getByText("remove");
        expect(deleteButton).toBeTruthy();
        if (!deleteButton) return;
        fireEvent.click(deleteButton);
        const tableRow = screen.queryByText("1");
        expect(tableRow).toBeFalsy();
    })

});