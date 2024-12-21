const app = {
  header_sticky: () => {
    console.log("Header sticky is active");
    // Hide header on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $("header").outerHeight();

    $(window).scroll(function (event) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    function hasScrolled() {
      var st = $(this).scrollTop();

      // Make scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta) return;

      // If scrolled down and past the navbar, add class .nav-up.
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $("header").removeClass("hdt-nav-down").addClass("hdt-nav-up");
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $("header").removeClass("hdt-nav-up").addClass("hdt-nav-down");
        }
      }

      lastScrollTop = st;
    }
  },
  header_change_bg: () => {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        $("header").addClass("hdt-nav-not-root");
      } else {
        $("header").removeClass("hdt-nav-not-root");
      }
    });
  },
  open_menu_mb: () => {
    // open menu mobile
    $('#open_menu_mb').on('click', function () {
      $('sidebar_menu_mb').addClass('active')
    })
    // close menu mobile when click button && close menu when click overlay && click brand logo
    $('sidebar_menu_mb .close_btn,sidebar_menu_mb .overlay,sidebar_menu_mb .brand_logo a').on('click', function () {
      $('sidebar_menu_mb').removeClass('active')
    })
    //  active link when click
    $('sidebar_menu_mb .hdt-nav_link').on('click', function () {
      $('sidebar_menu_mb .hdt-nav_link.active').removeClass('active');
      $(this).addClass('active');
      $('sidebar_menu_mb').removeClass('active')
    })
    // 
  },
  cursor: () => {
    console.log("Cursor glowing is active");
    if (window.innerWidth < 1149) {
      console.log("Cursor glowing is disable on tabvar & mobile");
      return;
    }
    // hiden when stop moving
    var timer;
    const mouse_stop = () => {
      $('cursor').find('.cursor-glow canvas').removeClass('opacity-1');
      $('cursor').find('.cursor-glow canvas').addClass('opacity-0');
    }
    const mouse_on = () => {
      $('cursor').find('.cursor-glow canvas').removeClass('opacity-0');
      $('cursor').find('.cursor-glow canvas').addClass('opacity-1');
    }
    const glow = () => {
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
      // Create a radial gradient
      // The inner circle is at x=110, y=90, with radius=0
      // The outer circle is at x=100, y=100, with radius=50
      // x, y la toa do x/y tren document
      const gradient = ctx.createRadialGradient(800, 800, 0, 800, 800, 400);
      // console.log(gradient);
      // Add color stops
      gradient.addColorStop(0, "rgba(21,137,255, .11)");
      gradient.addColorStop(0.1, "rgba(21,137,255, .10)");
      gradient.addColorStop(0.2, "rgba(21,137,255, .09)");
      gradient.addColorStop(0.3, "rgba(21,137,255, .08)");
      gradient.addColorStop(0.4, "rgba(21,137,255, .07)");
      gradient.addColorStop(0.5, "rgba(21,137,255, .06)");
      gradient.addColorStop(0.6, "rgba(21,137,255, .05)");
      gradient.addColorStop(0.7, "rgba(21,137,255, .04)");
      gradient.addColorStop(0.8, "rgba(21,137,255, .03)");
      gradient.addColorStop(0.9, "rgba(21,137,255, .02)");
      gradient.addColorStop(1, "transparent");
      // Set the fill style and draw a rectangle
      ctx.fillStyle = gradient;
      // fillRect(x,y,z,k)
      // x,y: toa do bat dau
      // z,k: chieu rong / chieu cao cua filter
      ctx.fillRect(0, 0, 1600, 1600);
    }
    // start glow
    glow();
    if (window.innerWidth > 1149) {
      document.addEventListener("mousemove", (e) => {
        mouse_on();
        clearTimeout(timer);
        timer = setTimeout(mouse_stop, 300);
        var x = e.clientX;
        var y = e.clientY;

        $('.cursor-glow canvas').css({ 'top': y, 'left': x })
      });
    }

  },
  filter: () => {
    var $grid = $("#isotope").isotope({
      itemSelector: ".isotope-item",
      layoutMode: "fitRows",
      filter: "*",
    });
    $("[filter-tabs]").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

  },
  tabs: () => {
    $("[filter-tabs]").on("click", "button", function () {
      $("[filter-tabs]").find("button.is-active").removeClass("is-active");
      $(this).addClass("is-active");
    });
    $('#tabs_demo').on('click', 'button', function () {
      $("#tabs_demo").find("button.is-active").removeClass("is-active");
      $(this).addClass("is-active");
    })
  },
  empower_masonry: () => {

    $(".empower_grid").isotope({
      layoutMode: "packery",
      itemSelector: ".col",
    });
    $(".grid2").isotope({
      layoutMode: "packery",
      itemSelector: ".col",
    });

  },
  tabs_shop: () => {
    const tab_sl1 = new Swiper('#tabs_shop_splide-1', {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: false,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        525: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1366: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    })
    const tab_sl2 = new Swiper('#tabs_shop_splide-2', {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: false,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        525: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1025: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1366: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    })
    const tab_sl3 = new Swiper('#tabs_shop_splide-3', {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: false,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        525: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1025: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1366: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    })
    const tab_sl4 = new Swiper('#tabs_shop_splide-4', {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: false,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        525: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1025: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1366: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    })
    $('#tabs_demo').on('click', 'button', function () {
      $('#tabs_demo').find('button.is-active').removeClass('is-active');
      $(this).addClass('is-active');
      $('.tabs_demo').find('.tabs_shop_splide.control-active').removeClass('control-active');
      var id = $(this).attr('aria-controls');
      // console.log(id);
      $(`#${id}`).addClass('control-active')
    })

  },
  table: () => {


    $('#table_viewmore').on('click', function () {
      $('#total_wrap').addClass('view-more-active')
    })


  },
  galaxy: () => {
    var number_of_star = 200;

    var random_number = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var createStars = function () {
      var star_rotation = 'move_right;';
      for (var i = 0; i < number_of_star; i++) {
        rot = (star_rotation == 'move_right;' ? 'move_left;' : 'move_right;');
        var star_top = random_number(0, 300);
        var star_left = random_number(0, 1000);
        var star_radius = 1;
        var star_duration = random_number(3, 6);
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);

        document.getElementById('galaxy_eff').innerHTML += "<div class='star' style='top: " + star_top + "px; left: " + star_left + "px; width: " + star_radius + "px; height: " + star_radius + "px; " +
          "animation-name:" + star_rotation + "; animation-duration: " + star_duration + "s;background-color:#" + randomColor + "'></div>";
      }
    };
    createStars();
  },
  text_circle: () => {

    const str = "highconverting";
    const text = $('#text-circle');
    // console.log(text);
    for (var i = 0; i < str.length; i++) {
      text.append(`<span style="transform:rotate(${26 * i}deg)">${str[i]}</span>`);
    }

    // return;
    const str2 = "one-time payment";
    const text2 = $('#payment_circle');
    // console.log(text);
    for (var i = 0; i < str2.length; i++) {
      text2.append(`<span style="transform:rotate(${9 * i}deg)">${str2[i]}</span>`);
    }
  },
  back_to_top: () => {
    var btn = $('back-to-top');

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, '0');
    });
  },
  video_popup: (config) => {

    const video = (config) => {
      // add target_blank a tag
      // if (window.innerWidth <= 768) {
      //   $('.popup_youtube').attr('target', '_blank');
      // }
      // active video when hover
      if (window.innerWidth > 768) {
        $('#video-3').addClass('is-hover')
        $('#section_video').on('mouseover', 'video', function () {
          $('.video-item').find('video').trigger('pause');
          $('.video-item.is-hover').removeClass('is-hover');
          $(this).parents('.video-item').addClass('is-hover');
          $(this).trigger('play');

        });
      } else {
        if (config.video.disable_mobile) {
          console.log("Disable video on mobile");
          $('#section_video').addClass('disable_mobile');
          return;
        }
      }
    }

    $('.popup_youtube').magnificPopup({
      // disableOn: 768,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      // callbacks: {
      //   open: function () {
      //     $('.video-item').find('video').trigger('pause');
      //   },
      //   close: function () {
      //     $('.video-item.is-hover').find('video').trigger('play');
      //   }
      // },
    });
    video(config);
  },
  counter_number: () => {
    // cau truc
    // 
    // <counter>
    //   <div counter-value data-count="400" data-duration="1000">0</div>
    // </counter>
    // 
    $(window).scroll(function () {
      $('counter').each(function () {
        var oTop = $(this).offset().top - window.innerHeight;
        // console.log("Check number counter: ",$(window).scrollTop() > oTop);
        if ($(window).scrollTop() > oTop) {
          // console.log($(this).find('[counter-value]'));
          $(this).find('[counter-value]').each(function () {
            var $this = $(this),
              countTo = $this.data('count');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            },
              {
                duration: $this.data('duration'),
                easing: 'swing',
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
                }

              });
          });
        }
      })
    });
  },
  swatch_color: () => {
    $('.swatch_color').on('click', 'button', function () {
      $(this).parents().find('button.is-selected').removeClass('is-selected');
      $(this).addClass('is-selected');
    })
  },
  reveal: (config) => {
    // structor
    // <div>
    //  <div reveal>
    //    code html
    //  </div>
    // </div> 

    const reveal = (config) => {
      if (!config.reveal.enable) {
        return
      }
      var reveals = document.querySelectorAll('[reveal]');
      if (reveals) {
        console.log("Reveal is working");
      } else {
        console.log("Reveal is not working because not find the item ");
        return;
      }
      if (window.innerWidth > 768) {
        $(window).on('scroll', function () {
          reveals.forEach((el) => {
            const windowHeight = window.innerHeight;
            const revealTop = el.getBoundingClientRect().top;
            const elHeight = $(this).height();
            const revealPoint = 150;
            // position & speed 
            const posPoint = 20;
            // attr parent
            el.parentElement.style.perspective = '700px';
            el.parentElement.style.transformStyle = 'preserve-3d';
            el.parentElement.style.perspectiveOrigin = '100% 0%';
            // attr node
            el.style.transformOrigin = '50% 0';
            el.style.translate = 'none';
            el.style.rotate = 'none';
            el.style.scale = 'none';
            el.style.transition = 'all .35s ease';
            // console.log(revealTop > windowHeight - revealPoint);
            if (revealTop > windowHeight - revealPoint) {
              el.style.opacity = '0';
              el.style.transform = `rotateX(-${posPoint}deg)`
            }
            if (revealTop < windowHeight - revealPoint) {
              if (revealTop > -50) {
                var schemas = Math.abs(1 - revealTop / elHeight);
                var opacity = Math.min((Math.abs(1 - (revealTop - 350) / elHeight)), 1);
                var rotate = Math.min((posPoint * schemas - (posPoint - 10)), 0)
                el.style.opacity = `${opacity}`;
                el.style.transform = `translate3d(0px,0px,0px) rotateX(${rotate}deg)`
              }
              else {
                el.style.transform = `translate(0,0)`
              }
            }

          })
        })
      }
    }
    reveal(config)

  },
  popup: () => {
    $('[name="grid_popup"]').on('click', function (e) {

      e.preventDefault();

      const parent = $(this).parent();
      const popup_html = $('popup');
      var p_obj = {
        title: parent.find('.title').text(),
        des: parent.find('.des-hide').clone(),
        data_img: parent.find('.img').clone(),
        button: parent.find('.group-btn').clone(),
      }
      console.log(p_obj);
      popup_html.find('.title').text(p_obj.title);
      popup_html.find('.des').html(p_obj.des);
      popup_html.find('.button_wrap').html(p_obj.button);
      popup_html.find('.img_wrap .img').html(p_obj.data_img)
      openPopup();
    })
    const openPopup = () => {
      $('popup').css('display', 'block');
    }
    const closePopup = () => {
      $('popup').css('display', 'none');
      $('popup .content_inner').html(popup_original);
    }
    //  close popup 
    $('popup .popup-close,popup .overlay').on('click', function () {
      closePopup();
    })
    const popup_original = `<div class="wrap">
    <div class="content_x">
    <h3 class="title"></h3>
    <div class="des"></div>
    <div class="button_wrap"></div>
    </div>  
    <div class="img_wrap">
    <div class="img hdt-ratio" style="--aspect-ratioapt: 928/503;">
      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
    </div>
    </div>                  
    </div>`
  },
  logo_cta: () => {
    $('.logo_cta').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '0');
      console.log("done");
    })
  },
  scrollspy: () => {
    var sectionIds = $('a.scrollspy_s');
    console.log("SCrollspy is active");
    $(document).scroll(function () {
      sectionIds.each(function () {
        var container = $(this).attr('href');
        var containerOffset = $(container).offset().top;
        var containerHeight = $(container).outerHeight();
        var containerBottom = containerOffset + containerHeight;
        var scrollPosition = $(document).scrollTop();

        if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }


      });
    });
  }
  ,
  table: () => {
    if (window.innerWidth < 767) {
      return;
    }
    $('table tbody tr:not(.total)').slice(16).hide();
    $(document).on('click', '.tb_viewmore', function () {
      $('table tbody tr:not(.total)').slideDown();
      $('.hdt-table .ww').addClass('view');

    })
  },
  demo_open: () => {
    $(document).on('click', '[demo_open]', function (e) {
      if ($(this).attr('href') != '#comingsoon' && $('.pass_pop').attr('clicked') == 'clicked') {
        return;
      }
      e.preventDefault();
      if ($(this).attr('href') != '#comingsoon') {
        var url_link = $(this).attr('href');
        $('.pass_pop').addClass('open');
        $('.pass_pop .view_more').attr('href', `${url_link}`);
      } else {
        window.open('https://1.envato.market/Y9mvDR', '_blank')
      }
    })
  },
  password_popup: () => {
    $(document).on('click', '.pass_pop .overlay,.pass_pop .close', function () {
      $('.pass_pop').removeClass('open')
    });
    $(document).on('click', '.pass_pop .view_more', function () {
      $('.pass_pop').attr('clicked', "clicked")
    })
  },
  start: () => {
    const config = {
      video: {
        disable_mobile: true
      },
      reveal: {
        enable: true
      }
    }
    console.log("App start ...");
    app.header_sticky();
    app.header_change_bg();
    app.open_menu_mb();
    app.tabs();
    app.filter();
    app.empower_masonry();
    // app.table();
    app.galaxy();
    app.text_circle();
    app.tabs_shop();
    app.back_to_top();
    app.video_popup(config);
    app.counter_number();
    app.swatch_color();
    app.reveal(config);
    app.popup();
    app.logo_cta();
    app.cursor();
    app.scrollspy();
    app.table();
    app.demo_open();
    app.password_popup()
    new WOW().init();
    // new js
    const tab_sl5 = new Swiper('.ecom_slider', {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      grabCursor: false,
      // slidesPerGroupSkip: 4,
      slidesPerGroup: 4,
      initialSlide: 9,
      // loopAdditionalSlides: 1,

      // pagination: {
      //   el: ".swiper-pagination",
      //   bulletElement: 'button',
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter:true,
      },
      breakpoints: {
        525: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1680: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        2000: {
          centeredSlides: true,
          slidesPerView: 6,
          spaceBetween: 30,
        }
      }
    })

    $(document).on('click','#multi_brands_popup_video',function(){
        $('multi-brand-video').attr('open','');
        $('html').attr('hidden-bar','');
    })
  },
};

