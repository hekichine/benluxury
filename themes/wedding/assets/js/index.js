import Lightbox from "../lib/js/photoswipe-lightbox.esm.min.js";
// Wowjs
new WOW().init();

// STRUCTOR

console.log("%c 1. Scroll image in: https://tympanus.net/Development/SliceRevealer/index3.html", "color: red;font-weight: 600;font-size: 14px;");

// END STRUCTOR

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#hero_slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  $(".album_list").isotope({
    layoutMode: "packery",
    itemSelector: ".album_item",
  });

  const lightbox = new Lightbox({
    gallery: ".album_list",
    children: "a",
    pswpModule: () => import("../lib/js/photoswipe.esm.min.js"),
    bgOpacity: 0.8,
    wheelToZoom: true,
    loop: true,
    padding: { top: 20, bottom: 20, left: 20, right: 20 },
  });
  lightbox.init();
});

function isSafari() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /safari/.test(userAgent) && !/chrome/.test(userAgent);
}

if (isSafari()) {
  console.log("Đang sử dụng trình duyệt Safari");
} else {
  console.log("Không phải trình duyệt Safari");
}
// time line

const timeLines = () => {
  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [],
  };
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // observer.unobserve(entry.target);
        entry.target.classList.add("in-sight");
      }
    });
  };
  let observer = new IntersectionObserver(callback, observerOptions);

  let time_lines = document.querySelectorAll("time-line");
  time_lines.forEach((el) => {
    observer.observe(el);
  });
};
timeLines();

class AudioCustom extends HTMLElement {
  constructor() {
    super();
    this.audio = this.querySelector("audio");
    this.control = this.querySelector("button");
    this.visualizer = this.querySelector("#visualizer");
    this.isPlay = false;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.count = 0;
    if (!this.audio || !this.control) {
      return;
    }
    this.control.addEventListener("click", this.playMusic.bind(this));
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.visualizer.width = this.width;
      this.visualizer.height = this.height;
    });
  }
  playMusic() {
    if (this.isPlay) {
      this.audio.pause();
      this.control.classList.remove("active");
    } else {
      this.audio.play();
      if (this.count == 0 && !isSafari()) {
        this.visualizerFnc();
        this.count++;
      }
      this.control.classList.add("active");
    }
    this.isPlay = !this.isPlay;
  }
  visualizerFnc() {
    this.visualizer.width = this.width;
    this.visualizer.height = this.height;
    const cCtx = visualizer.getContext("2d");
    let analyser, bufferLength, dataArray, aCtx, src;

    aCtx = new AudioContext();
    src = aCtx.createMediaElementSource(this.audio);

    analyser = aCtx.createAnalyser();
    src.connect(analyser);

    analyser.fftSize = 128;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    analyser.connect(aCtx.destination);

    this.audio.addEventListener("load", () => {
      URL.revokeObjectURL(file);
    });
    let self = this;
    this.audio.addEventListener("playing", (e) => {
      function draw() {
        analyser.getByteFrequencyData(dataArray);

        cCtx.clearRect(0, 0, self.width, self.height);
        cCtx.beginPath();

        // const sliceWidth = self.width / bufferLength;
        const sliceWidth = 1;

        for (let i = 0; i < bufferLength * 3; i++) {
          let value_in_ratio = dataArray[i % bufferLength] / 256;

          cCtx.fillStyle = `hsl(${value_in_ratio * 270}, 100%, 50%)`;

          cCtx.save();
          cCtx.translate(self.width / 2, self.height / 2);
          cCtx.rotate(((i / bufferLength) * 240 * Math.PI) / 180);
          cCtx.translate((self.width / 2) * -1, (self.height / 2) * -1);

          cCtx.fillRect(
            self.width / 2,
            self.height / 2,
            sliceWidth,
            value_in_ratio * (self.height / 2) * -1
          );

          cCtx.restore();
          cCtx.stroke();
        }
        requestAnimationFrame(draw);
      }
      draw();
    });
  }
}
customElements.define("audio-custom", AudioCustom);


