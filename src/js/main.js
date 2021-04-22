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
    services: [
      {
        img: './assets/img/avada-movers-serviceonephoto-final.jpg',
        title: 'Two Man Teams',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        btn: 'read more',
        link: '',
      },
      {
        img: './assets/img/avada-movers-servicetwophoto-final.jpg',
        title: 'We Do All The Lifting',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        btn: 'read more',
        link: '',
      },
      {
        img: './assets/img/avada-movers-servicethreephoto-final.jpg',
        title: 'Coast To Coast',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        btn: 'read more',
        link: '',
      },
    ],
    testimonials: [
      {
        img: './assets/img/avada-movers-johndoe-final.jpg',
        name: 'John Doe',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”',
      },
      {
        img: './assets/img/avada-movers-janedoe-final.jpg',
        name: 'Jane Doe',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”',
      },
      {
        img: './assets/img/avada-movers-johnsmith-final.jpg',
        name: 'John Smith',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”',
      },
    ],
    avadas: [
      {
        name: 'home',
        link: '',
      },
      {
        name: 'rates',
        link: '',
      },
      {
        name: 'testimonials',
        link: '',
      },
      {
        name: 'blog',
        link: '',
      },
      {
        name: 'free quote',
        link: '',
      },
    ],
    recents: [
      {
        name: 'heading out to college?',
        link: '',
      },
      {
        name: 'moving your busiuness?',
      },
      {
        name: 'outstanding quality',
        link: '',
      },
      {
        name: 'cost of moving',
        link: '',
      },
      {
        name: 'best moving tips',
        link: '',
      },
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
