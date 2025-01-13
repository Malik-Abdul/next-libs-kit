"use client";
import { FC, Fragment } from "react";
// import T02ReactMemo from "./utils/T02ReactMemo";
// import T02UseMemo from "./utils/T02UseMemo";
// import T02UseCallback from "./utils/T02UseCallback";
import { JSXCodeLexicalScope } from "./utils/JsxCodes";

const FP00Closure: FC = () => {
  return (
    <Fragment>
      <article>
        <h1>Closure</h1>
        <section>
          <div className="paragraph">
            <strong>Lexical scope: </strong>
            Lexical scope determines how variable names are resolved in nested
            functions. If a child function is defined within a parent function,
            the child function has access to the variables in the parent's scope
            as well as the global scope. This means that nested (child)
            functions can access the scope of their parent functions.
          </div>
          <div className="jsxCode">
            <strong className="example">Lexical scope</strong>
            <pre>
              <code>{JSXCodeLexicalScope}</code>
            </pre>
          </div>
          <div className="paragraph">
            <strong>Closure: </strong>A closure is a function that retains
            access to its parent scope, even after the parent function has
            finished executing. <br />
            There are 2 parst of above defination
            <ul>
              <li>
                A closure is a function having access to the parent scope. This
                part is lexical scope
              </li>
              <li>Even after the parent function has closed.</li>
            </ul>
          </div>
          <div className="jsxCode">
            <strong className="example">Lexical scope</strong>
            <pre>
              <code>{JSXCodeLexicalScope}</code>
            </pre>
          </div>
        </section>
      </article>

      {/* <T02ReactMemo /> */}
    </Fragment>
  );
};

export default FP00Closure;
