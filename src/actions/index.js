export const selectLang = (Lang) => {
  return {
    type: "LANG_SELECTED",
    payload: Lang,
  };
};
