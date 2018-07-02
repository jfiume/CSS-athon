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

    this.directions();
    this.topSection();
    this.createPage();
    this.lastSlide();
  }


  createPage() {
    const $h2 = $("<h2>");
    const $child = $("<section>");
    const $blurb = $("<p>");
    const times = 5;
    const questionPrompts = [
        "move the box to the right by 100 pixles using the transform property.",
        "move the box up 25 pixles and to the right by 50 pixles using the transform property.",
        "enlarge the box by 1.5 times in the x and y directions using the transform property.",
        "rotate the box by 180 degrees using the transform property.",
        "skew the box by 10 degrees in the x and y directions using the transform property."
    ];
    const correctCssCode = [
        ["transform: translate(100px)", "transform: translate(100px);", "transform:translate(100px)", "transform:translate(100px);", "transform: translate( 100px )", "transform: translate( 100px );", "transform:translate( 100px )", "transform:translate( 100px );"],
        ["transform: translate(25px,-50px)", "transform: translate(25px,-50px);", "transform:translate(25px,-50px)", "transform:translate(25px,-50px);", "transform: translate(25px, -50px)", "transform: translate(25px, -50px);", "transform:translate(25px, -50px)", "transform:translate(25px, -50px);", "transform: translate(25px,-50px)", "transform: translate( 25px,-50px );", "transform:translate( 25px,-50px )", "transform:translate( 25px,-50px );", "transform: translate( 25px, -50px )", "transform: translate( 25px, -50px );", "transform:translate( 25px, -50px )", "transform:translate( 25px, -50px );"],
        ["transform: scale(1.5,1.5)", "transform: scale(1.5,1.5);", "transform:scale(1.5,1.5)", "transform:scale(1.5,1.5);", "transform: scale(1.5, 1.5)", "transform: scale(1.5, 1.5);", "transform:scale(1.5, 1.5)", "transform:scale(1.5, 1.5);","transform: scale( 1.5,1.5 )", "transform: scale( 1.5,1.5 );", "transform:scale( 1.5,1.5 )", "transform:scale( 1.5,1.5 );", "transform: scale( 1.5, 1.5 )", "transform: scale( 1.5, 1.5 );", "transform:scale( 1.5, 1.5 )", "transform:scale( 1.5, 1.5 );"],
        ["transform: rotate(180deg)", "transform: rotate(180deg);", "transform:rotate(180deg)", "transform:rotate(180deg);", "transform: rotate(180 deg)", "transform: rotate(180 deg);", "transform:rotate(180 deg)", "transform:rotate(180 deg);", "transform: rotate( 180deg )", "transform: rotate( 180deg );", "transform:rotate( 180deg )", "transform:rotate( 180deg );", "transform: rotate( 180 deg )", "transform: rotate( 180 deg );", "transform:rotate( 180 deg )", "transform:rotate( 180 deg );"],
        ["transform: skew(10deg,10deg)", "transform: skew(10deg,10deg);", "transform:skew(10deg,10deg)", "transform:skew(10deg,10deg);", "transform: skew(10deg, 10deg)", "transform: skew(10deg, 10deg);", "transform:skew(10deg, 10deg)", "transform:skew(10deg, 10deg);", "transform: skew( 10deg,10deg )", "transform: skew( 10deg,10deg) ;", "transform:skew( 10deg,10deg )", "transform:skew( 10deg,10deg );", "transform: skew( 10deg, 10deg )", "transform: skew( 10deg, 10deg );", "transform:skew( 10deg, 10deg )", "transform:skew( 10deg, 10deg );"]
    ];
    const hints = [
      "transform: translate( blank );",
      "transform: translate( blank ); also remember right is negative",
      "transform: scale( blank );",
      "transform: rotate( blank ); also remember that deg is for degrees",
      "transform: skew( blank );"
    ];

    $h2.addClass("heading2");
    $child.append($h2.text("CSS transforms"));
    $blurb.addClass("blurb");
    $child.append($blurb.text("A transformation is an effect that lets an element change shape, size and position."));
    $child.addClass("slide2");
    $child.attr("id", "section0");
    $child.append($("<button>").text("Next").click(function() {
      return onCorrect("slide1");
    }));
    this.$el.append($child);

    for (var i = 0; i < times; i++) {
      this.createSection(i, questionPrompts[i], correctCssCode[i], hints[i]);
    }
  }


  topSection() {
    const answerSet = new Set(["transition: transform 2s", "transition: transform 2s;", "transition:transform 2s;", "transition:transform 2s"]);
    const $section = $("<section>");
    const $prompt = $("<div>");
    const $input = $("<textarea>");
    const $showHide = $("<article>");
    const $submit = $("<button>");
    const $heading = $("<h2>");
    const $hint = $("<button>");
    const $hintRes = $("<div>");

    $section.attr("id", "topSection");
    $section.addClass("slide1");
    $heading.addClass("heading1");
    $section.prepend($heading.text("CSS Transitions"));
    $prompt.addClass("prompt");
    $section.append($prompt.text("CSS transitions let you decide which properties to animate. Each of the below CSS transitions/animations share a single CSS property. The duration of the animation is 2 seconds. Please enter that property below:"));
    $section.append($hintRes.text("transition: transform ___s"));
    $section.append($input);
    $section.append("<br/>");
    $hintRes.addClass("hint-res");
    $section.append($hint.text("hint").click(function() {
      $hintRes.toggle();
    }));
    $section.append($submit.text("check answer").click(function() {
      if (answerSet.has($input.val())) {
        $submit.text("CORRECT!");
        $input.addClass("correct");
        return onCorrect("slide2");
      } else {
        $submit.text("Please Try Again");
      }
    }));

    this.$el.append($section);
  }

  createSection(i, questionPrompt, correctCssCode, hint) {
    const $section = $("<section>");
    const $prompt = $("<div>");
    const $input = $("<textarea>");
    const $hint = $("<button>");
    const $hintRes = $("<div>");
    const $cssEffect = $("<img src='https://res.cloudinary.com/pancake/image/upload/c_scale,w_720/v1501801910/htmlCssJS_cozhx0.jpg'>");
    const $showHide = $("<article>");
    const $submit = $("<button>");

    $section.attr("id", `section${i + 1}`);
    $section.addClass(`slide${i + 3}`);
    $section.append($cssEffect.addClass(`img-${i + 1}`));
    $section.append($prompt.addClass("prompt").text(`Please enter the CSS code to ${questionPrompt}`));
    $section.append($hintRes.text(`${hint}`));
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
        $cssEffect.addClass(`play-${i + 1}`);
        $hint.toggle();
        return onCorrect(`slide${i + 2}`);
      }  else {
        $submit.text("Please Try Again");
      }
    }));

    this.$el.append($section);
  }

  lastSlide() {
    const $section = $("<section>");
    const $h1 = $("<h1>");
    $section.append($h1.text("CONGRATULATIONS! YOU COMPLETED THIS TUTORIAL!"));
    this.$el.append($section);
  }

  directions() {
    const $section = $("<section>");
    const $h2 = $("<h2>");
    const $h3 = $("<h3>");
    const $p0 = $("<p>");
    const $p1 = $("<p>");
    const $p2 = $("<p>");
    const $p3 = $("<p>");
    $section.addClass("slide0");
    $section.append($h2.text("Directions for Playing CSS-aton!"));
    $section.append($h3.text("CSS-aton! will teach you about CSS Transitions, CSS Transforms and CSS Animations."))
    $section.append($p0.text("CSS transitions allows you to change property values smoothly (from one value to another), over a given duration."));
    $section.append($p1.text("CSS transforms allow you to translate, rotate, scale, and skew elements. A transformation is an effect that lets an element change shape, size and position. CSS supports 2D and 3D transformations."));
    $section.append($p2.text("CSS animations allows animation of most HTML elements without using JavaScript or Flash!"));
    $section.append("<br/>");
    $section.append($p3.text("please click the 'next' button below to begin playing. ENJOY!"))
    $section.append($("<button>").text("Next").click(function() {
      return onCorrect("slide0");
    }));
    this.$el.append($section);
  }
}

function onCorrect(slide) {
   setTimeout(function() {

    $(`.${slide}`)
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('.main');
  }, 3000);
}
module.exports = View;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map