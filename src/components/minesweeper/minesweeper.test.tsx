import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Minesweeper } from './minesweeper';

describe('Minesweeper ', () => {
  it('renders Minesweeper component, show start/end buttons', () => {
    render(<Minesweeper />);
    expect(screen.getByText('START')).toBeInTheDocument();
    fireEvent.click(screen.getByText('START'));
    expect(screen.getByText('END')).toBeInTheDocument();
    expect(screen.queryByText('START')).toBeNull();
    fireEvent.click(screen.getByText('END'));
    expect(screen.getByText('START')).toBeInTheDocument();
  });

  it('pressed size options and change size to large', () => {
    render(<Minesweeper />);
    screen.debug();
    const small = screen.getByDisplayValue('small');
    expect(small).toBeInTheDocument();
    const large = screen.queryByDisplayValue('large');
    expect(large).not.toBeInTheDocument();
    fireEvent.change(small, { target: { value: 20 } });
    const large2 = screen.queryByDisplayValue('large');
    const small2 = screen.queryByDisplayValue('small');
    expect(large2).toBeInTheDocument();
    expect(small2).not.toBeInTheDocument();
  });

  it('pressed result button, start button will be disabled, results will show', ()=> {
    render(<Minesweeper />);
    const resultButton = screen.getByText('results');
    expect(resultButton).toBeInTheDocument();
    const resultsWindow = screen.queryByDisplayValue(/Results/);
    expect(resultsWindow).not.toBeInTheDocument();

    fireEvent.click(resultButton);
    const closeButton = screen.getByText('close');
    expect(closeButton).toBeInTheDocument();
    const resultButton2 = screen.queryByText('results');
    expect(resultButton2).not.toBeInTheDocument();
    const resultsWindow2 = screen.getByText(/Results/);
    expect(resultsWindow2).toBeInTheDocument();
    const close = screen.getByText(/close/);
    expect(close).toBeInTheDocument();
    const startButton = screen.getByText('START');
    expect(startButton).toBeDisabled();


    fireEvent.click(close);
    expect(resultButton).toBeInTheDocument();
    expect(resultsWindow).not.toBeInTheDocument();
    expect(startButton).toBeEnabled();
    screen.debug();
  });
});
