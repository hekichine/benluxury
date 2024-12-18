$(document).ready(function () {
  // sticky header
  $(window).scroll(function () {
    var sticky = $(".nitro-navbar"),
      scroll = $(window).scrollTop();

    if (scroll >= 46) sticky.addClass("header-sticky");
    else sticky.removeClass("header-sticky");
  });
  // parallax layer

  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    this.querySelectorAll(".layer-item").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  // isotope
  var $grid = $(".isotope-grid").isotope({
    itemSelector: ".isotope-item",
    layoutMode: "fitRows",
  });
  // bind filter button click
  $(".filters-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $(".filters-button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function () {
      $buttonGroup.find(".active").removeClass("active");
      $(this).addClass("active");
    });
  });

  // tabs
  $(".tab").click(function () {
    let data = $(this).attr("data-tabs");
    $(".tab.active").removeClass("active");
    $(this).addClass("active");
    $(".tabs-slide.active").removeClass("active");
    $(".tabs-slide" + "." + data).addClass("active");
  });

  //install app
  $(".install-ec").click(function (e) {
    e.preventDefault();
    // window.open(
    //   `https://ecomposer.app/install?shop=${$("#input_install").val()}`,
    //   "_blank"
    // );
  });
});
let dataProducts = [
  {
    id: 1,
    title: "External Zoom",
    img_url: "./assets/images/tabs/products/external-zoom.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/products/boy-shirt-in-crinkle-gingham?view=iexternal-zoom&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 2,
    title: "Extra Top Rate",
    img_url: "./assets/images/tabs/products/extra-top-rate.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/men/products/knitted-lace-up-sneakers?view=product-extra-top-rate&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 3,
    title: "Grouped Products",
    img_url: "./assets/images/tabs/products/group-products.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/men/products/airism-full-zip-hoodie?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 4,
    title: "Inner Zoom",
    img_url: "./assets/images/tabs/products/inner-zoom.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/products/boy-shirt-in-crinkle-gingham?view=inner-zoom?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 5,
    title: "3D, AR Models",
    img_url: "./assets/images/tabs/products/product-3d.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/bags/products/dance-bag-nylon?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 6,
    title: "360° viewer",
    img_url: "./assets/images/tabs/products/product-360.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/desks-tables/products/dsw-chair?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 7,
    title: "Product Carousel",
    img_url: "./assets/images/tabs/products/product-carousel.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women/products/ultrabreathe-sports-bra?view=product-thumbs-carousel&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 8,
    title: "Options & Customizer",
    img_url: "./assets/images/tabs/products/product-option.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/products/fly-front-polo-shirt?view=options-customizer&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 9,
    title: "Product Sidebar",
    img_url: "./assets/images/tabs/products/product-sidebar.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/best-seller/products/windproof-fluffy-fleece?view=product-sidebar&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 10,
    title: "Product Thumbnail",
    img_url: "./assets/images/tabs/products/product-thumbnail.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/best-seller/products/windproof-fluffy-fleece?view=product-thumbs-right&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 11,
    title: "Product Video",
    img_url: "./assets/images/tabs/products/product-video.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women/products/products-jersey-puff-sleeve-top?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 12,
    title: "Sidebar Hide",
    img_url: "./assets/images/tabs/products/sidebar-hide.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/sale-off/products/cashmere-lined-leather-gloves?view=product-sidebar-hide?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 13,
    title: "Variable Product",
    img_url: "./assets/images/tabs/products/variable-product.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/men/products/knitted-lace-up-sneakers?preview_theme_id=136130756856",
    target: "_blank",
  },
];
let render_Products = () => {
  const htmls = dataProducts.map((item, index) => {
    return `
  <div class="col-item col-12 col-md-6 col-lg-13">
    <div class="col-inner">
      <div class="col-img ratio">
        <img loading="lazy" width="514" height="289" data-src="${
          item.img_url
        }" alt="" class="lazyload" />
        <a href="${item.link_url}" target="_blank" ></a>
      </div>
      <div class="col-title">
        <a href="${item.link_url}" target="_blank" >${index + 1}. ${
      item.title
    }</a>
      </div>
    </div>
  </div>`;
  });
  document.querySelector(".product-slide").innerHTML = htmls.join("");
};
render_Products();