app.start();

class topBar extends HTMLElement {
  constructor() {
    super();
    if (window.innerWidth < 767) {
      return;
    }
    if (JSON.parse(localStorage.getItem('topbar'))?.active == false) {
      this.style.display = 'none';
      return;
    }
    this.slider = this.querySelector('.slider');
    this.btn_close = this.querySelector('button.close');
    this.initSlider();
    this.close()
  }
  initSlider() {

    var self = this;
    if (!self.slider) {
      return;
    }
    return new Swiper(self.slider, {
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      grabCursor: true
    })
  }
  close() {
    var self = this;
    if (!self.btn_close) {
      return;
    }
    self.btn_close.addEventListener('click', function () {
      self.style.height = 0;
      localStorage.setItem('topbar', '{"active":false}')
    })
  }
}
customElements.define('topbar-custom', topBar)


class partner extends HTMLElement {
  constructor() {
    super();
    this.overlay = document.querySelector('.partner-pop .overlay');
    this.close = document.querySelector('.partner-pop button.close');
    this.popup = document.querySelector('.partner-pop');
    this.clickAction();

  }
  clickAction() {
    var self = this;
    self.addEventListener('click', function () {
      self.classList.add('is-active');
      self.popup.classList.add('open');
      var data = {
        img: self.querySelector('[pn-img]').getAttribute('src'),
        content: self.querySelector('[pn-content]').cloneNode(true).innerHTML,
      }
      self.openModal(data)
    })
    if (self.popup) {
      self.overlay.addEventListener('click', function () {
        self.popup.classList.remove('open');
        self.classList.remove('is-active')
      })
      self.close.addEventListener('click', function () {
        self.popup.classList.remove('open');
        self.classList.remove('is-active')
      })
    }
  }
  openModal(data) {
    var self = this;
    self.popup.querySelector('img').setAttribute('src', data.img);
    self.popup.querySelector('.p_content').innerHTML = data.content;
  }

}
customElements.define('part-ner', partner);

