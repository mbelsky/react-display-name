import React, { Component, memo } from "react";
import TrueAnonymousClazzComponent from "./TrueAnonymousClazzComponent";

// 🟢 display name: ArrowFn
const ArrowFn = () => <div>ArrowFn</div>;
// 🟢 display name: memo(ArrowFn)
const ArrowFnMemo = memo(ArrowFn);
// 🛑 display name: memo(Anonymous)
const AnonymousArrowMemo = memo(() => <div>AnonymousArrow</div>);
// 🛑 display name: memo(Anonymous)
const AnonymousFnMemo = memo(function () {
  return <div>AnonymousFn</div>;
});
// 🟢 display name: memo(Fn)
const FnMemo = memo(function Fn() {
  return <div>Fn</div>;
});
// 🟢 display name: Clazz
const ClazzComponent = class Clazz extends Component {
  render() {
    return <div>ClazzComponent</div>;
  }
};
// 🟡 infer display name: AnonymousClazzComponent
const AnonymousClazzComponent = class extends Component {
  render() {
    return <div>AnonymousClazzComponent</div>;
  }
};

const App = () => (
  <div style={{margin: '0 24px'}}>
    <h1>Component names in react dev tools: demo</h1>
    Open devtools to see component names rendered below.
    <div style={{margin: 50}}>
      <ArrowFn />
      <ArrowFnMemo />
      <AnonymousArrowMemo />
      <AnonymousFnMemo />
      <FnMemo />
      <ClazzComponent />
      <AnonymousClazzComponent />
      <TrueAnonymousClazzComponent />
    </div>
    <a href="https://github.com/mbelsky/react-display-name/blob/dev/src/DisplayName/DisplayName.js">source</a>
  </div>
);

export { App };
