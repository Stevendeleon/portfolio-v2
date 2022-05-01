import About from "../index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {
  ABOUT_ME,
  FULL_TIME_JOB_COMPANY_NAME,
  PART_TIME_JOB_COMPANY_NAME,
  RECENT_TECH_USED_TITLE
} from "../../../constants";

describe("About Page - Unit Tests", () => {
  beforeEach(() => {
    render(<About />);
  });
  it('should output correct text for the h1 data-testid="about-me"', () => {
    expect(screen.getByTestId("about-me")).toHaveTextContent(ABOUT_ME);
  });
  it('should output the correct text for the data-testid="full-time"', () => {
    expect(screen.getByTestId("full-time")).toHaveTextContent(FULL_TIME_JOB_COMPANY_NAME);
  });
  it('should output the correct text for the data-testid="part-time"', () => {
    expect(screen.getByTestId("part-time")).toHaveTextContent(PART_TIME_JOB_COMPANY_NAME);
  });
  it('should render the correct text for the data-testid="recent-technologies-title"', () => {
    expect(screen.getByTestId("recent-technologies-title")).toHaveTextContent(RECENT_TECH_USED_TITLE);
  });
})
