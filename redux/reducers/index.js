import { combineReducers } from "redux";
import component from "./component";
import interact from "./interact";
import example from './example'
import akka from './akka'
import matching from './matching'
import tms from './tms'
const reducers = combineReducers({
  component,
  interact,
  example,
  akka,
  matching,
  tms,
});

export default reducers;
