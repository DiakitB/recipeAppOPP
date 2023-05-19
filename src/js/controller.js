// import icons from '../img/icons.svg';
// console.log(icons);
import * as model from '../model.js';
import resultView from '../views/resultView.js';
import recipeView from '../views/recipeView.js';
import searchView from '../views/searchView.js';
import bookMarkView from '../views/bookMarkView.js';
import paginationView from '../views/paginationView.js';

//const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
if (module.hot) {
  module.hot.accept();
}
const controllerRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();
    resultView.update(model.getSearResult());

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const constrolSearchResult = async function () {
  try {
    resultView.renderSpinner();

    const query = searchView.getQuery();

    if (!query) return;
    //2) loadSearche result
    await model.loadSearchResults(query);
    //3)

    resultView.render(model.getSearResult());
    paginationView.render(model.state.search);
  } catch (err) {
    throw err;
  }
};
const controlPageination = function (goToPage) {
  resultView.render(model.getSearResult(goToPage));
  paginationView.render(model.state.search);
};

//
///
const controllerServing = function (newServings) {
  //update the recipe serving (in state)
  model.updateServing(newServings);
  // update the reicpe  view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
//Add bookmark
const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe);
  }

  console.log(model.state.recipe);
  recipeView.update(model.state.recipe);
  // 3) rendering bookmakr
  bookMarkView.render(model.state.bookmarks);
};
////
const controlBookMark = function () {
  bookMarkView.render(model.state.bookmarks);
};
///
const init = function () {
  bookMarkView.addHandlerRender(controlBookMark);
  recipeView.addHandlerRender(controllerRecipe);
  recipeView.addHandlerUpdateServing(controllerServing);
  recipeView.addHanlerBookmak(controlAddBookmark);
  searchView.addHandlerSearch(constrolSearchResult);
  paginationView.addHandlerClick(controlPageination);
};
init();
// controllerRecipe();

// ['hashchange', 'load'].forEach(ev =>
//   window.addEventListener(ev, controllerRecipe)
// );
