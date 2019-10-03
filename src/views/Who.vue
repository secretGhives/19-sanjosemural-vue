<template>
	<section class="who_are_you sec" v-on:mousemove="presentation">
		<div role="presentation" class="left-triangle presentation"></div>

		<div class="content flexbox">
			<div class="flex left">
				<img src="@/assets/images/left.svg" class="image no-lightense" alt="abraxas team">
			</div>

			<div class="flex right">
				<h1 class="title">{{$t("page.who.title")}}</h1>
				<p>{{$t("page.who.p_1")}}</p>
				<p>{{$t("page.who.p_2")}}</p>
			</div>
		</div>
	</section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'who',
  components: {
    // HelloWorld
  },
  data: () => ({
		//
  }),
  methods: {
    presentation: function(event) {
			let peephole = document.querySelector('[role="presentation"]');
			peephole.style.left = event.pageX + 'px';
			peephole.style.top = event.pageY + 'px';
			peephole.style.transform = `scale(5) rotate(${event.pageX / 3}deg)`;
			// peephole.style.transform = `translate(${e.clientX}, ${e.clientY})`;
		}
  },
  computed: {
    email() {
      return this.$store.state.email
    },
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.who_are_you {
	overflow: hidden;
	// display: none;
	// opacity: 0;
	// color: $color-deep-purple_50;

	> .presentation {
		transform: scale(5) translate(-13%, 13%) rotate(-12deg);
	}

	.image {
		mix-blend-mode: difference;
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.left {
		position: fixed;
		top: 0; bottom: 0;
		left: 0; right: 0;
		opacity: 0.1;
		@media (min-width: 1024px) {
			position: initial;
			flex: 1 1 auto;
			margin-right: 3rem;
			opacity: 0.3;
		}
	}

	.right {
		flex: 2;
		flex-direction: column;
		align-items: flex-start;
		// margin-left: 2rem;
		mix-blend-mode: color-burn;
		color: $color-light-blue_500;

		p {
			@media (min-width: 1024px) {
				max-width: 600px;
			}
		}
	}

	.title {
		color: $color-amber_500;
		font-family: 'bajernregular';
	}

}
</style>
