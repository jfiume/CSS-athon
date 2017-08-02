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
    const $h2 = $("<h2>");
    const $blurb = $("<div>");
    const times = 5;
    const questionPrompts = [
        "move the box to the right by 100 pixles",
        "move the box up 25 pixles and to the right by 50 pixles",
        "enlarge the box by 1.5 times in the x and y directions",
        "rotate the box by 180 degrees",
        "skew the box by 10 degrees in the x and y directions"
    ];
    const correctCssCode = [
        ["transform: translate(100px)", "transform: translate(100px);", "transform:translate(100px)", "transform:translate(100px);"],
        ["transform: translate(25px,-50px)", "transform: translate(25px,-50px);", "transform:translate(25px,-50px)", "transform:translate(25px,-50px);", "transform: translate(25px, -50px)", "transform: translate(25px, -50px);", "transform:translate(25px, -50px)", "transform:translate(25px, -50px);"],
        ["transform: scale(1.5,1.5)", "transform: scale(1.5,1.5);", "transform:scale(1.5,1.5)", "transform:scale(1.5,1.5);", "transform: scale(1.5, 1.5)", "transform: scale(1.5, 1.5);", "transform:scale(1.5, 1.5)", "transform:scale(1.5, 1.5);"],
        ["transform: rotate(180deg)", "transform: rotate(180deg);", "transform:rotate(180deg)", "transform:rotate(180deg);", "transform: rotate(180 deg)", "transform: rotate(180 deg);", "transform:rotate(180 deg)", "transform:rotate(180 deg);"],
        ["transform: skew(10deg,10deg)", "transform: skew(10deg,10deg);", "transform:skew(10deg,10deg)", "transform:skew(10deg,10deg);", "transform: skew(10deg, 10deg)", "transform: skew(10deg, 10deg);", "transform:skew(10deg, 10deg)", "transform:skew(10deg, 10deg);"]
    ];
    const hints = [
      "translate",
      "translate",
      "scale",
      "rotate",
      "skew"
    ];
    $h2.addClass("heading2");
    this.$el.append($h2.text("CSS transforms"));
    $blurb.addClass("blurb");
    this.$el.append($blurb.text("A transformation is an effect that lets an element change shape, size and position."));

    for (var i = 0; i < times; i++) {
      this.createSection(i, questionPrompts[i], correctCssCode[i], hints[i]);
    }
  }


  parentSection() {
    const $section = $("<section>");
    const $prompt = $("<div>");
    const $input = $("<textarea>");
    const $showHide = $("<article>");
    const $submit = $("<button>");
    const $heading = $("<h2>");

    $section.addClass("parent");
    $heading.addClass("heading1");
    $section.prepend($heading.text("CSS Transitions"));
    $prompt.addClass("prompt");
    $section.append($prompt.text("CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run. Each of the below CSS transitions/animations share a single CSS property. The duration of the animation is 2 seconds. Please enter that property below:"));
    $section.append("<br/>");
    $section.append($input);
    $section.append("<br/>");
    $section.append($submit.text("check answer").click(function() {
      if ($input.val() === "transition: transform 2s") {
        $submit.text("CORRECT!");
        $input.addClass("correct");
      } else if ($input.val() === "transition: transform 2s;") {
        $submit.text("CORRECT!");
        $input.addClass("correct");
      } else if ($input.val() === "transition:transform 2s;") {
        $submit.text("CORRECT!");
        $input.addClass("correct");
      } else if ($input.val() === "transition:transform 2s") {
        $submit.text("CORRECT!");
        $input.addClass("correct");
      }
      else {
        $submit.text("Please Try Again");
      }
    }));

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
    $section.append($hintRes.text(`hint: ${hint}`));
    $section.append($input);
    $section.append("<br/>");
    $hintRes.addClass("hint-res");
    $section.append($hint.text("hint").click(function() {
      $hintRes.toggle();
    }));
    $section.append($submit.text("check answer").click(function() {
      if (correctCssCode.includes($input.val())) {
        $submit.text("CORRECT!");
        $submit.addClass("correct");
        $input.addClass("correct");
        $cssEffect.addClass("play");
        $hint.toggle();
      }  else {
        $submit.text("Please Try Again");
      }
    }));

    this.$el.append($section);
  }
}

module.exports = View;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map