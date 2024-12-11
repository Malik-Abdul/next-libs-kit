"use client";
import { FC, Fragment } from "react";

import StateGraph from "./images/StateGraph";
import StateGraphRedux from "./images/StateGraphRedux";
import ReactReduxImg from "./images/ReactReduxImg";
import CounterForRedux from "./CounterForRedux";
import PostsList from "./PostsList";
import Link from "next/link";

const jsxCodeEx1 = `
 state = {
    userName: '',
    password: '',
    submittingFlag: 'false'
  };
`;
const jsxCodeEx2 = `
 state = {
    users: [],
  };
`;
const jsxCodeEx3 = `
 state = {
    isUserLoggedIn: true,
    userName: 'Malik',
    profileUrl: '',
    onlineUsers: [],
    isModalOppened: 'false'
  };
`;
const jsxCodeEx4 = `
 import { configureStore } from "@reduxjs/toolkit";
 import counterReducer from "./slices/counterSlice";
 const store = configureStore({
  reducer: {
   counter: counterReducer,
  },
});
export default store;
`;

const jsxCodeEx5 = `
 import { Provider } from "react-redux";
 import store from "./store";
 export function ReduxProviderWrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
`;

const jsxCodeEx6 = `
 <html lang="en">
    <body>
        <ReduxProviderWrapper>
            <MainLayout>{children}</MainLayout>
        </ReduxProviderWrapper>
    </body>
</html>
`;

const jsxCodeEx7 = `
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
    incrementByAmmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const selectAllCounts = (state: {
  counter: {
    count: number;
  };
}) => state.counter.count;
export const { increment, decrement, reset, incrementByAmmount } = counterSlice.actions;
export default counterSlice.reducer;
`;

const jsxCodeEx8 = `
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/store/slices/counterSlice";
import { selectAllCounts } from "@/store/slices/counterSlice";
const CounterForRedux: FC = () => {
  const [incrementAmmount, setIncrementAmmount] = useState(0);
  const count = useSelector(selectAllCounts);
  const addValue = Number(incrementAmmount) || 0;
  const resetAll = () => {
    setIncrementAmmount(0);
    dispatch(reset());
  };
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div>
        <strong>Component:</strong> CounterForRedux
      </div>
      <section>
        <h2>{count}</h2>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>{" "}
          <button onClick={() => dispatch(decrement())}>-</button>{" "}
        </div>
        <div>
          <input
            type="text"
            value={incrementAmmount}
            onChange={(e) => setIncrementAmmount(Number(e.target.value) || 0)}
          />
        </div>
        <div>
          <button onClick={() => dispatch(incrementByAmmount(addValue))}>
            Add amount
          </button>
          <button onClick={resetAll}>Reset</button>
        </div>
      </section>
    </Fragment>
  );
};
`;

