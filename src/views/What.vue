<template>
	<section class="what_do_you_offer sec" v-on:mousemove="presentation">
		<div role="presentation" class="circle presentation"></div>

		<div class="content flexbox">
			<div class="left flex">
				<h1 class="title">{{$t("page.what.title")}}</h1>
				<p>{{$t("page.what.p_1")}}</p>
				<ul class="servicelist">
					<li>{{$t("page.what.services.service_1")}}</li>
					<li>{{$t("page.what.services.service_2")}}</li>
					<li>{{$t("page.what.services.service_3")}}</li>
					<li>{{$t("page.what.services.service_4")}}</li>
					<li>{{$t("page.what.services.service_5")}}</li>
					<li>{{$t("page.what.services.service_6")}}</li>
					<li>{{$t("page.what.services.service_7")}}</li>
				</ul>
				<p>{{$t("page.what.p_2")}}</p>
			</div>

			<div class="right flex">
				<img src="@/assets/images/right.svg" class="no-lightense image" alt="abraxas capabilities">
			</div>
		</div>
	</section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'what',
  methods: {
    presentation: function(event) {
		let peephole = document.querySelector('[role="presentation"]');
		peephole.style.left = event.pageX + 'px';
		peephole.style.top = event.pageY + 'px';
		// peephole.style.transform = `translate(${e.clientX}, ${e.clientY})`;
		}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

/* WHAT DO YOU OFFER */
.what_do_you_offer {
	overflow: hidden;
	// background: $color-purple_500;
	background: #faf7fa;
	// display: none;
	// opacity: 0;

	> .presentation {
		transform: scale(3) translate(-30%, 0%) rotate(0deg);
		animation: scale 7s infinite;
		mix-blend-mode: color;
	}

	.image {
		mix-blend-mode: difference;
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.left {
		flex: 2;
		flex-direction: column;
		align-items: flex-start;
		// margin-left: 2rem;
		color: $color-purple_900;
	}

	.right {
		position: fixed;
		top: 0; bottom: 0;
		left: 0; right: 0;
		opacity: 0.1;
		@media (min-width: 1024px) {
			position: initial;
			flex: 1 1 auto;
			margin-left: 3rem;
			opacity: 0.3;
		}
	}

	.title {
		font-family: 'bajernregular';
		color: #006cba;
	}

	ul.servicelist {
		color: #006cba;
		width: 100%;
		@media (min-width: 768px) {
			font-size: 150%;
		}
		li { font-weight: 600; }
	}
}
</style>
