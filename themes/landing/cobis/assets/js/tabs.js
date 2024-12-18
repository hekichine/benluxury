let dataProducts = [
  {
    id: 1,
    title: "External Zoom",
    img_url: "./assets/images/tabs/products/external-zoom.png",
    link_url:
      "https://demo-zonex.myshopify.com/products/boy-shirt-in-crinkle-gingham?view=iexternal-zoom&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 2,
    title: "Extra Top Rate",
    img_url: "./assets/images/tabs/products/extra-top-rate.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/men/products/knitted-lace-up-sneakers?view=product-extra-top-rate&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 3,
    title: "Grouped Products",
    img_url: "./assets/images/tabs/products/group-products.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/men/products/airism-full-zip-hoodie?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 4,
    title: "Inner Zoom",
    img_url: "./assets/images/tabs/products/inner-zoom.png",
    link_url:
      "https://demo-zonex.myshopify.com/products/boy-shirt-in-crinkle-gingham?view=inner-zoom?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 5,
    title: "3D, AR Models",
    img_url: "./assets/images/tabs/products/product-3d.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/bags/products/dance-bag-nylon?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 6,
    title: "360° viewer",
    img_url: "./assets/images/tabs/products/product-360.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/desks-tables/products/dsw-chair?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 7,
    title: "Product Carousel",
    img_url: "./assets/images/tabs/products/product-carousel.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women/products/ultrabreathe-sports-bra?view=product-thumbs-carousel&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 8,
    title: "Options & Customizer",
    img_url: "./assets/images/tabs/products/product-option.png",
    link_url:
      "https://demo-zonex.myshopify.com/products/fly-front-polo-shirt?view=options-customizer&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 9,
    title: "Product Sidebar",
    img_url: "./assets/images/tabs/products/product-sidebar.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/best-seller/products/windproof-fluffy-fleece?view=product-sidebar&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 10,
    title: "Product Thumbnail",
    img_url: "./assets/images/tabs/products/product-thumbnail.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/best-seller/products/windproof-fluffy-fleece?view=product-thumbs-right&preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 11,
    title: "Product Video",
    img_url: "./assets/images/tabs/products/product-video.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women/products/products-jersey-puff-sleeve-top?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 12,
    title: "Sidebar Hide",
    img_url: "./assets/images/tabs/products/sidebar-hide.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/sale-off/products/cashmere-lined-leather-gloves?view=product-sidebar-hide?preview_theme_id=136130756856",
    target: "_blank",
  },
  {
    id: 13,
    title: "Variable Product",
    img_url: "./assets/images/tabs/products/variable-product.png",
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
    img_url: "./assets/images/tabs/Collection/load-more-button.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women?view=loadmore",
    target: "_blank",
  },
  {
    id: 2,
    title: "Collections List",
    img_url: "./assets/images/tabs/Collection/shop-colletion-list.png",
    link_url: "https://demo-zonex.myshopify.com/collections",
    target: "_blank",
  },

  {
    id: 3,
    title: "Default",
    img_url: "./assets/images/tabs/Collection/shop-default.png",
    link_url: "https://demo-zonex.myshopify.com/collections/women",
    target: "_blank",
  },
  {
    id: 4,
    title: "Drawer Sidebar",
    img_url: "./assets/images/tabs/Collection/shop-drawer-sidebar.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women?view=drawer-sidebar",
    target: "_blank",
  },
  {
    id: 5,
    title: "Fullwidth",
    img_url: "./assets/images/tabs/Collection/shop-full-width.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women?view=fullwidth",
    target: "_blank",
  },
  {
    id: 6,
    title: "Left Sidebar",
    img_url: "./assets/images/tabs/Collection/shop-left-sidebar.png",
    link_url:
      "https://demo-zonex.myshopify.com/collections/women?view=left-sidebar",
    target: "_blank",
  },
  {
    id: 7,
    title: "Right Sidebar",
    img_url: "./assets/images/tabs/Collection/shop-right-sidebar.png",
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
    img_url: "./assets/images/tabs/blogs/blog-classic.png",
    link_url: "https://demo-zonex.myshopify.com/blogs/fashion?view=classic",
    target: "_blank",
  },
  {
    id: 2,
    title: "Blog Grid",
    img_url: "./assets/images/tabs/blogs/blog-grid.png",
    link_url: "https://demo-zonex.myshopify.com/blogs/fashion",
    target: "_blank",
  },
  {
    id: 3,
    title: "Blog List",
    img_url: "./assets/images/tabs/blogs/blog-list.png",
    link_url: "https://demo-zonex.myshopify.com/blogs/fashion?view=list",
    target: "_blank",
  },
  {
    id: 4,
    title: "Blog Masory",
    img_url: "./assets/images/tabs/blogs/blog-masory.png",
    link_url: "https://demo-zonex.myshopify.com/blogs/fashion?view=masonry",
    target: "_blank",
  },
  {
    id: 5,
    title: "Blog Packery",
    img_url: "./assets/images/tabs/blogs/blog-pakery.png",
    link_url: "https://demo-zonex.myshopify.com/blogs/fashion?view=packery",
    target: "_blank",
  },
  {
    id: 6,
    title: "Post Parallax",
    img_url: "./assets/images/tabs/blogs/post-scroll.png",
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
    img_url: "./assets/images/tabs/pages/about-1.png",
    link_url: "https://demo-zonex.myshopify.com/pages/about-us",
    target: "_blank",
  },
  {
    id: 2,
    title: "About Me",
    img_url: "./assets/images/tabs/pages/about-me.png",
    link_url: "https://demo-zonex.myshopify.com/pages/about-me",
    target: "_blank",
  },
  {
    id: 3,
    title: "Contact 01",
    img_url: "./assets/images/tabs/pages/contact-1.png",
    link_url: "https://demo-zonex.myshopify.com/pages/contact-1",
    target: "_blank",
  },
  {
    id: 4,
    title: "Contact 02",
    img_url: "./assets/images/tabs/pages/contact-2.png",
    link_url: "https://demo-zonex.myshopify.com/pages/contact-2",
    target: "_blank",
  },
  {
    id: 5,
    title: "FAQs 01",
    img_url: "./assets/images/tabs/pages/faq1.png",
    link_url: "https://demo-zonex.myshopify.com/pages/faq",
    target: "_blank",
  },
  {
    id: 6,
    title: "FAQs 02",
    img_url: "./assets/images/tabs/pages/faq2.png",
    link_url: "https://demo-zonex.myshopify.com/pages/faqs-2",
    target: "_blank",
  },
  {
    id: 7,
    title: "Our Team",
    img_url: "./assets/images/tabs/pages/our-team.png",
    link_url: "https://demo-zonex.myshopify.com/pages/our-team",
    target: "_blank",
  },
  {
    id: 8,
    title: "404 Error",
    img_url: "./assets/images/tabs/pages/404.png",
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