// countdown
class CountDown extends HTMLElement{
  constructor(){
    super();
    this.config = JSON.parse(this.getAttribute('config'));
    this.ctn = this.querySelector('.e-container');
    this.message = this.querySelector('.message');
    this.day = this.querySelector('[e-day]');
    this.hour = this.querySelector('[e-hour]');
    this.minute = this.querySelector('[e-minute]');
    this.second = this.querySelector('[e-second]');

    if(!this.config || !this.config.time){
      return;
    }
    this.handle();
  }
  handle(){
    const countDownDate = new Date(this.config.time).getTime();
    const timeClear = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = countDownDate - now;
      if(this.config?.finish){
        if(timeLeft < 0){
          clearInterval(timeClear);
          this.ctn.setAttribute('hidden','');
          if(this.message){
            this.message.innerHTML = this.config?.message;
            this.message.removeAttribute('hidden');
          }
          this.classList.add('timer-done');
          return;
        }
      }

      const days = Math.floor(timeLeft / (1000*60*60*24)).toString().padStart(2, '0');
      const hours = Math.floor((timeLeft % (1000*60*60*24)) / (1000*60*60)).toString().padStart(2, '0');
      const minutes = Math.floor((timeLeft % (1000*60*60) / (1000*60))).toString().padStart(2, '0');
      const seconds = Math.floor((timeLeft % (1000*60) / 1000)).toString().padStart(2, '0');

      this.day.innerHTML = days;
      this.hour.innerHTML = hours;
      this.minute.innerHTML = minutes;
      this.second.innerHTML = seconds;

    }, 1000);
  }
}
customElements.define('e-countdown',CountDown);


// gift
class BoxGift extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<div class="wrapper">
        <div class="overlay">
        </div>
        <div class="body">
          <button class="close">X</button>
            <div class="content">
              <div class="heading text-center">
                <h2 class="fnt-4 heading">Hộp mừng cưới</h2>
                <p class="para">Cảm ơn tất cả các tình cảm mà các em, các bạn,<br> các anh, các chị đã dành cho Chiến & Linh</p>
              </div>
              <slot name="body"></slot>
            </div>
        </div>
      </div>
      <style>
        .wrapper{
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          pointer-events: none;
          opacity: 0;
          transition: .25s ease;
        }
        [open].wrapper{
          pointer-events: auto;
          opacity:1;

        }
        .heading{
          font-family:var(--font-family-3);
          font-size: 1.75em;
          margin-bottom: 0.3em;
          margin-top: 0;
        }
        .para{
          font-size: 16px;
          margin-bottom: 25px;
          font-family:var(--font-family-2);
        }
        .overlay{
          position: absolute;
          inset: 0;
          background-color: rgba(0,0,0,0.4);
          cursor: pointer;
          z-index: 1;
        }
        .body{
          max-height: 90vh;
          background-color: white;
          z-index: 2;
          position: relative;
        }
        .content{
          max-height: 80vh;
          overflow-y:auto;
          padding:15px;
        }
        .body button{
          width: 30px;
          height: 30px;
          font-size: 24px;
          background-color: transparent;
          border: none;
          outline: none;
          position: absolute;
          top: -30px;right: 0;
          color: white;
          cursor:pointer;
        }

      </style>`;

      this.shadowRoot.querySelector('button.close').addEventListener('click', ()=>{
        this.closeModal();
      });
      this.shadowRoot.querySelector('.overlay').addEventListener('click', ()=> {
        this.closeModal();
      });
      this.wrapper = this.shadowRoot.querySelector('.wrapper');
      this.body = document.querySelector('body');
  }
  static observedAttributes = ['open'];
  get open(){
    return this.hasAttribute('open');
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.open ? this.wrapper.setAttribute('open', '') : this.wrapper.removeAttribute('open');
  }
  connectedCallback(){
    this.showbtnpopup = document.querySelector('button.btn-gift');
    if(this.showbtnpopup){
      this.showbtnpopup.addEventListener('click', () => {
          this.setAttribute('open','');
          this.body.style.setProperty('overflow','hidden');
      });
    }
  }
  closeModal(){
    if(this.open){
      this.wrapper.removeAttribute('open');
      this.body.style.removeProperty('overflow')
    }
  }
}
customElements.define('box-gift',BoxGift);

class OnLoad extends HTMLElement{
  constructor(){
    super();
    this.btn = this.querySelector('button.open-site');
    this.body = document.querySelector('.body');
    this.timeer;
    document.addEventListener('DOMContentLoaded', ()=>{
      this.btn.style.opacity = '1';
      this.timeer = setTimeout(()=> {
        this.onLoaded();
        clearTimeout(this.timeer);
      }, 5000);
    })

    this.btn.addEventListener('click', () => {
      this.onLoaded();
      clearTimeout(this.timeer);
    });
  }
  onLoaded(){
    this.classList.add('loaded');
    const body_timer = setTimeout(() => {
      this.body.style.opacity = '1';
      clearTimeout(body_timer);
    }, 1000);
  }
}
customElements.define('on-load',OnLoad);