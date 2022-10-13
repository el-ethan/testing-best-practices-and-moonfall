import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Spoiler } from '.'
import * as titleCaseModule from 'title-case'

jest.spyOn(titleCaseModule, 'titleCase')

describe('Make your tests fail', () => {

  it('shows the spoiler when the "Spoil" button is pressed', () => {
    const { getByTestId, getByText } = render(<Spoiler />)    
    fireEvent.click(getByText('Spoil'))
    
    expect(getByTestId('spoiler-text')).toBeDefined();
  });

})

describe('Don\'t test your implementation details (test "what" not "how")', () => {

  // bad
  it('uses titleCase package to put spoiler in all caps', () => {
    const { getByText } = render(<Spoiler />)    
    
    fireEvent.click(getByText('Spoil'))

    expect(titleCaseModule.titleCase).toHaveBeenCalledWith('the moon is a megastructure.')
  });

  // good
  it('title cases the spoiler', () => {
    const { getByTestId, getByText } = render(<Spoiler />)    
    fireEvent.click(getByText('Spoil'))
    
    expect(getByTestId('spoiler-text').textContent).toBe('The Moon Is a Megastructure.');
  });

})

describe('Take care when asserting absence', () => {

  // only bad in isolation, and if you don't follow other best practices   
  it('hides the spoiler by default', () => {
    const { queryByTestId } = render(<Spoiler />)

    expect(queryByTestId('spoiler-texts')).toBeNull();
  })

})

describe('Avoid overly general selectors', () => {

  it('title cases the spoiler', () => {
    const { getByTestId } = render(<Spoiler />)    
    fireEvent.click(document.querySelector('.button'))
        
    expect(getByTestId('spoiler-text').innerHTML).toBe('The Moon Is a Megastructure.');
  });

  // good
  it('title cases the spoiler', () => {
    const { getByTestId } = render(<Spoiler />)    
    fireEvent.click(document.querySelector('#spoil-button')) // or better yet, use a data-testid: [data-test-id="spoil-button"]!
                
    expect(getByTestId('spoiler-text').innerHTML).toBe('The Moon Is a Megastructure.');
  });

})

describe('Avoid overly specific selectors', () => {

  // bad
  it('title cases the spoiler', () => {
    const { getByTestId } = render(<Spoiler />)    
    fireEvent.click(document.querySelector('div > button.button#spoil-button'))
            
    expect(getByTestId('spoiler-text').innerHTML).toBe('The Moon Is a Megastructure.');
  });

  // good
  it('title cases the spoiler', () => {
    const { getByTestId } = render(<Spoiler />)    
    fireEvent.click(document.querySelector('#spoil-button')) // or better yet, use a data-testid: [data-test-id="spoil-button"]!
                
    expect(getByTestId('spoiler-text').innerHTML).toBe('The Moon Is a Megastructure.');
  });
})

describe('Make your test names and assertions clear', () => {

  // bad
  it('should format the spoiler correctly', () => {
    const { getByTestId, getByText } = render(<Spoiler />)    
    fireEvent.click(getByText('Spoil'))
                
    expect([...getByTestId('spoiler-text').textContent].pop()).toBe('.');
  });

  // good
  it('should format the spoiler with a period at the end', () => {
    const { getByTestId, getByText } = render(<Spoiler />)    
    fireEvent.click(getByText('Spoil'))

    const lastCharacterOfSpoiler = [...getByTestId('spoiler-text').textContent].pop()
    
    expect(lastCharacterOfSpoiler).toBe('.');
  });
})