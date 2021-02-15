<template lang="pug">
	section.side-bar
		.side-bar__container
			.side-bar__header
				router-link(to="/").side-bar__logo
					svg(class='side-bar__logo-img' viewBox="0 0 50.001 50.001" preserveAspectRatio="none")
						use(xlink:href=`../../images/icons/logo.svg#logo`)
				.side-bar__lenguages
					.side-bar__buttons
						.side-bar__btn.buttons__ru.active ru
						.side-bar__btn.buttons__en en
			.side-bar__title Минский #[br] радиотехнический #[br] колледж
			ul.side-bar__list.links-list
				li.links-list__item
					router-link(to="/visualizationTask").links-list__link
						.links-list__icon
							svg(class='links-list__icon-border-img links-list__gear-border' viewBox="0 0 170.001 173.001" preserveAspectRatio="none")
								use(xlink:href=`../../images/icons/gearBorder.svg#gearBorder`)
							svg(class='links-list__icon-gear-img links-list__gear_pink' viewBox="0 0 170.001 173.001" preserveAspectRatio="none")
								use(xlink:href=`../../images/icons/gear.svg#gear`)
						.links-list__item-name Ресурсный центр
				li.links-list__item
					a(href="#").links-list__link
						.links-list__icon
							svg(class='links-list__itschool-comp' viewBox="0 0 211.001 161.001" preserveAspectRatio="none")
								use(xlink:href=`../../images/icons/itschoolComp.svg#itschoolComp`)
							svg(class='links-list__itschool_pink' viewBox="0 0 211.001 161.001" preserveAspectRatio="none")
								use(xlink:href=`../../images/icons/itschoolSquere.svg#itschoolSquere`)
						.links-list__item-name IT школа МРК
				li.links-list__item
					a(href="#").links-list__link
						.links-list__icon
							svg(class='links-list__courses' viewBox="0 0 80 81" preserveAspectRatio="none")
								use(xlink:href=`../../images/icons/onlineCourses.svg#onlineCourses`)
							svg(class='links-list__courses_pink' viewBox="0 0 80 81" preserveAspectRatio="none")
								use(xlink:href=`../../images/icons/onlineCoursesPink.svg#onlineCoursesPink`)
						.links-list__item-name Учебные курсы
			ul.side-bar__socials-list
				li.socials-list__item
					a(href="#").socials-list__link
						svg(class='socials-list__icon' viewBox="0 0 512.001 512.001" preserveAspectRatio="none")
							use(xlink:href=`../../images/icons/twitter.svg#twitter`)
				li.socials-list__item
					a(href="#").socials-list__link
						svg(class='socials-list__icon' viewBox="0 0 512.001 512.001" preserveAspectRatio="none")
							use(xlink:href=`../../images/icons/facebook.svg#facebook`)
				li.socials-list__item
					a(href="#").socials-list__link
						svg(class='socials-list__icon' viewBox="0 0 512.001 512.001" preserveAspectRatio="none")
							use(xlink:href=`../../images/icons/instagram.svg#instagram`)
		.side-bar__decor
			.side-bar__vert-text
				p M
				p P
				p K
</template>

<script>
export default {};
</script>

<style lang="scss" scoped src="./sideBar.scss"></style>
