import { describe, expect, it } from "vitest";
import { makeEmptyGrid } from './index';

describe('makeEmptyGrid', () => {
  it('create an empty grid', () => {
    // given
    const rows: number = 0;
    const cols: number= 0;
    const emptyArray: Array<number> = [];
    
    // when
    const grid = makeEmptyGrid(rows)(cols);
    
    // then
    expect(grid).toEqual(emptyArray);
  })

  
})

