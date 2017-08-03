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
    const $cssEffect = $("<img src='http://res.cloudinary.com/pancake/image/upload/c_scale,w_372/v1501612999/appacademylogo_aow34j.png'>");
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
}

module.exports = View;
