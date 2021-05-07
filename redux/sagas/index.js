import { all } from "redux-saga/effects";
import { interact } from "./interact";
import {matching} from './matching'
import {akka} from './akka'
import {tms} from './tms'
export default function* saga() {
  yield all([interact(),matching(),akka(),tms()]);
}
