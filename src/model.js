import { API_URL } from './js/config';
import { getJSon } from './js/helper';
import { RESULT_PER_PAGE } from './js/config';
//console.log(getJSon);
export const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    resultPerpage: RESULT_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSon(`${API_URL}${id}`);
    // console.log(data);
    // const response = await fetch(`${API_URL}/${id}`);
    // if (!response.ok) throw new Error(`${data.message} ${response.status}`);
    // const data = await response.json();

    const { recipe } = data.data;
    //

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image_url,
      publisher: recipe.publisher,
      surecUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
      serving: recipe.servings,
      ingredients: recipe.ingredients,
      description: recipe.description,
    };
    if (state.bookmarks.some(boobmark => boobmark.id === id)) {
      state.recipe.bookmarked = true;
    }
    console.log(state.recipe);
  } catch (err) {
    console.error(`${err}🌋🌋`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.query = query;
    const data = await getJSon(`${API_URL}?search=${query}`);

    state.search.result = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image_url,
        publisher: rec.publisher,
      };
    });
    state.search.page = 1;
    //console.log(state.search.result);
  } catch (err) {
    throw err;
  }
};
// storing bookmarks into local storage

const presistBookmakrs = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const getSearResult = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultPerpage;
  const end = page * state.search.resultPerpage;
  return state.search.result.slice(start, end);
};

export const updateServing = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.serving;
  });
  state.recipe.serving = newServings;
};
export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);
  ///
  //mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  presistBookmakrs();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);
  ///
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  presistBookmakrs();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();
console.log(state.bookmarks);