let dataCollections = [
  {
    id: 1,
    title: "Loadmore Button",
    img_url: "./assets/images/tabs/Collection/load-more-button.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women?view=loadmore",
    target: "_blank",
  },
  {
    id: 2,
    title: "Collections List",
    img_url: "./assets/images/tabs/Collection/shop-colletion-list.jpg",
    link_url: "https://demo-zonex.myshopify.com/collections",
    target: "_blank",
  },

  {
    id: 3,
    title: "Default",
    img_url: "./assets/images/tabs/Collection/shop-default.jpg",
    link_url: "https://demo-zonex.myshopify.com/collections/women",
    target: "_blank",
  },
  {
    id: 4,
    title: "Drawer Sidebar",
    img_url: "./assets/images/tabs/Collection/shop-drawer-sidebar.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women?view=drawer-sidebar",
    target: "_blank",
  },
  {
    id: 5,
    title: "Fullwidth",
    img_url: "./assets/images/tabs/Collection/shop-full-width.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women?view=fullwidth",
    target: "_blank",
  },
  {
    id: 6,
    title: "Left Sidebar",
    img_url: "./assets/images/tabs/Collection/shop-left-sidebar.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women?view=left-sidebar",
    target: "_blank",
  },
  {
    id: 7,
    title: "Right Sidebar",
    img_url: "./assets/images/tabs/Collection/shop-right-sidebar.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women?view=right-sidebar",
    target: "_blank",
  },
];
let render_Collections = () => {
  const htmls = dataCollections.map((item, index) => {
    return `
  <div class="col-item col-12 col-md-6 col-lg-13">
    <div class="col-inner">
      <div class="col-img ratio">
        <img loading="lazy" data-src="${
          item.img_url
        }" alt="" class="lazyload" />
        <a href="${item.link_url}" target="_blank" ></a>
      </div>
      <div class="col-title">
        <a href="${item.link_url}" target="_blank" >${index + 1}. ${
      item.title
    }</a>
      </div>
    </div>
  </div>`;
  });
  document.querySelector(".collection-slide").innerHTML = htmls.join("");
};
render_Collections();

