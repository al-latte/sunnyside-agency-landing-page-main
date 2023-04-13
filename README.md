# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Todos](#todos)
- [Author](#author)

## Overview

I wanted to build out this challenge to practise CSSC Grid and to challenge myself with reposive grid layout and responsive nagivation.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop Version](images/sunnyside%20landing%20page%20desktop.png)
![Mobile Version](images/sunnyside%20landing%20page%20mobile.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/al-latte/sunnyside-agency-landing-page-main)
- Live Site URL: [GitHub Pages / live](https://al-latte.github.io/sunnyside-agency-landing-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt a few new little things during this project:

- The javascript classList.toggle() funtion: returns true or false, used to toggle the mobile menu.
- Fairly new CSS functions min(), max(), clamp(): for sizing elements, used it for the responsiveness of the page.
- How to use the HTML5 picture element.
- Using CSS object-fit property to make an image take up all availible space.

```html
<section class="grid-2-1fr">
	<picture id="egg">
		<source
			media="(min-width:650px)"
			srcset="./images/desktop/image-transform.jpg"
		/>
		<source
			media="(min-width:465px)"
			srcset="./images/mobile/image-transform.jpg"
		/>
		<img width="100%" src="./images/mobile/image-transform.jpg" alt="egg"">
	</picture>
</section>
```

```css
@media (min-width: 768px) {
	.grid-2-1fr {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	#egg img,
	#glass img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.transform {
		grid-area: 1/ 1/ 2/ 2;
	}
}
```

```js
hamburger.addEventListener("click", () => {
	mobileNav.classList.toggle("isDisplayed");
});
```

### Todos

- Animate arrow in hero
- Refactor CSS and HTML class names
- CSS Variables for ease
- minor fixes; icons on hover, learn more underline, media queries

## Author
