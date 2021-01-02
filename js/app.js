







let header = gsap.timeline({
	scrollTrigger: {
		trigger: ".header",   // pin the trigger element while active
		start: "top center",




	}
});

if (window.innerWidth > 737) {
	header.from(".header__woman", { duration: 1.3, ease: "power4.out", opacity: 0, x: 150 }, "+=0.2")

		.from(".header__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -150 }, "-=0.6")
		.from(".header__text", { duration: 1, ease: "power4.out", opacity: 0, x: -150 }, "-=0.8")
		.from(".header__btn", { duration: 0.9, ease: "power4.out", opacity: 0, x: -100 }, "-=0.6")
		.from(".header__dop", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
} else {
	header

		.from(".header__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".header__text", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
		.from(".header__woman", { duration: 1.3, ease: "power4.out", opacity: 0, y: 50 }, "-=0.4")
		.from(".header__btn", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".header__dop", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
}

let about = gsap.timeline({
	scrollTrigger: {
		trigger: ".about",   // pin the trigger element while active
		start: "top center",




	}
});

if (window.innerWidth > 737) {
	about.from(".about__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -150 }, "+=0.2")
		.from(".about__subtitle", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".about__text", { duration: 1.3, ease: "power4.out", opacity: 0 }, "-=0.4")
		.from(".about__img", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
} else {
	about.from(".about__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")
		.from(".about__subtitle", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".about__img", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".about__text", { duration: 1, ease: "power4.out", opacity: 0 }, "-=0.4")

}


let student = gsap.timeline({
	scrollTrigger: {
		trigger: ".student",   // pin the trigger element while active
		start: "top center",




	}
});

if (window.innerWidth > 737) {
	student.from(".student__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -150 }, "+=0.2")
		.from(".student__subtitle", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".inner-student__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner-student__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner-student__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".rev__inner-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 120 }, "-=0.6")
		.from(".rev__inner-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 120 }, "-=0.6")
		.from(".rev__inner-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 120 }, "-=0.6")
		.from(".rev__inner-item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 120 }, "-=0.6")
		.from(".student__btn", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")



} else {
	student.from(".student__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -150 }, "+=0.2")
		.from(".student__subtitle", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".inner-student__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner-student__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner-student__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")


}


let speakers = gsap.timeline({
	scrollTrigger: {
		trigger: ".speakers",   // pin the trigger element while active
		start: "top center",




	}
});


if (window.innerWidth > 737) {
	speakers.from(".speakers__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -150 }, "+=0.2")

		.from(".inner__speakers-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner__speakers-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner__speakers-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner__speakers-item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner__speakers-item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner__speakers-item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")





} else {
	speakers.from(".speakers__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "+=0.2")

		.from(".inner__speakers-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner__speakers-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner__speakers-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner__speakers-item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner__speakers-item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")
		.from(".inner__speakers-item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "-=0.6")


}


let footer = gsap.timeline({
	scrollTrigger: {
		trigger: ".footer",   // pin the trigger element while active
		start: "top bottom"

	}
});


if (window.innerWidth > 737) {
	footer.from(".footer__logo", { duration: 1.2, ease: "power4.out", opacity: 0, x: -50 }, "+=0.2")

		.from(".footer__text", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")



} else {


}