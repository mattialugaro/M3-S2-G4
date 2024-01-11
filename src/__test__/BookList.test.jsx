import { render, screen } from '@testing-library/react'
import BookList from '../components/BookList'
import AddComment from '../components/AddComment';

describe("correctly number of the card", () => {

  it("correctly number of the card", async () => {

    render(<BookList />);

    const cards = await screen.findAllByTestId("card");

    expect(cards).toBeLessThan(1000);

  });

});

describe("correctly mounted CommentArea", () => {

  it("Correctly mounted CommentArea", () => {

    render(<AddComment />);

    const comments = screen.getByText(/recensione/i)

    expect(comments).toBeInTheDocument();
    
  })
  
})