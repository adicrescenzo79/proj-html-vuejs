Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    socialIcons: [
      {
        name: 'facebook-f',
        link: 'https://www.facebook.com/ThemeFusionAvada/',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/theme_fusion',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/themefusion/',
      },
      {
        name: 'youtube',
        link: 'https://www.youtube.com/channel/UC_C7uAOAH9RMzZs-CKCZ62w',
      },
    ],
    avadas: [
      {
        name: 'home',
        link: '#',
      },
      {
        name: 'rates',
        link: '#',
      },
      {
        name: 'testimonials',
        link: '#',
      },
      {
        name: 'blog',
        link: '#',
      },
      {
        name: 'free quote',
        link: '#',
      },
    ],
    services: [
      {
        img: './assets/img/avada-movers-serviceonephoto-final.jpg',
        title: 'Two Man Teams',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        btn: 'read more',
        link: '',
        class: 'animate__fadeInLeft'
      },
      {
        img: './assets/img/avada-movers-servicetwophoto-final.jpg',
        title: 'We Do All The Lifting',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        btn: 'read more',
        link: '',
        class: 'animate__fadeInTop'
      },
      {
        img: './assets/img/avada-movers-servicethreephoto-final.jpg',
        title: 'Coast To Coast',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        btn: 'read more',
        link: '',
        class: 'animate__fadeInRight'
      },
    ],
    testimonials: [
      {
        img: './assets/img/avada-movers-johndoe-final.jpg',
        name: 'John Doe',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”',
        class: 'animate__fadeInLeft'
      },
      {
        img: './assets/img/avada-movers-janedoe-final.jpg',
        name: 'Jane Doe',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”',
        class: 'animate__fadeInTop'
      },
      {
        img: './assets/img/avada-movers-johnsmith-final.jpg',
        name: 'John Smith',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”',
        class: 'animate__fadeInRight'
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
    copys: [
      {
        title: '© Copyright 2012 - 2021',
        name: '',
        link: '',
        class: 'line year',
      },
      {
        title: 'Avada Theme by ',
        name: 'ThemeFusion',
        link: 'https://theme-fusion.com/',
        class: 'line',
      },
      {
        title: 'All Rights Reserved',
        name: '',
        link: '',
        class: 'line',
      },
      {
        title: 'Powered by ',
        name: 'WordPress',
        link: 'https://wordpress.org/',
        class: 'no-line',
      },
    ],
    // navbarOn: false,
    menuDisplay: 'none',
    width: '',
  },
  created: function(){
    this.width = $(window).width();
    if (this.width > 991) {
      this.menuDisplay = 'flex';
    } else {
      this.menuDisplay = 'none';
    }
    $('.link').css('display', this.menuDisplay);
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      if (this.width <= 991) {
        this.menuDisplay = 'none';
      } else {
        this.menuDisplay = 'flex';
      }

      $('.link').css('display', this.menuDisplay);
    });
  },
  methods:{
    menu: function(){
      if (this.menuDisplay == 'flex') {
        $('.link').slideUp();
        this.menuDisplay = 'none';
      } else {
        $('.link').slideDown();
        this.menuDisplay = 'flex';
        $('.link').css('display', this.menuDisplay);
      }

    }
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
