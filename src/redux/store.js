import { createContext } from "react";

import rootReducer from "./root-reducer";

const store = createStore(rootReducer);
