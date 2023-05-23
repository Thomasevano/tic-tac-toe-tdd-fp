import { describe, expect, it } from "vitest";
import { makeEmptyGrid } from './index';
import { CellState, GridState } from '../types';

describe('makeGrid', () => {
  it('create an empty grid', () => {
    // given
    const rows = 0;
    const cols = 0;
    const expectedEmptyArray: GridState = [];

    // when
    const grid = makeEmptyGrid(rows)(cols);

    // then
    expect(grid).toEqual(expectedEmptyArray);
  })

  it('create a grid with 1 row and 1 column', () => {
    // given
    const rows = 3;
    const cols = 3;
    const E: CellState = '_';
    const expectedArray: GridState = [
      [E, E, E],
      [E, E, E],
      [E, E, E]
    ];

    // when
    const grid = makeEmptyGrid(rows)(cols);

    // then
    expect(grid).toEqual(expectedArray);
  })
})

