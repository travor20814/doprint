export const FETCH_FOOTER_BUTTONS = Symbol('FETCH_FOOTER_BUTTONS');

export function fetchFooterButtons() {
  return async dispatch => {
    let response = await fetch('/api/FooterButtons', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      // Request Success
      const footButtons = await response.json();

      dispatch({
        type: FETCH_FOOTER_BUTTONS,
        footButtons,
      });
    } else {
      // Request Error
    }
  };
};
