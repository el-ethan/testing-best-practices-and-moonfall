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
  it('uses toUppercase to put spoiler in all caps', () => {
    const { getByText } = render(<Spoiler />)    
    
    fireEvent.click(getByText('Spoil'))

    expect(titleCaseModule.titleCase).toHaveBeenCalledWith('the moon is a megastructure.')
  });

  // good
  it('title cases the spoiler', () => {
    const { getByTestId, getByText } = render(<Spoiler />)    
    fireEvent.click(getByText('Spoil'))
    
    expect(getByTestId('spoiler-text').innerHTML).toBe('The Moon Is a Megastructure.');
  });

})

describe('Use one assertion per test (or as few assertions as possible)', () => {})

describe('Name your tests well', () => {})

describe('Take care when asserting absence', () => {

  it('hides the spoiler by default', () => {
    const { queryByTestId } = render(<Spoiler />)
            
    expect(queryByTestId('spoiler-text')).toBeNull();
  })

})

describe('Avoid overly general selectors', () => {
  it('title cases the spoiler', () => {
    const { getByTestId } = render(<Spoiler />)    
    fireEvent.click(document.querySelector('.button'))
        
    expect(getByTestId('spoiler-text').innerHTML).toBe('The Moon Is a Megastructure.');
  });
})

describe('Avoid overly specific selectors', () => {
  it('title cases the spoiler', () => {
    const { getByTestId } = render(<Spoiler />)    
    fireEvent.click(document.querySelector('div > button.button#spoil-button'))
            
    expect(getByTestId('spoiler-text').innerHTML).toBe('The Moon Is a Megastructure.');
  });
})