import { defineComponent as a, createVNode as d, openBlock as m, createElementBlock as l, createTextVNode as p } from "vue";
const c = a({
  name: "SButton",
  setup(t, {
    slots: n
  }) {
    return () => d("button", {
      class: `
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-green-500 
      hover:bg-green-700 
      border-none 
      cursor-pointer 
      `
    }, [n.default ? n.default() : ""]);
  }
}), _ = {
  name: "SFCButton"
}, f = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, r] of n)
    e[o] = r;
  return e;
};
function B(t, n, e, o, r, i) {
  return m(), l("button", null, "SFC Button");
}
const u = /* @__PURE__ */ f(_, [["render", B]]), s = a({
  name: "JSXButton",
  render() {
    return d("button", null, [p("JSX Button")]);
  }
}), S = {
  install(t) {
    t.component(c.name, c), t.component(u.name, u), t.component(s.name, s);
  }
};
export {
  s as JSXButton,
  c as MyButton,
  u as SFCButton,
  S as default
};
//# sourceMappingURL=smarty-ui.mjs.map
