class View {
  constructor($el) {
    this.$el = $el;

    this.parentSection();
    this.createPage();
    this.hardMode();
  }


  createPage() {
    const $h2 = $("<h2>");
    const $blurb = $("<div>");
    const times = 5;
    const questionPrompts = [
        "move the box to the right by 100 pixles using the transform property.",
        "move the box up 25 pixles and to the right by 50 pixles using the transform property.",
        "enlarge the box by 1.5 times in the x and y directions using the transform property.",
        "rotate the box by 180 degrees using the transform property.",
        "skew the box by 10 degrees in the x and y directions using the transform property."
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

    $section.attr("id", "parent");
    $section.addClass("slide");
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
    const $cssEffect = $("<img src='http://res.cloudinary.com/pancake/image/upload/c_scale,w_720/v1501801910/htmlCssJS_cozhx0.jpg'>");
    const $showHide = $("<article>");
    const $submit = $("<button>");

    $section.attr("id", `section${i + 1}`);
    $section.addClass("slide");
    $section.append($cssEffect.addClass(`img-${i + 1}`));
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
        $cssEffect.addClass(`play-${i + 1}`);
        $hint.toggle();
      }  else {
        $submit.text("Please Try Again");
      }
    }));

    this.$el.append($section);
  }

  hardMode() {
    const $box = $("<div>");
    const $section = $("<section>");
    const $prompt = $("<div>");
    const $input = $("<textarea>");
    const $showHide = $("<article>");
    const $submit = $("<button>");
    const $heading = $("<h2>");


    $box.addClass("box");
    $box.text("CSS");
    $section.append($box);

    const answer = ["transition-property: width height background-color font-size left top transform;",
      "transition-duration: 2s;",
      "transition-timing-function: ease-in-out;",
      "transform: rotate(270deg);"];
    $section.prepend($heading.text("Extra Hard Mode"));
    $prompt.addClass("prompt");
    $section.append($prompt.text("Please enter the CSS code to rotate the box. HINT: it will take more than one line of CSS to perform this operation."));
    $section.append("<br/>");
    $section.append($input);
    $section.append("<br/>");
    $section.append($submit.text("check answer").click(function() {
      if ($input.val() ===
          "transition-property: width height background-color font-size left top transform; transition-duration: 2s; transition-timing-function: ease-in-out; transform: rotate(270deg);") {
        $submit.text("CORRECT!");
        $box.attr("id", "box-correct");
        $input.addClass("correct");
      } else if ($input.val() ===
          "transition-property: width height background-color font-size left top transform; " +
          "transition-duration: 2s; " +
          "transition-timing-function: ease-in-out; " +
          "transform: rotate(270deg); ") {
        $submit.text("CORRECT!");
        $box.attr("id", "box-correct");
        $input.addClass("correct");
      } else if ($input.val() ===
          "transition-property: width height background-color font-size left top transform;" +
          "transition-duration: 2s;" +
          "transition-timing-function: ease-in-out;" +
          "transform: rotate(270deg);") {
        $submit.text("CORRECT!");
        $box.attr("id", "box-correct");
        $input.addClass("correct");
      } else if (this.permutator($input.val().split("; ")) === this.permutator(answer)) {
        $submit.text("CORRECT!");
        $box.attr("id", "box-correct");
        $input.addClass("correct");
      }
      else {
        $submit.text("Please Try Again");
      }
    }));

    this.$el.append($section);
  }

  permutator(inputArr) {
    let result = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
       }
     }
   };

   permute(inputArr);

   return result;
  }
}

module.exports = View;
