Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    socialIcons: [
      'facebook-f',
      'twitter',
      'instagram',
      'youtube'
    ],
    headerLinks: [
      'home',
      'rates',
      'testimonials',
      'faq',
      'blog',
      'contact',
      'free quote',
    ],
  }
})

// METODO VUE PER LA RICHIESTA DI API
// axios
// .get('https://flynn.boolean.careers/exercises/api/random/boolean')
// .then(function (response) {
//   const result = response.data;
// })
// .catch((error) => {
//   console.log(error);
// });
