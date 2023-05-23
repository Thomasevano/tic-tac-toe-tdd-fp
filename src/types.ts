export type EmptyCell = '_';

export type GridState = Row[];
export type Row = CellState[];

export type CellState =
  PlayerSymbol.CROSS
  | PlayerSymbol.CIRCLE
  | EmptyCell;

export type Position = {
  x: number,
  y: number
}

export enum PlayerSymbol {
  CROSS = 'X',
  CIRCLE = 'O'
}