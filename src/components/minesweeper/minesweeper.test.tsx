import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Minesweeper } from './minesweeper';

describe('Minesweeper ', () => {

  it('pressed options and change size to large and save', () => {
    render(<Minesweeper />);
    screen.debug();
    const small = screen.getByDisplayValue('small');
    expect(small).toBeInTheDocument();
    const large = screen.queryByDisplayValue('large');
    expect(large).not.toBeInTheDocument();
    fireEvent.change(small, { target: { value: 20 } });
    const saveButton = screen.getByText('Save');
    expect(saveButton).toBeInTheDocument();
    fireEvent.click(saveButton);
    const large2 = screen.queryByDisplayValue('large');
    const small2 = screen.queryByDisplayValue('small');
    expect(large2).toBeInTheDocument();
    expect(small2).not.toBeInTheDocument();
  });

  it('pressed result button, results will show', ()=> {
    render(<Minesweeper />);
    const resultButton = screen.getByText('Results');
    expect(resultButton).toBeInTheDocument();
    const resultsWindow = screen.queryByDisplayValue(/Results/);
    expect(resultsWindow).not.toBeInTheDocument();
    fireEvent.click(resultButton);
    const resultsWindow2 = screen.getByText(/RESULTS/);
    expect(resultsWindow2).toBeInTheDocument();
    fireEvent.click(resultButton);
    expect(resultButton).toBeInTheDocument();
    expect(resultsWindow).not.toBeInTheDocument();
  });
});
