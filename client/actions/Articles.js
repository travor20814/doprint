export const ARTICLES_FETCHED = Symbol('ARTICLES_FETCHED');

export function fetchArticles() {
  return async dispatch => {
    let response = await fetch('/api/Articles', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      // Request Success
      const Articles = await response.json();

      dispatch({
        type: ARTICLES_FETCHED,
        Articles,
      });
    } else {
      // Request Error
    }
  };
};
