/* tslint:disable */
export enum Cell {
  Dead,
  Alive,
}
/**
*/
/**
*/
export class Universe {
  free(): void;
/**
*/
  tick(): void;
/**
* @returns {Universe} 
*/
  static new(): Universe;
/**
* @returns {number} 
*/
  width(): number;
/**
* @returns {number} 
*/
  height(): number;
/**
* @returns {number} 
*/
  cells(): number;
/**
* @param {number} row 
* @param {number} column 
*/
  toggle_cell(row: number, column: number): void;
}
