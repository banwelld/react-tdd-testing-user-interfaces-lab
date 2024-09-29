import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test('Displays a top-level heading with the text \'Hi, I\'m Dave', () => {
    render(<App />);
    const topLevelHeading = screen.getByRole('heading', {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });
    expect(topLevelHeading).toBeInTheDocument();
});

test('Displays an image of the page owner with alt attribute to describe', () => {
    render(<App />);
    const ownerImage = screen.getByRole('img', {
        alt: /dave/i,
    });
    expect(ownerImage).toBeInTheDocument();
    expect(ownerImage).toHaveAttribute('src');
});

test('Displays a second-level heading with the text \'About Me\'.', () => {
    render(<App />);
    const aboutMeHeading = screen.getByRole('heading', {
        name: /about me/i,
        exact: false,
        level: 2,
    });
    expect(aboutMeHeading).toBeInTheDocument();
});

test('Displays a paragraph comprising a mini-biography of the page owner', () => {
    render(<App />);
    const aboutMeHeading = screen.getByRole('heading', {
        name: /about me/i,
        exact: false,
        level: 2,
    });
    const miniBio = aboutMeHeading.nextElementSibling;
    expect(miniBio.tagName).toBe('P');
    expect(miniBio.textContent).toMatch(/dave/i);
    expect(miniBio.textContent.length).toBeGreaterThan(50);
});

test('Displays two links to GitHub and LinkedIn pages', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);

    const githubLink = links.find(link => link.href.includes('github.com/'));
    const linkedinLink = links.find(link => link.href.includes('linkedin.com/'));
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });