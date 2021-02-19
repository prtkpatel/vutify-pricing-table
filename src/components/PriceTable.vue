<template>
<v-hover>
<template v-slot:default="{ hover }">
<div>
<span v-if="mostpopular" class="mostPopular">
  Most Popular
</span>
<div class="priceTableContainer">
  <div :class="`elevation-${hover ? 4 : 1}`" class="priceTable d-flex flex-column   justify-space-between">
    <div class="upperpart">
        <div class="paylable mb-1">You Pay</div>
        <div class="price">AED {{price}} <span>/month</span> </div>
        <div class="tax">For 12 months + 5% VAT <span>/month</span> </div>
        <v-divider class="my-3"></v-divider>
        <div class="payget">You Get</div>
        <div class="planname">Power Plan {{powerplan}}</div>
        <v-divider class="my-3"></v-divider>
        <div class="plandetail">
          <div class="planrow"><span class="oldPrice grey--text lighten-3 text-decoration-line-through">{{oldnationaldata}}</span>  <b class="mr-5">{{nationaldata}} GB</b>National Data </div>
          <div class="planrow"><b class="mr-5">{{fleximinutes}}</b>Flexi minutes </div>
        </div>
        <v-divider class="my-3"></v-divider>
        <div class="planterms">
          <div class="term mb-1" v-for="row in planrow" :key="row"> <v-icon x-small right class="ml-0">mdi-check</v-icon> {{row}}</div>
        </div>
    </div>
    <div class="footerpart">
      <div class="limitedOfferSection" v-if="limtedOffer == true">
        <v-chip
          class="font-weight-bold"
          :style="{background: $vuetify.theme.themes[theme].limitedTimeOffer}"
          pill
          text-color="white"
          x-small>
          Limited time offer
        </v-chip>
        <div class="limitedTimeOfferText">The Entertainer on us for 12 months</div>
      </div>
      <v-divider class="my-3"></v-divider>
      <div class="footer align-center d-flex justify-space-between">
        <div class="whatyouget black--text text-decoration-underline">What you get</div>
        <v-btn  elevation="1" text color="#d134b4" class="text-capitalize btnSelect px-7">Select</v-btn>

      </div>
    </div>
  </div>
</div>

</div>

</template>
</v-hover>
</template>


<script>
export default {
  name: 'PriceTable',
  props : [
   'price',
   'powerplan',
   'nationaldata',
   'oldnationaldata',
   'fleximinutes',
   'limtedOffer',
   'mostpopular',
   'planrow'
   ],
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
 }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  height: 100vh;
  margin: 0;
  background: #222;
  font-family: 'Montserrat', sans-serif;
}

.mostPopular{background: #032059;
padding: 6px 20px;
margin-left: 30px;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
font-weight: bold;
font-size: 0.8rem;
    top: -35px;
    position:absolute;
color: #fff;}


.priceTable {
  max-width: 250px;
  padding: 5px 15px 15px 15px;
  border-radius:20px;
  border-width: 6px;
  border-style: solid;
  height:500px;
  border-image:
    linear-gradient(
      to bottom,
      #cc1eac,
      #576abc,
      #28a9cc
    )0 0 1  100%;
}
.paylable{
  color:#cc1eac;
}
.oldPrice{font-size:1rem;}
.payget{color:#28a8cb;}
.priceTableContainer{border-radius:20px;overflow:hidden;    height: 533px;}
.price{color:#cc1eac;font-weight:bold;font-size:1.2rem;margin-bottom:5px;}
.tax{color:#000; font-size:0.8rem;}
.planname{color:#28a8cb;font-weight:bold;font-size:1.2rem;}
.plandetail{color:#000;display:flex;flex-direction:column;}
.plandetail .planrow{font-size:0.8rem;}
.plandetail .planrow b{font-size:1.2rem;}
.planterms{color:#000;}
.planterms .term{color:#000;font-size:0.8rem;}
.footer .whatyouget{font-size:0.8rem}
.footer .btnSelect {background-color: #fff;padding: 10px 40px;border: none;color: #d134b4;box-shadow: 0px 0px 3px 0px #ccc;font-size: 13px;font-weight: bold;}
.limitedOfferSection{color:#000;}
.limitedOfferSection .limitedTimeOfferText{color:#000;font-size:0.8rem;margin-top:5px;margin-bottom:10px}
</style>
