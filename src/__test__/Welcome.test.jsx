import { render, screen } from '@testing-library/react'
import Welcome from '../components/Welcome';

describe("Correctly mounted Welcome", () => {

  it("mounts Welcome correctly", () => {

    render(<Welcome />);
    
    const h1 = screen.getByText(/benvenuti in epiBooks!/i);

    expect(h1).toBeInTheDocument();

  });

});