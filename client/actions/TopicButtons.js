export const TOPIC_BUTTONS_FETCHED = Symbol('TOPIC_BUTTONS_FETCHED');

export function fetchTopicButtons() {
  return async dispatch => {
    let response = await fetch('/api/TopicButtons', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      // Request Success
      const buttons = await response.json();

      dispatch({
        type: TOPIC_BUTTONS_FETCHED,
        buttons,
      });
    } else {
      // Request Error
    }
  };
};
