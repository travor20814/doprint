export const ARTICLE_CONTENTS_FETCHED = Symbol('ARTICLE_CONTENTS_FETCHED');

export function fetchArticleContents() {
  return async dispatch => {
    let response = await fetch('/api/ArticleContents', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      const contents = await response.json();

      dispatch({
        type: ARTICLE_CONTENTS_FETCHED,
        contents,
      });

    } else {
      //error
    }
  };
};