const ReactRedux: FC = () => {
  return (
    <Fragment>
      <h1>React Redux</h1>
      <div className="link">
        <Link href="https://www.youtube.com/watch?v=NqzdVN2tyvQ" target="blank">
          Tutorial
        </Link>
      </div>

      <div>
        Redux is a predictable state management library for JavaScript
        applications. It works seamlessly with frameworks like React, Angular,
        Vue, or even plain JavaScript. As a <strong>State Container: </strong>
        Redux holds and manages the entire state of your application in a
        centralized location.
      </div>

      <div>
        In a React app with a Login Form, the component's state would be an
        object that includes userName, password, and a submitting flag to
        indicate whether the submission process is happening in the background.
      </div>
      <div className="jsxCode">
        <strong className="example">Example: 1</strong>
        <pre>
          <code>{jsxCodeEx1}</code>
        </pre>
      </div>
      <div>
        If we need to display a list of users, the component's state would be an
        object containing an array of users.
      </div>
      <div className="jsxCode">
        <strong className="example">Example: 2</strong>
        <pre>
          <code>{jsxCodeEx2}</code>
        </pre>
      </div>
      <div>
        State of an app is the state represented by all the indvidual components
        of that app.
      </div>
      <div className="jsxCode">
        <strong className="example">Example: 3</strong>
        <pre>
          <code>{jsxCodeEx3}</code>
        </pre>
      </div>
      <div>Redux will store and manage the application state.</div>
      <div>
        Components have their own states then way do we need another tool to
        manage the state?.
      </div>
      <StateGraph />
      <div>
        Imagine ComponentA has an input field that allows users to enter their
        name, and this input is saved locally within the component's state. Now,
        there's a new requirement to display the user's name in ComponentB. How
        can we achieve this? One approach is to lift the state from ComponentA
        to a parent component (let's call it ComponentC), which can then pass
        the data as props to both ComponentA and ComponentB. Later, another
        requirement arises: ComponentD also needs to display the user’s name. To
        handle this, we need to lift the state again, this time to another
        higher-level component, ComponentE. Then, another requirement comes in:
        the username must also be displayed in ComponentF. This would mean
        lifting the state even higher, possibly to the root App component. As
        the requirements grow, managing this state becomes increasingly
        frustrating. Every time the state is lifted, it must be passed as props
        through all the intermediate components, even if they don't need the
        userName prop. This results in a lot of unnecessary prop drilling and
        increases the complexity of the application. This is where Redux can
        help. By centralizing the state in a global store, we can avoid prop
        drilling entirely. Any component that needs access to the userName can
        directly subscribe to the store, making the application much easier to
        maintain and scale.
      </div>

      <StateGraphRedux />
      <div>
        Using Redux directly in a React application can be a bit challenging and
        confusing. That’s why we have the React-Redux package, which serves as
        the official Redux UI library for React. React-Redux provides several
        functions that simplify connecting your React application to Redux,
        making state management more seamless and efficient.
      </div>
      <div>
        A slice is a collection of rdeucer logic and action for single for a
        single feature in the app
      </div>
      <ReactReduxImg />
      <CounterForRedux />
      <PostsList />
      <h2>Three core principles of Redux</h2>
      <div>
        <strong>1. Single Source of Truth: </strong>
        <ul>
          <li>
            The state of your application is stored in a single, centralized
            object called the store.
          </li>
          <li>
            This centralization ensures consistency and provides a single source
            of truth for the entire app's state.
            <ul>
              <strong>Benefits:</strong>
              <li>Simplifies debugging.</li>
              <li>
                Enables features like time-travel debugging and state
                persistence.
              </li>
            </ul>
          </li>
        </ul>
        <strong>2. State is Read-Only</strong>
        <ul>
          <li>
            The state can only be changed by dispatching an action, which is a
            plain JavaScript object describing what happened.
          </li>
          <li>
            Direct mutations of the state are not allowed, ensuring predictable
            state changes.
          </li>
          <li>
            This principle enforces immutability, making it easier to track
            changes and debug.
          </li>
        </ul>
        <strong>3. Changes are Made with Pure Functions</strong>
        <ul>
          <li>
            To specify how the state tree changes in response to actions, you
            write reducers, which are pure functions.
          </li>
          <li>
            A reducer takes the current state and an action as inputs and
            returns a new state. Reducers must:
            <ul>
              <li>Be pure (no side effects like API calls or mutations).</li>
              <li>
                Always return a new state object instead of modifying the
                existing one.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h2>Three core consepts of Redux.</h2>
      <div>
        <strong>1.Store: </strong>
        <ul>
          <li>
            {" "}
            The store holds the entire state of your application in a
            centralized location.
          </li>
          <li>
            It is the source of truth for the state and is immutable (state can
            only be changed by dispatching actions).
          </li>
          <li>There is only one store in a Redux application.</li>
          <li>It manages state centrally.</li>
          <li>
            You create the store using createStore or configureStore (from Redux
            Toolkit) and pass it to the Provider component.
          </li>
        </ul>
      </div>
      <div className="jsxCode">
        <strong className="example">Example: 4</strong>
        <pre>
          <code>{jsxCodeEx4}</code>
        </pre>
      </div>
      <div>
        <ul>
          <li>
            <strong>React-Redux Integration:</strong>
            <ul>
              <li>
                With React-Redux, the store is connected to React components
                using the Provider component.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="jsxCode">
        <strong className="example">Example: 5</strong>
        <pre>
          <code>{jsxCodeEx5}</code>
        </pre>
      </div>
      <div>
        <ul>
          <li>
            The Provider makes the store available to all React components in
            the app.
          </li>
        </ul>
      </div>
      <div className="jsxCode">
        <strong className="example">Example: 6</strong>
        <pre>
          <code>{jsxCodeEx6}</code>
        </pre>
      </div>

      <div>
        <strong>2.Actions: </strong>
        <ul>
          <li>
            Actions are plain JavaScript objects that represent an intention to
            change the state.
          </li>
          <li>
            Actions represent events that can change the state. With
            React-Redux, actions are dispatched to the store using the dispatch
            function, typically accessed through the useDispatch hook.
          </li>
          <li>
            Actions are typically defined in slices (using Redux Toolkit):
          </li>
        </ul>
      </div>

      <div className="jsxCode">
        <strong className="example">Example: 7</strong>
        <pre>
          <code>{jsxCodeEx8}</code>
        </pre>
      </div>

      <div>
        <strong>2.Reducers: </strong>
        <ul>
          <li>
            Reducers specify how the state changes in response to actions. In
            React-Redux, reducers are typically defined in slices (using Redux
            Toolkit) and combined into the store.
          </li>
        </ul>
      </div>
      <div className="jsxCode">
        <strong className="example">Example: 8</strong>
        <pre>
          <code>{jsxCodeEx7}</code>
        </pre>
      </div>
    </Fragment>
  );
};
export default ReactRedux;
