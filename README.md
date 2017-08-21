# CSS-athon!

CSS-athon is a fun front end web application that teaches users to learn advanced CSS animations through short tutorials.

<img src="https://res.cloudinary.com/pancake/image/upload/v1501867933/Screen_Shot_2017-08-04_at_10.31.32_AM_bvgm1f.png">

## Features & MVP

-  Users see the CSS feature in action when hovering over the item
-  Users input their own CSS code and see if it matches the correct CSS code for the function
-  Hint button shows/hides hints for the code
-  Several CSS effects are highlighted such as pseudo-classes, transforms, transitions, and animations

<img src="https://res.cloudinary.com/pancake/image/upload/v1501867934/Screen_Shot_2017-08-04_at_10.32.04_AM_lhc2sp.png">

## Project Design

CSS-athon was built in 4 days.

A proposal was drafted to help provide an implementation timeline for the development process.

## Technology

- Vanilla JavaScript and `jquery` for overall structure and logic,
- `HTML5` and `CSS3` for all for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

## Code Snippets

``` CSS3
/* CSS to show the static image, the image while hovering, and the image in animation */

.img-4 {
  -webkit-transition: -webkit-transform 2s;
  transition: transform 2s;
}

.play-4 {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.img-4:hover {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
```

## Future Implementations

CSS-athon could be improved with the addition of a few future implementations:

- Add a more detailed step by step tutorial building on the current functionality.
- Add tests with automation.
- Make each tutorial a CSS slide show.

<img src="https://res.cloudinary.com/pancake/image/upload/v1501867934/Screen_Shot_2017-08-04_at_10.31.45_AM_l7urvw.png">
