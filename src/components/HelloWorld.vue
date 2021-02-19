<template>
  <v-container class="pa-lg-10 pa-md-10 pa-xs-0 pa-sm-0">

    <swiper :options="swiperOptions" class="pt-8">
         <swiper-slide v-for="priceItem in priceItems" :key="priceItem.id">
           <PriceTable :price=priceItem.price :powerplan=priceItem.powerplan :oldnationaldata=priceItem.oldnationaldata :nationaldata=priceItem.nationaldata :fleximinutes=priceItem.fleximinutes
           :limtedOffer=priceItem.limtedOffer :planrow=priceItem.planrow :mostpopular=priceItem.mostpopular />
         </swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import PriceTable from './PriceTable'
  export default {
    name: 'HelloWorld',
    components: {
      PriceTable,
      Swiper,
      SwiperSlide
    },
     directives: {
       swiper: directive
     },
    data: () => ({
      swiperOptions : {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1024: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
        }
      },
      priceItems: [
        { id:'1',price: '125',powerplan: '125',nationaldata: '4',fleximinutes:'100',limtedOffer:false,
          planrow:['No activation fee. Save AED 125',
              '4 GB free data on WiFi UAE']
        },
        { id:'2',price: '200',powerplan: '200',nationaldata: '26',oldnationaldata: '13',fleximinutes:'400',limtedOffer:true,
          planrow:[
              'No activation fee. Save AED 125',
              '15 GB free data on WiFi UAE',
              'Carry over data to next month'
          ]
        },
        { id:'3',price: '300',powerplan: '300',nationaldata: '50',oldnationaldata: '25',mostpopular:'true',fleximinutes:'1020',limtedOffer:true,
          planrow:[
              'No activation fee. Save AED 125',
              '25 GB free data on WiFi UAE',
              'Carry over data to next month',
              'Amazon Prime on us',
              'Free Internet Calling Pack'
          ]
        },
        { id:'4',price: '500',powerplan: '500',nationaldata: '100',oldnationaldata: '50',fleximinutes:'1500',limtedOffer:true,
          planrow:[
              'No activation fee. Save AED 125',
              '25 GB free data on WiFi UAE',
              'Carry over data to next month',
              'Amazon Prime on us',
              'Free Internet Calling Pack',
              'Roaming 2 GB'
          ]
        },
        { id:'4',price: '1000',powerplan: '1000',nationaldata: 'Unlimited',oldnationaldata: '120',fleximinutes:'Unlimited',limtedOffer:true,
          planrow:[
              'No activation fee. Save AED 125',
              '120 GB free data on WiFi UAE',
              'Carry over data to next month',
              'Amazon Prime on us',
              'Free Internet Calling Pack',
              'Roaming 5 GB'
          ]
        },
        { id:'4',price: '1000',powerplan: '1000',nationaldata: 'Unlimited',oldnationaldata: '120',fleximinutes:'Unlimited',limtedOffer:true,
          planrow:[
              'No activation fee. Save AED 125',
              '120 GB free data on WiFi UAE',
              'Carry over data to next month',
              'Amazon Prime on us',
              'Free Internet Calling Pack',
              'Roaming 5 GB'
          ]
        }
      ]
    }),
  }
</script>
<style lang="scss" >
  .swiper-slide{
    min-height: 583px;

  }
  :root{
  --swiper-theme-color:#cc1ead;
  }
  .swiper-pagination-bullet{
      background: #cc1ead;
  }
</style>
