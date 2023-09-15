import {createStore} from "vuex";
import {treeModule} from "./treeModule";

export default createStore({modules: {tree: treeModule}})

