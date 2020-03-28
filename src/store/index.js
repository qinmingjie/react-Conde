import {createStore,combineReducers} from "redux";
import topicsReducer from "./reducer/topics";
import topicReducer from "./reducer/topic";

let store = createStore(combineReducers({topicsReducer,topicReducer}))  //遇到的问题：传入不是对象时候createStore(combineReducers(topics))报错store dose not...
export default store;