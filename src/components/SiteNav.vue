<template>
	<div class="site-nav">

		<!-- LOGO -->
		<router-link to="/">
			<img src="@/assets/images/logo_rooster-head.svg" class="logo no-lightense" alt="Rooster Logo">
		</router-link>

		<ul class="menu">
			<li><router-link to="/who" class="under-link nav next">{{$t("component.sitenav.who")}}</router-link></li>
			<li><router-link to="/what" class="under-link nav next">{{$t("component.sitenav.what")}}</router-link></li>
			<li><router-link to="/where" class="under-link nav prev">{{$t("component.sitenav.where")}}</router-link></li>
			<li><router-link to="/how" class="under-link">{{$t("component.sitenav.how")}}</router-link></li>
		</ul>

		<div class="spacer"></div>

		<div class="social">
			<a :href="'mailto:' + email" target="_blank" rel="noreferrer">
				<img src="@/assets/icons/icon-email.svg" alt="Email" class="no-lightense">
			</a>
			<a :href="instagram" target="_blank" rel="noreferrer">
				<img src="@/assets/icons/icon-instagram.svg" alt="Instagram" class="no-lightense">
			</a>
			<a href="#" target="_blank">
				<img src="@/assets/icons/icon-twitter.svg" alt="Twitter" class="no-lightense">
			</a>
		</div>

		<LangSwitcher class="language"/>
	</div>
</template>

<script>
import LangSwitcher from '@/components/LangSwitcher'

export default {
	name: 'SiteNav',
	components: {
		LangSwitcher
	},
  computed: {
    email() {
      return this.$store.state.email
		},
    instagram() {
      return this.$store.state.instagurl
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.nav-container {
  z-index: 9;
  position: fixed;
  bottom: 0; right: 0; left: 0;
  mix-blend-mode: luminosity;
  background-color: #ffffffb0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (min-width: 768px) {
		flex-direction: column;
		bottom: 1em; right: 1em; left: auto;
	}

	// LOGO
	> a {
		line-height: 0;
	}
	> a .logo {
		width: 33px;
		margin: 0.2em 0.6em 0.2em 0.3em;
		@media (min-width: 768px) {
			width: 69px;
			margin: 0.6em;
		}
	}

	// MENU
	> ul.menu {
		display: flex;
		flex: 1 1 auto;
		list-style-type: none;
		margin: 0;
		background-color: inherit;
		@media (min-width: 768px) {
			flex-direction: column;
			margin: 1em 1em 0;
		}
	}
	> ul.menu > li {
		padding: 0 0.3em;
		margin: 0;
		flex: 1 1 auto;
		text-align: center;
		@media (min-width: 768px) {
			margin-bottom: 0.3em;
			text-align: left;
		}
	}

	> ul.menu .under-link {
		font-size: 1.7rem;
		position: relative;
		display: inline-block;
		@media (min-width: 768px) { font-size: 1.8rem; }
		&:before {
			content:'';
			position: absolute;
			bottom: 0; right: 0; left: auto;
			background: $color-deep-purple_a200;
			height: 2px;
			width: 0%;
			transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
		}
		&:hover,
		&.router-link-exact-active {
			&:before {
				width: 100%;
				right: auto;
				left: 0;
			}
		}
	}

	// SOCIAL
	.social {
		display: none;
		@media (min-width: 768px) {
			// display: flex;
			display: none;
		}
		flex-direction: row;
		margin: 1em 0;
		> a {
			// transition: all  0.3s;
			line-height: 0;
			text-align: center;
			opacity: 0.9;
			margin: 0.2em;
			&:hover, &:focus {
				transform: scale(1.1);
			}
			&:last-child {display: none;}
		}
		img { width: 27px; }
	}

}
</style>
