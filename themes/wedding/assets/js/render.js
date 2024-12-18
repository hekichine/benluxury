// Slider
const slides = [
  {
    id: 1,
    slide_img: "https://cdn.shopify.com/s/files/1/0662/4464/0868/files/IMG_5027.jpg?v=1723780792",
    content: {
      content_img: "./assets/images/slide_bg.png",
      title: "Xuân Chiến ♥️ Lê Linh",
      date: "Chủ nhật, ngày 22 - 09 - 2024"
    }
  },
  {
    id: 1,
    slide_img: "https://cdn.shopify.com/s/files/1/0662/4464/0868/files/IMG_4908.jpg?v=1723780794",
    content: {
      content_img: "./assets/images/slide_bg.png",
      title: "Xuân Chiến ♥️ Lê Linh",
      date: "Chủ nhật, ngày 22 - 09 - 2024"
    }
  },
  {
    id: 1,
    slide_img: "https://cdn.shopify.com/s/files/1/0662/4464/0868/files/IMG_4935.jpg?v=1723780794",
    content: {
      content_img: "./assets/images/slide_bg.png",
      title: "Xuân Chiến ♥️ Lê Linh",
      date: "Chủ nhật, ngày 22 - 09 - 2024"
    }
  },
  {
    id: 1,
    slide_img: "https://cdn.shopify.com/s/files/1/0662/4464/0868/files/IMG_5028.jpg?v=1723780793",
    content: {
      content_img: "./assets/images/slide_bg.png",
      title: "Xuân Chiến ♥️ Lê Linh",
      date: "Chủ nhật, ngày 22 - 09 - 2024"
    }
  }
]

const app = {
  slider: () => {
    const slider_root =  document.querySelector('#slider_inner');
    const htmls = slides.map((slide,index) => {
      return `<div class="swiper-slide slide-item">
      <div class="slide-inner">
        <picture class="ratio">
          <img src="${slide.slide_img}" alt="slide image">
        </picture>
        <div class="slide-content">
          <div class="slide-c-img" style="max-width: min(350px,50vw);">
            <img src="${slide.content.content_img}" alt="">
          </div>
          <h3 class="slide-title fnt-3" style="--duration:.5s;--delay: .5s;">${slide.content.title}</h3>
          <p class="slide-text" style="--duration:.5s;--delay: .75s;">${slide.content.date}</p>
        </div>
      </div>
    </div>`
    }).join('')
    // console.log(htmls);
    // slider_root.innerHTML = htmls;

    
  },
}
const init = () => {
  app.slider();
}
document.addEventListener('DOMContentLoaded',()=> {
  init();
})