let dataBlogs = [
  {
    id: 1,
    title: "Blog Classic",
    img_url: "./assets/images/tabs/blogs/blog-classic.jpg",
    link_url: "https://demo-zonex.myshopify.com/blogs/fashion?view=classic",
    target: "_blank",
  },
  {
    id: 2,
    title: "Blog Grid",
    img_url: "./assets/images/tabs/blogs/blog-grid.jpg",
    link_url: "https://demo-zonex.myshopify.com/blogs/fashion",
    target: "_blank",
  },
  {
    id: 3,
    title: "Blog List",
    img_url: "./assets/images/tabs/blogs/blog-list.jpg",
    link_url: "https://demo-zonex.myshopify.com/blogs/fashion?view=list",
    target: "_blank",
  },
  {
    id: 4,
    title: "Blog Masory",
    img_url: "./assets/images/tabs/blogs/blog-masory.jpg",
    link_url: "https://demo-zonex.myshopify.com/blogs/fashion?view=masonry",
    target: "_blank",
  },
  {
    id: 5,
    title: "Blog Packery",
    img_url: "./assets/images/tabs/blogs/blog-pakery.jpg",
    link_url: "https://demo-zonex.myshopify.com/blogs/fashion?view=packery",
    target: "_blank",
  },
  {
    id: 6,
    title: "Post Parallax",
    img_url: "./assets/images/tabs/blogs/post-scroll.jpg",
    link_url:
      "https://demo-zonex.myshopify.com/blogs/news/white-shirts-and-blue-jeans-never-go-out-of-fashion?view=parallax",
    target: "_blank",
  },
];
let renderBlog = () => {
  const htmls = dataBlogs.map((item, index) => {
    return `
  <div class="col-item col-12 col-md-6 col-lg-13">
    <div class="col-inner">
      <div class="col-img ratio">
        <img loading="lazy" data-src="${
          item.img_url
        }" alt="" class="lazyload" />
        <a href="${item.link_url}" target="_blank" ></a>
      </div>
      <div class="col-title">
        <a href="${item.link_url}" target="_blank" >${index + 1}. ${
      item.title
    }</a>
      </div>
    </div>
  </div>`;
  });
  document.querySelector(".blogs-slide").innerHTML = htmls.join("");
};
renderBlog();
let dataPages = [
  {
    id: 1,
    title: "About Us",
    img_url: "./assets/images/tabs/pages/about-1.jpg",
    link_url: "https://demo-zonex.myshopify.com/pages/about-us",
    target: "_blank",
  },
  {
    id: 2,
    title: "About Me",
    img_url: "./assets/images/tabs/pages/about-me.jpg",
    link_url: "https://demo-zonex.myshopify.com/pages/about-me",
    target: "_blank",
  },
  {
    id: 3,
    title: "Contact 01",
    img_url: "./assets/images/tabs/pages/contact-1.jpg",
    link_url: "https://demo-zonex.myshopify.com/pages/contact-1",
    target: "_blank",
  },
  {
    id: 4,
    title: "Contact 02",
    img_url: "./assets/images/tabs/pages/contact-2.jpg",
    link_url: "https://demo-zonex.myshopify.com/pages/contact-2",
    target: "_blank",
  },
  {
    id: 5,
    title: "FAQs 01",
    img_url: "./assets/images/tabs/pages/faq1.jpg",
    link_url: "https://demo-zonex.myshopify.com/pages/faq",
    target: "_blank",
  },
  {
    id: 6,
    title: "FAQs 02",
    img_url: "./assets/images/tabs/pages/faq2.jpg",
    link_url: "https://demo-zonex.myshopify.com/pages/faqs-2",
    target: "_blank",
  },
  {
    id: 7,
    title: "Our Team",
    img_url: "./assets/images/tabs/pages/our-team.jpg",
    link_url: "https://demo-zonex.myshopify.com/pages/our-team",
    target: "_blank",
  },
  {
    id: 8,
    title: "404 Error",
    img_url: "./assets/images/tabs/pages/404.jpg",
    link_url: "https://demo-zonex.myshopify.com/pages/404",
    target: "_blank",
  },
];
let renderPages = () => {
  const htmls = dataPages.map((item, index) => {
    return `
  <div class="col-item col-12 col-md-6 col-lg-13">
    <div class="col-inner">
      <div class="col-img ratio">
        <img loading="lazy" data-src="${
          item.img_url
        }" alt="" class="lazyload" />
        <a href="${item.link_url}" target="_blank" ></a>
      </div>
      <div class="col-title">
        <a href="${item.link_url}" target="_blank" >${index + 1}. ${
      item.title
    }</a>
      </div>
    </div>
  </div>`;
  });
  document.querySelector(".pages-slide").innerHTML = htmls.join("");
};
renderPages();

var flkty = new Flickity("#product", {
  freeScroll: true,
  contain: true,
  prevNextButtons: false,
  pageDots: true,
});

var progressBar = document.querySelector("#product-progress-bar");
flkty.on("scroll", function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = Math.max(0.05, progress) * 100 + "%";
});

var flkty2 = new Flickity("#collection", {
  freeScroll: true,
  contain: true,
  prevNextButtons: false,
  pageDots: true,
});

var progressBar2 = document.querySelector("#collection-progress-bar");
flkty2.on("scroll", function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar2.style.width = Math.max(0.05, progress) * 100 + "%";
});

