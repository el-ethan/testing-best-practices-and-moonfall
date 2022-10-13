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

describe(`Don't test your implementation details (test "what" not "how")`, () => {

  it('uses toUppercase to put spoiler in all caps', () => {
    const { getByText } = render(<Spoiler />)    
    
    fireEvent.click(getByText('Spoil'))

    expect(titleCaseModule.titleCase).toHaveBeenCalledWith('the moon is a megastructure.')
  });

  it('title cases the spoiler', () => {
    const { getByTestId, getByText } = render(<Spoiler />)    
    fireEvent.click(getByText('Spoil'))
    
    expect(getByTestId('spoiler-text').innerHTML).toBe('The Moon Is a Megastructure.');
  });

})

describe('One use one assertion per test (or as few assertions as possible)', () => {})
describe('Name your tests well', () => {})

describe('Take care when asserting absence', () => {
  describe('Spoiler component', () => {
    it('hides the spoiler by default', () => {
      const { queryByTestId } = render(<Spoiler />)
            
      expect(queryByTestId('spoiler-text')).toBeNull();
    })
  });
})

describe('Avoid overly general selectors', () => {})
describe('Avoid overly specific selectors', () => {})
describe('Avoid asserting "truthiness"', () => {})

describe('Spoiler', () => {
  it('renders', () => {
    const component = render(<Spoiler />)
    expect(component).toBeDefined()
  });

  // Use this to illustrate "be carful about asserting absence"

  // it('Hides the spoiler when the "un-spoil" button is pressed', () => {
  //     const { getByText, queryByTestId } = render(<Spoiler />)    
  //     fireEvent.click(getByText('Spoil'))
  //     fireEvent.click(getByText('Un-spoil'))

  //     expect(queryByTestId('spoiler-text')).toBeNull();
  // });
});