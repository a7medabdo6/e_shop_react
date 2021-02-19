import { selectLang } from "../actions";

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const langReducer = () => {
  return [
    { value: "ar", name: "arabic" },
    { value: "en", name: "english" },
  ];
};
const selectedLangReducer = (selectedLang = "en", action) => {
  if (action.type === "LANG_SELECTED") {
    return action.payload;
  }
  return selectedLang;
};

export default combineReducers({
  Langs: langReducer,
  selectedLang: selectedLangReducer,
  form: formReducer,
});