var flkty3 = new Flickity("#blog", {
  freeScroll: true,
  contain: true,
  prevNextButtons: false,
  pageDots: true,
});

var progressBar3 = document.querySelector("#blog-progress-bar");
flkty3.on("scroll", function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar3.style.width = Math.max(0.05, progress) * 100 + "%";
});
4;
var flkty4 = new Flickity("#page", {
  freeScroll: true,
  contain: true,
  prevNextButtons: false,
  pageDots: true,
});

var progressBar4 = document.querySelector("#page-progress-bar");
flkty4.on("scroll", function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar4.style.width = Math.max(0.05, progress) * 100 + "%";
});

let data = [
  {
    src_img: "./assets/images/page-demo/7_rtl.jpg",
    title: "Home RTL",
    sub: "Home Lookbook RTL",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/ar?preview_theme_id=136161984760",
  },
  {
    src_img: "./assets/images/page-demo/1.jpg",
    title: "Home Fashion 01",
    sub: "Home Default",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136130756856",
  },
  {
    src_img: "./assets/images/page-demo/2.jpg",
    title: "Home Fashion 02",
    sub: "Home Season",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136150483192",
  },
  {
    src_img: "./assets/images/page-demo/3.jpg",
    title: "Home Fashion 03",
    sub: "Home Classic",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136156020984",
  },
  {
    src_img: "./assets/images/page-demo/4.jpg",
    title: "Home Fashion 04",
    sub: "Home Slide Show",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136160870648",
  },
  {
    src_img: "./assets/images/page-demo/5.jpg",
    title: "Home Fashion 05",
    sub: "Home Categories",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136131707128",
  },
  {
    src_img: "./assets/images/page-demo/6.jpg",
    title: "Home Fashion 06",
    sub: "Home Best Selling",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136156152056",
  },
  {
    src_img: "./assets/images/page-demo/7.jpg",
    title: "Home Fashion 07",
    sub: "Home Lookbook",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136161984760",
  },
  {
    src_img: "./assets/images/page-demo/8.jpg",
    title: "Home Fashion 08",
    sub: "Home Collection",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136167194872",
  },
  {
    src_img: "./assets/images/page-demo/9.jpg",
    title: "Home Fashion 09",
    sub: "Home New Trend",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136135639288",
  },
  {
    src_img: "./assets/images/page-demo/10.jpg",
    title: "Home Fashion 10",
    sub: "Home Menu Vertical",
    cate: "fashion",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136150122744",
  },
  {
    src_img: "./assets/images/page-demo/16.jpg",
    title: "Home 11",
    sub: "Home Furniture 01",
    cate: "furniture",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136155070712",
  },
  {
    src_img: "./assets/images/page-demo/17.jpg",
    title: "Home 12",
    sub: "Home Furniture 02",
    cate: "furniture",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136161231096",
  },
  {
    src_img: "./assets/images/page-demo/22.jpg",
    title: "Home 13",
    sub: "Home Digital",
    cate: "electronics",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136136229112",
  },
  {
    src_img: "./assets/images/page-demo/23.jpg",
    title: "Home 14",
    sub: "Home Flower",
    cate: "flower",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136161526008",
  },
  {
    src_img: "./assets/images/page-demo/24.jpg",
    title: "Home 15",
    sub: "Home Sport",
    cate: "sport",
    link_url: "https://demo-zonex.myshopify.com/?preview_theme_id=136166703352",
  },
  {
    src_img: "./assets/images/page-demo/18.jpg",
    title: "Home 16",
    sub: "Home Furniture 03",
    cate: "furniture",
    link_url:
      "https://demo-zonex-2.myshopify.com/?preview_theme_id=135949648099",
  },
  {
    src_img: "./assets/images/page-demo/19.jpg",
    title: "Home 17",
    sub: "Home Furniture 04",
    cate: "furniture",
    link_url:
      "https://demo-zonex-2.myshopify.com/?preview_theme_id=135971471587",
  },
  {
    src_img: "./assets/images/page-demo/20.jpg",
    title: "Home 18",
    sub: "Home Furniture 05",
    cate: "furniture",
    link_url:
      "https://demo-zonex-2.myshopify.com/?preview_theme_id=135960920291",
  },
  {
    src_img: "./assets/images/page-demo/21.jpg",
    title: "Home 19",
    sub: "Home Furniture 06",
    cate: "furniture",
    link_url:
      "https://demo-zonex-2.myshopify.com/?preview_theme_id=135973208291",
  },
  {
    src_img: "./assets/images/page-demo/11.jpg",
    title: "Home 20",
    sub: "Home Fashion 11",
    cate: "fashion",
    link_url:
      "https://demo-zonex-2.myshopify.com/?preview_theme_id=135949713635",
  },
  {
    src_img: "./assets/images/page-demo/12.jpg",
    title: "Home 21",
    sub: "Home Fashion 12",
    cate: "fashion",
    link_url:
      "https://demo-zonex-2.myshopify.com/?preview_theme_id=135950696675",
  },
  {
    src_img: "./assets/images/page-demo/13.jpg",
    title: "Home 22",
    sub: "Home Fashion 13",
    cate: "fashion",
    link_url:
      "https://demo-zonex-2.myshopify.com/?preview_theme_id=135954104547",
  },
  {
    src_img: "./assets/images/page-demo/14.jpg",
    title: "Home 23",
    sub: "Home Fashion 14",
    cate: "fashion",
    link_url:
      "https://demo-zonex-2.myshopify.com/?preview_theme_id=135964393699",
  },
  {
    src_img: "./assets/images/page-demo/15.jpg",
    title: "Home 24",
    sub: "Home Fashion 15",
    cate: "fashion",
    link_url:
      "https://demo-zonex-2.myshopify.com/?preview_theme_id=135964721379",
  },
];

