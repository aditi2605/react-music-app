import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import Form from '../components/form'

describe('app', () => {
  
  beforeEach(() => {
    render(<App/>)
  });


  // test('Renders songs as a list', () => {
  //   const songList = screen.getByRole('list');
  //   expect(songList.textContent).toContain('Kiss Land, 2013');
  // })

  // test('A song should appear liked if the like button is clicked on by the user', () => {
  //     const song1Btn = screen.getAllByRole('likeBtn')[0]
  //     userEvent.click(song1Btn)
  //     expect(song1Btn.style.color).toBe('blue')
  // });

  // test('A song should appear disliked if the dislike button is clicked', () => {
  //     const song1Btn = screen.getAllByRole('dislikeBtn')[0]
  //     userEvent.click(song1Btn)
  //     expect(song1Btn.style.color).toBe('blue')
  // });

  test('If the user submits information, the input fields get cleared', () => {
    const userNameInput = screen.getByPlaceholderText('enter your name')
    userEvent.type(userNameInput, "Matthew{enter}")
    expect(userNameInput.value).toBe('')
  })

    
});

