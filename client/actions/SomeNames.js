export const SOMENAMES_FETCHED = Symbol('SOMENAMES_FETCHED');

export function fetchSomeNames() {
  return async dispatch => {
    let response = await fetch('/api/SomeNames',{
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      const SomeNames = await response.json();

      dispatch({
        type: SOMENAMES_FETCHED,
        SomeNames,
      });

    } else{
      //error
    }
  };
};
