import types from "../actions/type";
import { fork, call, takeEvery } from "redux-saga/effects";
import _super from "./super";
function* request(actions) {
  try {
    switch (actions.api) {
      case "GET":
        return yield fork(get, actions);
      case "POST":
        return yield fork(post, actions);
      case "PUT":
        return yield fork(change, actions);
      case "PATCH":
        return yield fork(patch, actions);
      case "DEL":
        return yield fork(del, actions);
      case "LIST":
        return yield fork(list, actions);
      case "CLEAR":
        return yield fork(clear, actions);
      default:
        return;
    }
  } catch (e) {
    console.log(e);
  }
}

function* clear(actions) {
  const { doc, mcs } = actions;
  yield call(_super.clear, {
    uri: doc.replace(/_/g, "-").toLowerCase(),
    doc,
    mcs,
  });
}
function* get(actions) {
  const { item, doc, id, props, mcs } = actions;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      default:
        return yield call(_super.get, {
          item,
          doc,
          id,
          mcs,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(_super.error, e);
  }
}
function* post(actions) {
  const { item, doc, id, props, mcs } = actions;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      default:
        return yield call(_super.post, {
          item,
          doc,
          isback: props ? true : props?.isback,
          router: props?.router,
          mcs,
        });
    }
  } catch (e) {
    return yield call(_super.error, e);
  }
}
function* change(actions) {
  const { item, id, doc, props, mcs } = actions;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      default:
        return yield call(_super.update, {
          item,
          doc,
          id,
          props,
          mcs,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(_super.error, e);
  }
}
function* patch(actions) {
  const { item, id, doc, props, mcs } = actions;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      default:
        return yield call(_super.patch, {
          item,
          doc,
          id,
          props,
          mcs,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(_super.error, e);
  }
}

function* del(actions) {
  const { id, doc, props, mcs } = actions;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      default:
        return yield call(_super.del, {
          doc,
          id,
          isback: props?.isback ? true : false,
          mcs,
        });
    }
  } catch (e) {
    return yield call(_super.error, e);
  }
}
function* list(actions) {
  const { item, doc, id, props, mcs } = actions;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      default:
        return yield call(_super.list, {
          item,
          doc,
          id,
          mcs,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(_super.error, e);
  }
}
export function* akka() {
  const { AKKA_REQUEST } = types;
  yield takeEvery(AKKA_REQUEST, request);
}
