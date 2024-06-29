// import { createReducer, on } from "@ngrx/store";
// import { decrement, increment } from "./counter.actions";

const initialState = 0;

// export const counterReducer = createReducer(
// 	initialState,
// 	on(increment, (state, action) => state + action.value),
// 	on(decrement, (state, action) => state - action.value)
// );

export function counterReducer(state = initialState, action: any) {
	switch (action.type) {
		case '[Counter] Increment':
			return state + action.value;
		case '[Counter] Decrement':
			return state - action.value;
	}
	return state;
}