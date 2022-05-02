import Projects from "../index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { VIEW_PROJECTS } from "../../../constants";

xdescribe("Projects Page - Unit tests", () => {
  beforeEach(() => {
    render(<Projects />);
  });
  xit('should render the correct text for the h1 element', () => {
    expect(screen.getByTestId('view-projects')).toHaveTextContent(VIEW_PROJECTS);
  });
})
