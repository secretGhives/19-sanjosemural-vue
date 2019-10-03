<template>
  <div :class="lang">
    <!-- <pre>{{language[lang]}}</pre> -->
    <a v-for="(item,key) in language" :key="key" role="button" :class="key" @click="changeLang(key)">{{item}}</a>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data() {
    return {
      // lang: this.$i18n.locale,
      language:{
        "en":"EN",
        "es":"ES"
      }
    };
  },
  mounted() {
    this.$i18n.locale = window.localStorage.getItem("lang") || this.$i18n.locale;
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      window.localStorage.setItem("lang", lang);
      // window.location.reload();
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

  .language {
    text-align: center;
    font-size: 1.2rem;
    margin: 0.2em 0.3em 0.2em 0.6em;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      margin: 0.6em 0;
    }
    a {
      display: inline-block;
      padding: 0.2em;
      margin: 0.2em;
      border-radius: 3px;
      line-height: 1;
      cursor: pointer;
    }
    &.es > .es { border: 1px solid }
    &.en > .en { border: 1px solid }
  }
</style>