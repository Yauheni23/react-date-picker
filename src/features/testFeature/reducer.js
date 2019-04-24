export const testActions = {
  INCREMENT_ACTION: 'INCREMENT_ACTION',
  SET_ZERO: 'SET_ZERO',
  ASYNC_SET_VALUE: 'ASYNC_SET_VALUE',
};

const initialState = {
  testIncrementValue: 0,
};

export function testReducer(state = initialState, action) {
  switch (action.type) {
    case testActions.INCREMENT_ACTION:
      return {
        ...state,
        testIncrementValue: state.testIncrementValue + 1
      };

    case testActions.ASYNC_SET_VALUE:
      return {
        ...state,
        testIncrementValue: 44
      };

    case testActions.SET_ZERO:
      return {
        ...state,
        testIncrementValue: 0
      };

    default:
      return state;
  }
}
