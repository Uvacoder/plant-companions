import DefaultLayout from '~/layouts/Default.vue'
import AudioPlayer from './components/AudioPlayer.vue'
import Commerce from "@chec/commerce.js";
import VueStorage from 'vuestorage'
import VueFormulate from '@braid/vue-formulate'
// import FormulateVSelectPlugin from '@cone2875/vue-formulate-select'
// import 'vue-select/dist/vue-select.css';

export default function (Vue, { router, head, isClient }) {
  
   Vue.mixin({
     beforeCreate() {
       this.$commerce = new Commerce(process.env.GRIDSOME_COMMERCEJS_PUBLICKEY)
     }
   })
  
  Vue.component('audio-player', AudioPlayer);
	Vue.use(VueStorage)
  Vue.use(VueFormulate)

  if(process.isClient) {
		const VueCarousel = require('vue-carousel').default;
		Vue.use(VueCarousel);
    // Vue.use(VueFormulate, {
    //   plugins: [ FormulateVSelectPlugin ]
    // })
	}

  Vue.component('Layout', DefaultLayout)

}