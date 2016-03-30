export const HEADER_BUTTONS_FETCHED = Symbol('HEADER_BUTTONS_FETCHED');

export function fetchHeaderButtons() {
  return async dispatch => {
      let response = await fetch('/api/HeaderButtons',{
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        const HeaderButtons = await response.json();

        dispatch({
          type: HEADER_BUTTONS_FETCHED,
          HeaderButtons
        });
      } else {
        //error
      }

  };
};
