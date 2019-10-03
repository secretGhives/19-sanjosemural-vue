<template>
  <section class="what_have_you_done sec" v-on:mousemove="presentation">
    <div role="presentation" class="chevron presentation"></div>

    <div class="content">
      <h1 class="title">{{$t("page.where.title")}}</h1>
      <p>{{$t("page.where.p_1")}}</p>

      <!-- Photo Grid -->
      <ul class="photo-grid">
        <li v-for="(instagram, index) in instData" :key="index">
          <img class="zoomable" alt="instagram image"
            :src="instagram.images.low_resolution.url"
            :data-original="instagram.images.standard_resolution.url">
        </li>
      </ul>

      <!-- <ul class="photo-grid">
        <li>
          <img src="@/assets/images/murals/12.jpg" data-original="@/assets/images/murals/12.jpg" class="zoomable" alt="mural example">
        </li>
        <li>
          <img src="@/assets/images/murals/18.jpg" class="zoomable" alt="mural example">
        </li>
        <li>
          <img src="@/assets/images/murals/11.jpg" class="zoomable" alt="mural example">
        </li>
        <li>
          <img src="@/assets/images/murals/15.jpg" class="zoomable" alt="mural example">
        </li>
        <li>
          <img src="@/assets/images/murals/19.jpg" class="zoomable" alt="mural example">
        </li>
        <li>
          <img src="@/assets/images/murals/21.jpg" class="zoomable" alt="mural example">
        </li>
        <li>
          <img src="@/assets/images/murals/22.jpg" class="zoomable" alt="mural example">
        </li>
        <li>
          <img src="@/assets/images/murals/23.jpg" class="zoomable" alt="mural example">
        </li>
        <li>
          <img src="@/assets/images/murals/28.jpg" class="zoomable" alt="mural example">
        </li>
        <li>
          <img src="@/assets/images/murals/29.jpg" class="zoomable" alt="mural example">
        </li>
        <li>
          <img src="@/assets/images/murals/34.jpg" class="zoomable" alt="mural example">
        </li>
      </ul> -->

      <p>{{$t("page.where.p_2")}} <a :href="instagurl" target="_blank" rel="noreferrer">{{company}}</a>.</p>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Zooming from 'zooming'

export default {
  name: 'where',
  components: {
    // HelloWorld
  },
  data: () => ({
    //userid: "4808193211",
    userid: "self",
    clientid: "588ac7c8c0834d59aa18061ad84a6708",
    token: "6722369020.588ac7c.f74bc579e0224719b543ac98e14109f0",
    limit: "12",
    url: "https://api.instagram.com/v1/users/",
    instData: []
  }),
  methods: {
    presentation: function(event) {
      let peephole = document.querySelector('[role="presentation"]');
      peephole.style.left = event.pageX + 'px';
      peephole.style.top = event.pageY + 'px';
      // peephole.style.transform = `translate(${e.clientX}, ${e.clientY})`;
    },
    getInstagrams() {
      fetch(this.url + this.userid + '/media/recent/?access_token=' + this.token + '&count=' + this.limit)
      .then(response => response.json())
      .then(data => {
        // console.log(data.data)
        this.instData = data.data;
      })
      .catch( error => { console.error(error); })
      .finally(() => {
        const zooming = new Zooming({
          transitionDuration: 0.1
        });
        zooming.listen('.zoomable');
      });
    }
  },
  computed: {
    email() {
      return this.$store.state.email
    },
    company() {
      return this.$store.state.company
    },
    instagurl() {
      return this.$store.state.instagurl
    }
  },
  mounted() {
    // console.log('MOUNTED');
    this.getInstagrams();

    // const zooming = new Zooming({
    //   transitionDuration: 0.1
    // });
    // zooming.listen('.zoomable');
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

/* WHAT HAVE YOU DONE */
.what_have_you_done {
  overflow: hidden;
  // background: $color-deep-purple_200;
  background: #f1edf9;
  // display: none;
  // opacity: 0;

  > .presentation {
    transform: scale(9) translate(0%, 0%) rotate(33deg);
    mix-blend-mode: hue;
  }

  .title {
    font-family: 'bajernregular';
    color: #d32f2f;
  }

  ul.photo-grid {
    column-count: 2;
    // column-gap: 1rem;
		@media (min-width: 768px) {
			column-count: 4;
    }

    > li {
      list-style: none;
      text-decoration: none;
    }

    img {
      border-radius: 5px;
      width: 100%;
      height: auto;
    }
  }

}

</style>
