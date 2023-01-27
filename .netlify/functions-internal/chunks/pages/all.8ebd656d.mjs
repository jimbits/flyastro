import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, _ as __astro_tag_component__, f as renderComponent } from '../astro.d10da367.mjs';
import 'html-escaper';
/* empty css                           */import { jsx } from 'react/jsx-runtime';

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body class="bg-slate-100">
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/jimfoley/Desktop/astroproject/src/layouts/Layout.astro");

const $$Astro$2 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="py-2 pl-4 pr-16">
    <ul class="flex  gap-8">
        <li><a class="text-blue-600 font-semibold underline" href="/">home</a></li>
        <li><a class="text-blue-600 font-semibold underline" href="/javascript">learn javascript</a></li>
        <li class="ml-auto">cart <output id="cart-items" class="bg-white py-1 px-2 rounded-md shadow-md text-sm">0</output></li>
    </ul>
</nav>`;
}, "/Users/jimfoley/Desktop/astroproject/src/components/NavBar.astro");

const ButtonDaddy = () => {
  return /* @__PURE__ */ jsx("button", {
    onClick: () => console.log("button me daddy"),
    children: "click me"
  });
};
__astro_tag_component__(ButtonDaddy, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="py-16 text-center text-4xl">
    <h1>${title || "ui title"}</h1>
    <button id="cart" class="text-sm bg-rose-500 text-white  font-semibold rounded-md py-2 px-4">add to cart</button>
    ${renderComponent($$result, "ButtonDaddy", ButtonDaddy, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/jimfoley/Desktop/astroproject/src/components/ButtonDaddy", "client:component-export": "default" })}
</header>`;
}, "/Users/jimfoley/Desktop/astroproject/src/components/PageHeader.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": () => renderTemplate`${renderComponent($$result, "NavBar", $$NavBar, {})}${renderComponent($$result, "PageHeader", $$PageHeader, { "title": "welcome to learning javascript" })}${maybeRenderHead($$result)}<main class="bg-red-500">
	 
		 
	</main>` })}`;
}, "/Users/jimfoley/Desktop/astroproject/src/pages/index.astro");

const $$file = "/Users/jimfoley/Desktop/astroproject/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
