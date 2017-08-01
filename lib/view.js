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
