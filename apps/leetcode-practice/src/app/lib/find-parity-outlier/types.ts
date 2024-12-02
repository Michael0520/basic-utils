export type Either<E, A> = Left<E> | Right<A>;

export interface Left<E> {
  readonly _tag: 'Left';
  readonly left: E;
}

export interface Right<A> {
  readonly _tag: 'Right';
  readonly right: A;
}

export type ErrorMessage = 
  | 'empty input'
  | 'invalid number format'
  | 'contains zero'
  | 'insufficient length'
  | 'number too large';

export type Numbers = readonly number[];