let grid = document.querySelector(".isotope-grid");

let htmls = data?.map((item, index) => {
  return `
  <div class="page-item isotope-item ${item?.cate} ratio-page-demo col-12 col-md-6 col-lg-4">
                <div class="page-inner">
                  <div class="page-img">
                    <div class="page-img-inner ratio">
                      <img loading="lazy" src=${item?.src_img} alt="" />

                      <div
                        class="overlay d-flex justify-content-center align-items-center text-center flex-column"
                      >
                        <div class="icon">
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="25"
                              cy="25"
                              r="24"
                              stroke="white"
                              stroke-width="1.5"
                            />
                            <path
                              d="M25 17.5864V22.0264"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M36.4532 29.2265C37.4266 30.8532 36.6532 32.9598 34.8532 33.5598C28.4799 35.6798 21.5866 35.6798 15.2132 33.5598C13.2932 32.9198 12.5599 30.9732 13.6132 29.2265L15.3066 26.3998C15.7732 25.6265 16.1466 24.2532 16.1466 23.3598V20.5598C16.1466 15.6398 20.1199 11.6665 25.0266 11.6665C29.9066 11.6665 33.9066 15.6665 33.9066 20.5465V23.3465C33.9066 23.5865 33.9332 23.8532 33.9732 24.1332"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M29.4401 34.0933C29.4401 36.5333 27.4401 38.5333 25.0001 38.5333C23.7867 38.5333 22.6667 38.0266 21.8667 37.2266C21.0667 36.4266 20.5601 35.3066 20.5601 34.0933"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                          </svg>
                        </div>
                        <p>
                          Please enter password <span>4</span><br />
                          to view the demo
                        </p>
                        <a href=${item?.link_url} target="_blank" >View demo</a>
                      </div>
                    </div>
                  </div>
                  <div class="page-title">
                    <a href=${item?.link_url} target="_blank" >${item?.title}</a>
                    <p class="page-subtitle">${item?.sub}</p>
                  </div>
                </div>
              </div>
  `;
});
grid.innerHTML = htmls.join(" ");
