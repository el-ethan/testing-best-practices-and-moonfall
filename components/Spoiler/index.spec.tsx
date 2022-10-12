import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Spoiler } from '.'

describe('Spoiler', () => {
    it('renders', () => {
        const component = render(<Spoiler />)
        expect(component).toBeDefined()
    });

    // Use this to illustrate "be carful about asserting absence"
    it('hides the spoiler by default', () => {
        const { queryByTestId } = render(<Spoiler />)

        expect(queryByTestId('spoiler-text')).toBeNull();
    });
    
    it('Shows the spoiler when the "Spoil" button is pressed', () => {
        const { getByTestId, getByText } = render(<Spoiler />)    
        fireEvent.click(getByText('Spoil'))

        expect(getByTestId('spoiler-text')).toBeDefined();
    });

    // it('Hides the spoiler when the "un-spoil" button is pressed', () => {
    //     const { getByText, queryByTestId } = render(<Spoiler />)    
    //     fireEvent.click(getByText('Spoil'))
    //     fireEvent.click(getByText('Un-spoil'))

    //     expect(queryByTestId('spoiler-text')).toBeNull();
    // });
});