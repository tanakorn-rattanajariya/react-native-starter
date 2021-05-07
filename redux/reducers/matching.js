import Super from "./super";
const initialState = {
};
export default function matching(state = initialState, action) {
  const reducer = new Super({ state, action });
  switch (action.type) {
    default:
      return reducer.observe("matching");
  }
}