// loading page
class loadingPage extends HTMLElement {
  constructor() {
    super();
    this.loading = this.querySelector('#loading');
    this.load_center = this.querySelector('#loading-center');
    this.load_wrap = this.querySelector('#loader-wrap');


    var fn = this.pageOnLoad.bind(this);
    document.addEventListener(
      "DOMContentLoaded", fn,
      false
    );
  }
  pageOnLoad() {
    var self = this;
    setTimeout(function () {
      self.loading.className = "slideDown";
    }, 100);
    setTimeout(function () {
      self.load_center.className = "zoomOut";
    }, 100);
    setTimeout(function () {
      document.querySelector('html').removeAttribute('hidden-bar');
      self.load_wrap.classList.add('dom_loaded');
    }, 100);
  }
}
customElements.define('loading-page', loadingPage)


class multiBrandVideo extends HTMLElement{
  constructor(){
    super();
    this.close = this.querySelector('button.close');
    this.overlay = this.querySelector('.overlay');
    this.video = this.querySelector('video');
    this.close.addEventListener('click',()=>{
      this.closeVideo();
    });
    this.overlay.addEventListener('click',()=>{
      this.closeVideo();
    });

  }
  closeVideo(){
    this.removeAttribute('open','');
    document.querySelector('html').removeAttribute('hidden-bar','');
    this.video.pause();
  }
}
customElements.define('multi-brand-video',multiBrandVideo);

