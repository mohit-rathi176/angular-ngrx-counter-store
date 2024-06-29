import { createSelector } from "@ngrx/store";

export const selectCount = (state: { counter: number }) => state.counter;

// export const selectDoubleCount = (state: { counter: number }) => state.counter * 2;
// OR
export const selectDoubleCount = createSelector(
	selectCount,
	(count) => count * 2
);