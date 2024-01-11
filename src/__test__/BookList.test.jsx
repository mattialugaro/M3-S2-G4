import { render, screen } from '@testing-library/react'
import BookList from '../components/BookList'

describe("correctly number of the card", () => {

  it("correctly number of the card", async () => {

    render(<BookList />);

    const cards = await screen.queryAllByTestId("card");

    expect(cards).toBeLessThan(1000);

  });

});

describe("correctly mounted CommentArea", () => {

  it("Correctly mounted CommentArea", () => {

    render(<BookList/>);

    const comment = screen.getByText(/recensione/i)

    expect(comment).toBeInTheDocument();
    
  })
  
})