<template>
  <section class="how_do_i_hire_you sec" v-on:mousemove="presentation">
    <!-- <div role="presentation" class="oval presentation"></div> -->
    <div role="presentation" class="hexagon presentation"></div>

    <div class="content">
      <h1 id="contact_title" class="title">{{$t("page.how.title")}}</h1>
      <p id="contact_welcome_msg" class="message">{{$t("page.how.p_1")}}</p>

      <!-- Customise the Thankyou Message People See when they submit the form: -->
      <h3 class="thankstitle" v-show="message">{{$t("page.how.thanks")}}</h3>

      <form id="gform" method="post" class="quote-form form-wrapper" action="https://script.google.com/macros/s/AKfycbwKLn8rnd5ovgru5FbUmAqJbfVte1HWqJDi9Bph_m5yeM2d0C8/exec" novalidate="true" v-show="!message">

        {{$t("page.how.form.hello")}},
        <br/>
        <br/>
        {{$t("page.how.form.would_like")}}
        <select class="select" name="where_will_the_mural_be_located">
          <option>{{$t("page.how.form.placement.indoor")}}</option>
          <option>{{$t("page.how.form.placement.outdoor")}}</option>
          <option>{{$t("page.how.form.placement.ceiling")}}</option>
          <option>{{$t("page.how.form.placement.floor")}}</option>
          <option>{{$t("page.how.form.placement.other")}}</option>
        </select>
        {{$t("page.how.form.which")}}
        <select class="select" name="what_type_of_surface">
          <option>{{$t("page.how.form.surfaces.concrete")}}</option>
          <option>{{$t("page.how.form.surfaces.cement")}}</option>
          <option>{{$t("page.how.form.surfaces.drywall")}}</option>
          <option>{{$t("page.how.form.surfaces.brick")}}</option>
          <option>{{$t("page.how.form.surfaces.wood")}}</option>
          <option>{{$t("page.how.form.surfaces.stucco")}}</option>
          <option>{{$t("page.how.form.surfaces.metal")}}</option>
          <option>{{$t("page.how.form.surfaces.other")}}</option>
        </select>
        {{$t("page.how.form.size_of")}}
        <input class="input" type="text" name="what_is_the_width_and_height_of_the_mural" placeholder="dimension"> {{$t("page.how.form.dimension")}}
        <select class="select" name="what_type_of_property">
          <option>{{$t("page.how.form.properties.residential")}}</option>
          <option>{{$t("page.how.form.properties.commercial")}}</option>
          <option>{{$t("page.how.form.properties.industrial")}}</option>
          <option>{{$t("page.how.form.properties.public")}}</option>
          <option>{{$t("page.how.form.properties.other")}}</option>
        </select>
        {{$t("page.how.form.property")}}.
        <select class="select" name="where_are_you_in_the_design_process">
          <option>{{$t("page.how.form.in_design.have_idea")}}</option>
          <option>{{$t("page.how.form.in_design.have_drawings")}}</option>
          <option>{{$t("page.how.form.in_design.have_sketches")}}</option>
          <option>{{$t("page.how.form.in_design.need_designer")}}</option>
          <option>{{$t("page.how.form.in_design.other")}}</option>
        </select>
        , {{$t("page.how.form.need_it_done")}}
        <select class="select" name="when_do_you_need_a_muralist">
          <option>{{$t("page.how.form.when.on_date")}}</option>
          <option>{{$t("page.how.form.when.in_days")}}</option>
          <option>{{$t("page.how.form.when.asap")}}</option>
          <option>{{$t("page.how.form.when.flexible")}}</option>
        </select>
        .
        <br/>
        <br/>
        {{$t("page.how.form.contact_at")}}
        <input class="input email" type="email" name="email" placeholder="email" required />.
        <br/>
        <br/>
        {{$t("page.how.form.thanks")}},
        <br/>
        <input class="input" type="text" name="name" placeholder="name" required />

        <input id="honeypot" type="text" name="honeypot" value="" hidden />
        <input id="language" type="text" name="language" :value="locale == 'en' ? 'English' : 'Spanish'" hidden />

        <br/>
        <br/>
        <button id="btnSubmit" class="btn -default" type="submit">{{$t("page.how.form.button")}}</button>
      </form>
    </div>

    <!-- SECTION DETAILS -->
    <div class="what_about_pricing_and_other_details content">
      <h2 class="title">{{$t("page.how.details.title")}}</h2>
      <p>{{$t("page.how.details.p_1")}}</p>

      <ol>
        <li>
          <strong>{{$t("page.how.details.item_1_title")}}</strong>
          <p>{{$t("page.how.details.item_1_p")}}</p>
        </li>
        <li>
          <strong>{{$t("page.how.details.item_2_title")}}</strong>
          <p>{{$t("page.how.details.item_2_p")}}</p>
        </li>
        <li>
          <strong>{{$t("page.how.details.item_3_title")}}</strong>
          <p>{{$t("page.how.details.item_3_pa")}}
            <span class='percent'>10</span> {{$t("page.how.details.item_3_pb")}}</p>
        </li>
        <li>
          <strong>{{$t("page.how.details.item_4_title")}}</strong>
          <p>{{$t("page.how.details.item_4_p")}}</p>
        </li>
        <li>
          <strong>{{$t("page.how.details.item_5_title")}}</strong>
          <p>{{$t("page.how.details.item_5_pa")}}
            <span class='percent'>40</span> {{$t("page.how.details.item_5_pb")}}</p>
        </li>
        <li>
          <strong>{{$t("page.how.details.item_6_title")}}</strong>
          <p>{{$t("page.how.details.item_6_p")}}</p>
        </li>
        <li>
          <strong>{{$t("page.how.details.item_7_title")}}</strong>
          <p>{{$t("page.how.details.item_7_pa")}} <span class='percent'>50</span> {{$t("page.how.details.item_7_pb")}}</p>
        </li>
      </ol>

      <h3 class="pricetitle">{{$t("page.how.pricing.title")}}</h3>
      <p>{{$t("page.how.pricing.p_1")}}</p>

      <table class="pricetable">
        <thead>
          <tr>
            <th>{{$t("page.how.pricing.size")}}</th>
            <th>{{$t("page.how.pricing.cost")}}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{$t("page.how.pricing.under")}} 36 {{$t("page.how.pricing.meters")}}²</td>
            <td>$2,000
              <small>{{$t("page.how.pricing.minimum")}}</small>
            </td>
          </tr>

          <tr>
            <td>36-72 {{$t("page.how.pricing.meters")}}²</td>
            <td>$39/m²</td>
          </tr>

          <tr>
            <td>72-120 {{$t("page.how.pricing.meters")}}²</td>
            <td>$36/m²</td>
          </tr>

          <tr>
            <td>120-180 {{$t("page.how.pricing.meters")}}²</td>
            <td>$33/m²</td>
          </tr>

          <tr>
            <td>180-270 {{$t("page.how.pricing.meters")}}²</td>
            <td>$30/m²</td>
          </tr>

          <tr>
            <td>{{$t("page.how.pricing.over")}} 270 {{$t("page.how.pricing.meters")}}²</td>
            <td>$27/m²</td>
          </tr>
        </tbody>
      </table>

      <p>{{$t("page.how.pricing.p_2")}} <a :href="'mailto:' + email" target="_blank" rel="noreferrer">{{ email }}</a></p>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'how',
  components: {
    // HelloWorld
  },
  data: () => ({
    message: false
  }),
  methods: {
    presentation: function(event) {
      let peephole = document.querySelector('[role="presentation"]');
      peephole.style.left = event.pageX + 'px';
      peephole.style.top = event.pageY + 'px';
    },

    validEmail(email) { // see:
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    },

    validateHuman(honeypot) {
      if (honeypot) {  //if hidden form filled up
        // console.log("Robot Detected!");
        return true;
      } else {
        // console.log("Welcome Human!");
      }
    },

    // get all data in form and return object
    getFormData() {
      var form = document.getElementById("gform");
      var elements = form.elements; // all form elements
      var fields = Object.keys(elements).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });
      var data = {};
      fields.forEach(function(k){
        data[k] = elements[k].value;
        var str = ""; // declare empty string outside of loop to allow
                      // it to be appended to for each item in the loop
        if(elements[k].type === "checkbox"){ // special case for Edge's html collection
          str = str + elements[k].checked + ", "; // take the string and append
                                                  // the current checked value to
                                                  // the end of it, along with
                                                  // a comma and a space
          data[k] = str.slice(0, -2); // remove the last comma and space
                                      // from the  string to make the output
                                      // prettier in the spreadsheet
        }else if(elements[k].length){
          for(var i = 0; i < elements[k].length; i++){
            if(elements[k].item(i).checked){
              str = str + elements[k].item(i).value + ", "; // same as above
              data[k] = str.slice(0, -2);
            }
          }
        }
      });

      // add form-specific values into the data
      data.formDataNameOrder = JSON.stringify(fields);
      data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

      // console.log(data);
      return data;
    },

    handleFormSubmit(event) {
      event.preventDefault();           // we are submitting via xhr below
      var data = this.getFormData();         // get the values submitted in the form
      var self = this;

      /* OPTION: Remove this comment to enable SPAM prevention, see README.md */
      if (this.validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
        return false;
      }

      if( !this.validEmail(data.email) ) {   // if email is not valid show error
        document.querySelector('.email').classList.add('error');
        // alert('Invalid Email');
        return false;
      } else {
        document.querySelector('.email').classList.remove('error');
        document.getElementById('btnSubmit').disabled = true;
        document.getElementById('btnSubmit').classList.add('-disabled');
        document.getElementById('btnSubmit').innerHTML = "Sending..";
        var url = event.target.action;  //
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            // Hide form, show thank you notice
            self.message = true;
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&')
        xhr.send(encoded);
      }
    },

    loaded() {
      // console.log('contact form submission handler loaded successfully');
      // bind to the submit event of our form
      // console.log('Loaded!!')
      var form = document.getElementById('gform');
      form.addEventListener("submit", this.handleFormSubmit, false);
    }
  },
  computed: {
    email() {
      return this.$store.state.email
    },
    locale() {
      return this.$i18n.locale
    }
  },
  mounted(){
    this.loaded()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

/* HOW DO I HIRE YOU */
.how_do_i_hire_you {
  overflow: hidden;
  // background: $color-orange_100;
  // display: none;
  // opacity: 0;

  > .presentation {
    transform: scale(9) translate(0%, 0%) rotate(50deg);
    &.hexagon {
      background: $color-light-blue_100;
    }
  }

  .content {
    // color: $color-magenta;
    color: $color-black;
    mix-blend-mode: color-burn;
  }

  .title {
    font-family: 'bajernregular';
    color: $color-red_700;
  }

  .pricetitle {
    margin-top: 3rem;
  }

  .thankstitle {
    margin-top: 3em;
    margin-bottom: 0;
  }

  form {
    font-size: 2.2rem;
    margin-top: 3em;

    .error { border-bottom: 3px solid red; }
  }

}
</style>