class stickyBanner extends HTMLElement{
  constructor(){
    super();
    this.btn =this.querySelector('button.close');

    this.btn.addEventListener('click',()=>{
      this.querySelector('.banner-wrap').setAttribute('hide','')
      setTimeout(() => {
        this.setAttribute('hide','');
      }, 500);
    })
  }
}
customElements.define('sticky-banner',stickyBanner)


// Effect snowball 

function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

class Snow {
	constructor(color_rgb,w,h,ctx) {
		this.reset();
		this.rgb = color_rgb;
    this.w = w;
    this.h =h;
    this.ctx = ctx;
	}
	reset() {
		this.x = getRandomInt(0, this.w);
		this.xc = ((this.x - (this.w / 2)) / (this.w / 2)) / 2;
		this.y = getRandomInt(-(this.h * 0.3), this.h);
		this.yc = getRandomInt(10, 15) / 10;
		this.size = getRandomInt(10, 20) / 20;
		this.a = getRandomInt(-10, 0) / 10;
		this.ac = getRandomInt(3, 5) / 100;
	}
	draw() {
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.ctx.fillStyle = `rgba(${this.rgb}, ${this.a})`;
		this.ctx.strokeStyle = `rgba(${this.rgb}, ${this.a})`;
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.closePath();
	}
	update() {
		this.x += this.xc;
		this.y += this.yc;
		this.a += this.ac;
		if (this.a > 2) {
			this.ac *= -1;
		} else if (this.a < 0 && this.ac < 0) {
			this.reset();
		}
	}
}

class Snow2 {
	constructor(color_rgb,w,h,ctx) {
		this.reset();
		this.rgb = color_rgb;
    this.w=w;
    this.h=h;
    this.ctx=ctx;
	}
	reset() {
		this.x = getRandomInt(0, this.w);
		this.y = getRandomInt(0, this.h);
		this.size = getRandomInt(0, 5) / 20;
		this.a = getRandomInt(-10, 0) / 10;
		this.ac = 0.01;
	}
	draw() {
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.ctx.fillStyle = `rgba(${this.rgb}, ${this.a})`;
		this.ctx.strokeStyle = `rgba(${this.rgb}, ${this.a})`;
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.closePath();
	}
	update() {
		this.y -= 0.1;
		this.a += this.ac;
		if (this.a > 1.5) {
			this.ac *= -1;
		} else if (this.a < 0 && this.ac < 0) {
			this.reset();
		}
	}
}


class SnowBall extends HTMLElement{

  constructor(){
    super();
    this.configs = JSON.parse(this.getAttribute('config'))
    if(!this.configs) return;
    this.canvas = this.querySelector('canvas');
    this.context = this.canvas.getContext('2d');
    this.w = this.canvas.width = window.innerWidth;
    this.h = this.canvas.height = window.innerHeight;
    this.snows = [];
    this.snows2 = [];
    this.init();
    window.addEventListener("resize", () => {
      this.resizeReset()
    });
  }
  init(){
    this.resizeReset();
    this.animationLoop();
  }
  resizeReset(){
    this.w = this.canvas.width = window.innerWidth;
    this.h = this.canvas.height = window.innerHeight;
    this.snows = [];
    this.snows2 = [];

    for(var i =0 ; i< this.configs.count; i++){
      this.snows.push(new Snow(this.configs.color_rgb,this.w,this.h,this.context))
    }
    for (var i = 0; i < this.configs.count; i++) {
      this.snows2.push(new Snow2(this.configs.color_rgb2,this.w,this.h,this.context));
    }
  }
  animationLoop(){
    this.context.clearRect(0,0,this.w,this.h);
    this.drawScene();
    requestAnimationFrame(() => {
      this.animationLoop();
    });
  }
  drawScene(){
    for (var i = 0; i < this.snows.length; i++) {
      this.snows[i].update();
      this.snows[i].draw();
    }
    for (var i = 0; i < this.snows2.length; i++) {
      this.snows2[i].update();
      this.snows2[i].draw();
    }
  }
}
customElements.define('snow-ball',SnowBall);

function randColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = 'rgb($r, $g, $b)';
  color = color.replace('$r', r);
  color = color.replace('$g', g);
  color = color.replace('$b', b);
  return color;
}
class LunarEvent extends HTMLElement{

  constructor(){
    super();
    console.log("Lunar event is running");
    this.canvas = this.querySelector('canvas');
    if(!this.canvas) return;

    this.initSize();

    this.context = this.canvas.getContext('2d');

    this.listFire = [];
    this.listFirework = [];
    this.listText = [];
    this.listSpecial = [];
    this.listSpark = [];
    this.lights = [];
    this.fireNumber = 10;
    this.center = { 
      x: this.canvas.width / 2, 
      y: this.canvas.height / 2 
    };
    this.range = 100;
    this.fired = 0;
    this.onHold = 0;
    this.supprise = false;
    this.textIndex = 0;
    this.textString = 'happylunarnewyear2025';
  
    // Matrix positions 
    this.textMatrix = [
      4.5, 0, 5.5, 0, 6.5, 0, 7.5, 0, 8.5, 0, 
      0, 1, 1, 1, 2, 1, 3, 1, 4, 1, 6, 1, 7, 1, 8, 1, 10, 1, 11, 1, 12, 1, 13, 1,
      5, 2, 6, 2, 7, 2, 8, 2
    ];
    
    this.chars = {
      h: [
        0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7,
        1, 3, 2, 3, 3, 3, 4, 3,
        5, 0, 5, 1, 5, 2, 5, 3, 5, 4, 5, 5, 5, 6, 5, 7
      ],
      a: [
        2, 0, 2, 1, 2, 2, 1, 2, 1, 3, 1, 4, 1, 5, 0, 5, 0, 6, 0, 7, 2, 5,
        3, 0, 3, 1, 3, 2, 4, 2, 4, 3, 4, 4, 4, 1, 5, 5, 5, 6, 5, 7, 3, 5
      ],
      p: [
        0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7,
        1, 0, 2, 0, 3, 0, 4, 1, 5, 2, 4, 3, 3, 4, 2, 4, 1, 4
      ],
      y: [
        0, 0, 0, 1, 1, 1, 1, 2, 1, 3, 2, 3, 2, 4, 2, 5, 2, 6, 2, 7,
        3, 2, 3, 3, 4, 1, 4, 2, 5, 0, 5, 1
      ],
      l: [
        0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7,
        1, 7, 2, 7, 3, 7, 4, 7, 5, 7
      ],
      u: [
        0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6,
        1, 7, 2, 7, 3, 7, 4, 7,
        5, 0, 5, 1, 5, 2, 5, 3, 5, 4, 5, 5, 5, 6
      ],
      n: [
        0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7,
        1, 1, 1, 2, 2, 2, 2, 3, 2, 4, 3, 4, 3, 5, 4, 5, 4, 6,
        5, 0, 5, 1, 5, 2, 5, 3, 5, 4, 5, 5, 5, 6, 5, 7
      ],
      e: [
        0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7,
        1, 0, 2, 0, 3, 0, 4, 0, 5, 0,
        1, 3, 2, 3, 3, 3, 4, 3,
        1, 7, 2, 7, 3, 7, 4, 7, 5, 7
      ],
      w: [
        0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 1, 6,
        2, 1, 2, 2, 2, 3, 2, 4, 2, 5, 2, 6, 2, 7, 3, 7,
        5, 0, 5, 1, 5, 2, 5, 3, 5, 4, 5, 5, 4, 5, 4, 6
      ],
      r: [
        0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7,
        1, 0, 2, 0, 3, 0, 4, 1, 5, 2, 4, 3, 3, 4, 2, 4, 1, 4,
        1, 5, 2, 5, 3, 6, 4, 6, 5, 7
      ],
      '2': [         
        0, 1, 1, 0, 2, 0, 3, 0, 4, 0,
        5, 1, 5, 2, 5, 3,
        4, 4, 3, 4, 2, 5,
        1, 6, 0, 7, 1, 7, 2, 7, 3, 7, 4, 7, 5, 7
      ],
      '0': [
        1, 0, 2, 0, 3, 0, 4, 0,
        0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6,
        1, 7, 2, 7, 3, 7, 4, 7,
        5, 1, 5, 2, 5, 3, 5, 4, 5, 5, 5, 6
      ],
      '5': [
        0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0,
        0, 1, 0, 2, 0, 3,
        1, 3, 2, 3, 3, 3, 4, 3, 5, 4,
        5, 5, 5, 6,
        0, 7, 1, 7, 2, 7, 3, 7, 4, 7
      ]
    }
  
    this.setUpEvent();
  }
  setUpEvent(){
    this.init();
    this.resizeEvent();
    this.loop();
  }
  initSize(){
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    Object.assign(this.canvas.style, {
      position: "fixed",
      inset: "0"
    })
  }
  resizeEvent(){
    window.addEventListener('resize', () => {
      this.initSize()
      this.context.fillStyle = "#000003";
      this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
      this.center = {
        x: this.canvas.width / 2,
        y: this.canvas.height / 2
      }
    })
  }
  init(){
    this.context.fillStyle ="#000003";
    this.context.fillRect(0,0,this.canvas.width,this.canvas.height);

    for (var i = 0; i < this.fireNumber; i++) {
      var fire = {
        x: Math.random() * this.range / 2 - this.range / 4 + this.center.x,
        y: Math.random() * this.range * 2.5 + this.canvas.height,
        size: Math.random() + 0.5,
        fill: '#ff3',
        vx: Math.random() - 0.5,
        vy: -(Math.random() + 4),
        ax: Math.random() * 0.06 - 0.03,
        delay: Math.round(Math.random() * this.range) + this.range * 4,
        hold: false,
        alpha: 1,
        far: Math.random() * this.range + (this.center.y - this.range)
      };
      fire.base = {
        x: fire.x,
        y: fire.y,
        vx: fire.vx,
        vy: fire.vy
      };
      //
      this.listFire.push(fire);
      // play sound
      // playLaunchSound();
    }
      
  }
  initText(){
    var i = this.textIndex;
    var velocity = Math.random() * 0.25 + 1;
    var shift = {
      x: - (Math.random()+2),
      y: -(Math.random()+3)
    }
    var char = this.chars[this.textString[i]];
    var width = 80;
    var half = 6.5 * width;
    var left = this.textMatrix[i*2] * width - half;
    var top = this.textMatrix[i*2 +1] * this.range * 1.2 - this.range * 2.4;

    for (var j = 0; j < this.fireNumber * char.length * 0.25; j++) {
			var rand = Math.floor(Math.random() * char.length * 0.5);
			var x = char[rand * 2] + shift.x;
			var y = char[rand * 2 + 1] + shift.y;
			var text = {
				x: this.center.x + left * 0.9,
				y: this.center.y + top,
				left: this.center.x + left,
				size: Math.random() + 0.5,
				fill: '#ff3',
				vx: x * (velocity + (Math.random() - 0.5) * 0.5),
				vy: y * (velocity + (Math.random() - 0.5) * 0.5),
				ay: 0.08,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			}
			text.base = {
				life: text.life,
				size: text.size,
			};
			text.direct = (text.left - text.x) * 0.08;
			this.listText.push(text);
		}

    this.lights.push({ 
      x: this.center.x + left * 0.9, 
      y: this.center.y + top, 
      color: text.fill, 
      radius: this.range * 2 
    });
		if (++this.textIndex < this.textString.length) {
			setTimeout(this.initText(), 10);
		}
		else {
			this.textIndex = 0;
		}
  }
  initSpark(){
    var x = Math.random() * this.range * 3 - this.range * 1.5 + this.center.x;
		var vx = Math.random() - 0.5;
		var vy = -(Math.random() + 4);
		var ax = Math.random() * 0.04 - 0.02;
		var far = Math.random() * this.range * 4 - this.range + this.center.y;
		var direct = ax * 10 * Math.PI;
		var max = this.fireNumber * 0.5;
		for (var i = 0; i < max; i++) {
			var special = {
				x: x,
				y: Math.random() * this.range * 0.25 + this.canvas.height,
				size: Math.random() + 2,
				fill: '#ff3',
				vx: vx,
				vy: vy,
				ax: ax,
				direct: direct,
				alpha: 1
			};
			special.far = far - (special.y - this.canvas.height);
			this.listSpecial.push(special);
			// play sound
			// playLaunchSound();
		}
  }
  createFirework(type, fire) {
    switch(type) {
        case 'double-full':
            return this.makeDoubleFullCircleFirework(fire);
        case 'planet':
            return this.makePlanetCircleFirework(fire);
        case 'full':
            return this.makeFullCircleFirework(fire);
        case 'double':
            return this.makeDoubleCircleFirework(fire);
        case 'heart':
            return this.makeHeartFirework(fire);
        case 'circle':
            return this.makeCircleFirework(fire);
        default:
            return this.makeRandomFirework(fire);
    }
  }
  update() {
    // console.log("update")
		// update fire logic
		for (var i = 0; i < this.listFire.length; i++) {
			var fire = this.listFire[i];
			//
			if (fire.y <= fire.far) {
				// play sound
				// playExpSound();
				// case add firework
				this.fired++;
        const types = ['double-full', 'planet', 'full', 'double', 'heart', 'circle', 'random'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        var color = this.createFirework(randomType, fire);
				// light
				this.lights.push({ x: fire.x, y: fire.y, color: color, radius: this.range * 2 });
				// reset
				fire.y = fire.base.y;
				fire.x = fire.base.x;
				// special
				if (this.fired % 33 == 0) {
					this.initSpark();
				}
				// on hold
				this.supprise = this.fired % 100 == 0 ? true : this.supprise;
				if (this.supprise) {
					fire.vx = 0;
					fire.vy = 0;
					fire.ax = 0;
					fire.hold = true;
					this.onHold++;
				}
				else {
					fire.vx = fire.base.vx;
					fire.vy = fire.base.vy;
					fire.ax = Math.random() * 0.06 - 0.03;
					// play sound
					// playLaunchSound();
				}
			}
			//
			if (fire.hold && fire.delay <= 0) {
				this.onHold--;
				fire.hold = false;
				fire.delay = Math.round(Math.random() * this.range) + this.range * 4;
				fire.vx = fire.base.vx;
				fire.vy = fire.base.vy;
				fire.ax = Math.random() * 0.06 - 0.03;
				fire.alpha = 1;
				// play sound
				// playLaunchSound();
			}
			else if (fire.hold && fire.delay > 0) {
				fire.delay--;
			}
			else {
				fire.x += fire.vx;
				fire.y += fire.vy;
				fire.vx += fire.ax;
				fire.alpha = (fire.y - fire.far) / fire.far;
			}
		}

		// update firework logic
		for (var i = this.listFirework.length - 1; i >= 0; i--) {
			var firework = this.listFirework[i];
			if (firework) {
				firework.vx *= 0.9;
				firework.vy *= 0.9;
				firework.x += firework.vx;
				firework.y += firework.vy;
				firework.vy += firework.ay;
				firework.alpha = firework.life / firework.base.life;
				firework.size = firework.alpha * firework.base.size;
				firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;
				//
				firework.life--;
				if (firework.life <= 0) {
					this.listFirework.splice(i, 1);
				}
			}
		}

		// supprise happy new year!
		if (this.supprise && this.onHold == 10) {
			this.supprise = false;
			setTimeout(()=> {
        this.initText();
      }, 3000);
		}
    
    // setInterval(()=> {
    //   this.initText();
    // }, 3000);

		// update text logic
		for (var i = this.listText.length - 1; i >= 0; i--) {
			var text = this.listText[i];
			text.vx *= 0.9;
			text.vy *= 0.9;
			text.direct *= 0.9;
			text.x += text.vx + text.direct;
			text.y += text.vy;
			text.vy += text.ay;
			text.alpha = text.life / text.base.life;
			text.size = text.alpha * text.base.size;
			text.alpha = text.alpha > 0.6 ? 1 : text.alpha;
			//
			text.life--;
			if (text.life <= 0) {
				this.listText.splice(i, 1);
			}
		}

		// update special logic
		for (var i = this.listSpecial.length - 1; i >= 0; i--) {
			var special = this.listSpecial[i];
			if (special.y <= special.far) {
				// play sound
				// playExpSound();
				// light
				this.lights.push({ x: special.x, y: special.y, color: special.fill, alpha: 0.02, radius: this.range * 2 });
				//
				this.makeSpark(special);
				// remove from list
				this.listSpecial.splice(i, 1);
			}
			else {
				special.x += special.vx;
				special.y += special.vy;
				special.vx += special.ax;
				special.alpha = (special.y - special.far) / special.far;
			}
		}

		// update spark logic
		for (var i = this.listSpark.length - 1; i >= 0; i--) {
			var spark = this.listSpark[i];
			if (spark) {
				spark.vx *= 0.9;
				spark.vy *= 0.9;
				spark.x += spark.vx;
				spark.y += spark.vy;
				spark.vy += spark.ay;
				spark.alpha = spark.life / spark.base.life + 0.2;
				//
				spark.life--;
				if (spark.life < spark.base.life * 0.8 && spark.life > 0) {
					//
					spark.chain--;
					this.chainSpark(spark);
				}
				if (spark.life <= 0) {
					this.listSpark.splice(i, 1);
				}
			}
		}
	}
  draw() {
    // console.log("draw")
		// clear
		this.context.globalCompositeOperation = 'source-over';
		this.context.globalAlpha = 0.2;
		this.context.fillStyle = "#000003";
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// re-draw
		// this.context.globalCompositeOperation = 'screen';
		for (var i = 0; i < this.listFire.length; i++) {
			var fire = this.listFire[i];
			this.context.globalAlpha = fire.alpha;
			this.context.beginPath();
			this.context.arc(fire.x, fire.y, fire.size, 0, Math.PI * 2);
			this.context.closePath();
			this.context.fillStyle = fire.fill;
			this.context.fill();
		}

		for (var i = 0; i < this.listFirework.length; i++) {
			var firework = this.listFirework[i];
			this.context.globalAlpha = firework.alpha;
			this.context.beginPath();
			this.context.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
			this.context.closePath();
			this.context.fillStyle = firework.fill;
			this.context.fill();
		}

		for (var i = 0; i < this.listSpecial.length; i++) {
			var special = this.listSpecial[i];
			this.context.globalAlpha = special.alpha;
			// this.context.beginPath();
			// this.context.arc(special.x, special.y, special.size, 0, Math.PI * 2);
			// this.context.closePath();
			// this.context.fill();
			this.context.fillStyle = special.fill;
			this.context.fillRect(special.x - special.size, special.y - special.size, special.size * 2, special.size *2);
		}

		for (var i = 0; i < this.listSpark.length; i++) {
			var spark = this.listSpark[i];
			this.context.globalAlpha = spark.alpha;
			// this.context.beginPath();
			// this.context.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
			// this.context.closePath();
			// this.context.fill();
			this.context.fillStyle = spark.fill;
			this.context.fillRect(spark.x - spark.size, spark.y - spark.size, spark.size * 2, spark.size *2);
		}

		// light effect
		while (this.lights.length) {
			var light = this.lights.pop();
			var gradient = this.context.createRadialGradient(light.x, light.y, 0, light.x, light.y, light.radius);
			gradient.addColorStop(0, '#fff');
			gradient.addColorStop(0.2, light.color);
			gradient.addColorStop(0.8, 'rgba(0, 0, 0, 0)');
			gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
			this.context.globalAlpha = light.alpha ? light.alpha : 0.25;
			this.context.fillStyle = gradient;
			this.context.fillRect(light.x - light.radius, light.y - light.radius, light.radius * 2, light.radius * 2);
		}

		// supprise: HAPPY LUNAR NEW YEAR 2017!
		for (var i = 0; i < this.listText.length; i++) {
			var text = this.listText[i];
			this.context.globalAlpha = text.alpha;
			this.context.fillStyle = text.fill;
			this.context.fillRect(text.x - text.size, text.y - text.size, text.size * 2, text.size * 2);
		}
	}
  loop(){
    requestAnimationFrame(()=> {
      this.loop();
    })
    this.update();
    this.draw();
  }
  playExpSound() {
		var sound = listExpSound[Math.floor(Math.random() * listExpSound.length)];
		sound.volume = Math.random() * 0.4 + 0.1;
		sound.play();
	}
  playLaunchSound() {
		setTimeout(function() {
			var sound = listLaunchSound[Math.floor(Math.random() * listLaunchSound.length)];
			sound.volume = 0.05;
			sound.play();
		}, 200);
	}
  makeCircleFirework(fire) {
		var color = randColor();
		var velocity = Math.random() * 2 + 6;
		var max = this.fireNumber * 5;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
				ay: 0.04,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 2
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		return color;
	}
  makeDoubleCircleFirework(fire) {
		var color = randColor();
		var velocity = Math.random() * 2 + 8;
		var max = this.fireNumber * 3;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
				ay: 0.04,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		color = randColor();
		velocity = Math.random() * 3 + 4;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
				ay: 0.04,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		return color;
	}
  makePlanetCircleFirework(fire) {
		var color = '#aa0609';
		var velocity = Math.random() * 2 + 4;
		var max = this.fireNumber * 2;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
				ay: 0.04,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		max = this.fireNumber * 4;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * velocity * Math.random(),
				vy: Math.sin(rad) * velocity * Math.random(),
				ay: 0.04,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		max = this.fireNumber * 3;
		color = '#ff9';
		var rotate = Math.random() * Math.PI * 2;
		var vx = velocity *  (Math.random() + 2);
		var vy = velocity * 0.6;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			// calc x, y for ellipse
			var cx = Math.cos(rad) * vx + (Math.random() - 0.5) * 0.5;
			var cy = Math.sin(rad) * vy + (Math.random() - 0.5) * 0.5;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: cx * Math.cos(rotate) - cy * Math.sin(rotate), // rotate x ellipse
				vy: cx * Math.sin(rotate) + cy * Math.cos(rotate), // rotate y ellipse
				ay: 0.02,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		return '#aa0609';
	}
  makeFullCircleFirework(fire) {
		var color = randColor();
		var velocity = Math.random() * 8 + 8;
		var max = this.fireNumber * 3;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
				ay: 0.06,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		max = this.fireNumber * Math.round(Math.random() * 4 + 4);
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * velocity * Math.random(),
				vy: Math.sin(rad) * velocity * Math.random(),
				ay: 0.06,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		return color;
	}
  makeDoubleFullCircleFirework(fire) {
		var color = randColor();
		var velocity = Math.random() * 8 + 8;
		var max = this.fireNumber * 3;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
				ay: 0.04,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		color = randColor();
		velocity = Math.random() * 3 + 4;
		max = this.fireNumber * 2;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
				ay: 0.06,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		max = this.fireNumber * 4;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * velocity * Math.random(),
				vy: Math.sin(rad) * velocity * Math.random(),
				ay: 0.06,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		return color;
	}
  makeHeartFirework(fire) {
		var color = randColor();
		var velocity = Math.random() * 3 + 3;
		var max = this.fireNumber * 5;
		var rotate = Math.random() * Math.PI * 2;
		for (var i = 0; i < max; i++) {
			var rad = (i * Math.PI * 2) / max + rotate;
			var v, p;
			if (rad - rotate < Math.PI * 0.5) {
				p = (rad - rotate) / (Math.PI * 0.5);
				v = velocity + velocity * p;
			}
			else if (rad - rotate > Math.PI * 0.5 && rad - rotate < Math.PI) {
				p = (rad - rotate - Math.PI * 0.5) / (Math.PI * 0.5);
				v = velocity * (2 - p);
			}
			else if (rad - rotate > Math.PI && rad - rotate < Math.PI * 1.5) {
				p = (rad - rotate - Math.PI) / (Math.PI * 0.5);
				v = velocity * (1 - p);
			}
			else if (rad - rotate > Math.PI * 1.5 && rad - rotate < Math.PI * 2) {
				p = (rad - rotate - Math.PI * 1.5) / (Math.PI * 0.5);
				v = velocity * p;
			}
			else {
				v = velocity;
			}
			v = v + (Math.random() - 0.5) * 0.25;
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.cos(rad) * v,
				vy: Math.sin(rad) * v,
				ay: 0.02,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 1.5
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		return color;
	}
  makeRandomFirework(fire) {
		var color = randColor();;
		for (var i = 0; i < this.fireNumber * 5; i++) {
			var firework = {
				x: fire.x,
				y: fire.y,
				size: Math.random() + 1.5,
				fill: color,
				vx: Math.random() * 15 - 7.5,
				vy: Math.random() * -15 + 5,
				ay: 0.05,
				alpha: 1,
				life: Math.round(Math.random() * this.range / 2) + this.range / 2
			};
			firework.base = {
				life: firework.life,
				size: firework.size
			};
			this.listFirework.push(firework);
		}
		return color;
	}
  makeSpark(special) {
		var color = special.fill;
		var velocity = Math.random() * 6 + 12;
		var max = this.fireNumber;
		for (var i = 0; i < max; i++) {
			var rad = (Math.random() * Math.PI * 0.3 + Math.PI * 0.35) + Math.PI + special.direct;
			var spark = {
				x: special.x,
				y: special.y,
				size: Math.random() + 1,
				fill: color,
				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
				ay: 0.02,
				alpha: 1,
				rad: rad,
				direct: special.direct,
				chain: Math.round(Math.random() * 2) + 2,
				life: Math.round(Math.random() * this.range / 2) + this.range / 2
			};
			spark.base = {
				life: spark.life,
				velocity: velocity
			};
			this.listSpark.push(spark);
		}
		return color;
	}
  chainSpark(parentSpark) {
		var color = parentSpark.fill;
		if (parentSpark.chain > 0) {
			var velocity = parentSpark.base.velocity * 0.6;
			var max = Math.round(Math.random() * 5);
			for (var i = 0; i < max; i++) {
				var rad = (Math.random() * Math.PI * 0.3 - Math.PI * 0.15) + parentSpark.rad + parentSpark.direct;
				var spark = {
					x: parentSpark.x,
					y: parentSpark.y,
					size: parentSpark.size * 0.6,
					fill: color,
					vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
					vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
					ay: 0.02,
					alpha: 1,
					rad: rad,
					direct: parentSpark.direct,
					chain: parentSpark.chain,
					life: parentSpark.base.life * 0.8
				};
				spark.base = {
					life: spark.life,
					size: spark.size,
					velocity: velocity
				};
				this.listSpark.push(spark);
			}

			if (Math.random() > 0.9 && parentSpark.chain > 1) {
				// play sound
				// playExpSound();
			}
		}
		return color;
	}
  

}
customElements.define('lunar-event', LunarEvent)
