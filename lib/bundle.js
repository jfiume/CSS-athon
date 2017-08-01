/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const View = __webpack_require__(1);

$( () => {
  const rootEl = $('.main');
  new View(rootEl);
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class View {
  constructor($el) {
    this.$el = $el;

    this.parentSection();
    this.createPage();
  }


  createPage() {
    const times = 5;
    const questionPrompts = [
        " move the box to the right by 100 pixles",
        " move the box up 20 pixles and to the right by 10 pixles",
        " enlarge the box by 1.5 times in the x and y directions",
        " rotate the box by 180 degrees",
        " skew the box by 10 degrees in the x and y directions"
    ];
    const correctCssCode = [
        "transform:translate(100px)",
        "transform:translate(20px,10px)",
        "transform:scale(1.5,1.5)",
        "transform:rotate(180deg)",
        "transform:skew(10deg,10deg)"
    ];
    const hints = [
      "translate",
      "translate",
      "scale",
      "rotate",
      "skew"
    ];
    for (var i = 0; i < times; i++) {
      this.createSection(i, questionPrompts[i], correctCssCode[i], hints[i]);
    }
  }

  hint() {

  }

  parentSection() {
    const $section = $("<section>");
    const $prompt = $("<div>");
    const $input = $("<textarea>");

    $section.addClass("parent");
    $section.append($prompt.text("CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run"));
    this.$el.prepend($section);
  }

  createSection(i, questionPrompt, correctCssCode, hint) {
    const $section = $("<section>");
    const $prompt = $("<div>");
    const $input = $("<textarea>");
    const $hint = $("<button>");
    const $hintRes = $("<div>");
    const $cssEffect = $("<img src='http://res.cloudinary.com/pancake/image/upload/c_scale,w_372/v1501612999/appacademylogo_aow34j.png'>");
    const $showHide = $("<article>");
    const $submit = $("<button>");

    $section.addClass(`section${i + 1}`);
    $section.append($cssEffect);
    $section.append($prompt.addClass("prompt").text(`Please enter the CSS code to ${questionPrompt}`));
    $section.append($hintRes.text(`${hint}`));
    $section.append($input);
    $section.append($showHide.text(`${correctCssCode}`));
    $section.append("<br/>");
    $section.append($hint.text("hint"));
    $section.append($submit.text("check answer"));

    this.$el.append($section);
  }
}

module.exports = View;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map