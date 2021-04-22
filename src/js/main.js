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
    services: [
      {
        img: './assets/img/avada-movers-serviceonephoto-final.jpg',
        title: 'Two Man Teams',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        btn: 'read more',
        link: '#',
      },
      {
        img: './assets/img/avada-movers-servicetwophoto-final.jpg',
        title: 'We Do All The Lifting',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        btn: 'read more',
        link: '#',
      },
      {
        img: './assets/img/avada-movers-servicethreephoto-final.jpg',
        title: 'Coast To Coast',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        btn: 'read more',
        link: '#',
      },
    ]
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
