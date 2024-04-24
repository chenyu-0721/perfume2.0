import productsStore from "../store/productsStore.js";
const { mapState, mapActions } = Pinia;

export default {
  template: ` 
  

  <div>
  <div class="album  ">
      <div class="container_bg  ">
          <div class=" d-flex flex-wrap navbar2_bg ">
              <ul class="container navbar2_container nav nav-pills">
                  <li class="nav-item">
                      <a href="#" class="nav-link " aria-current="page">
                          <span class="navbar2_span">CHANEL</span>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="nav-link " aria-current="page">
                          <span class="navbar2_span">Jo Malone</span>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="nav-link " aria-current="page">
                          <span class="navbar2_span">Curology</span>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="nav-link " aria-current="page">
                          <span class="navbar2_span">Dior</span>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="nav-link " aria-current="page">
                          <span class="navbar2_span">Chloe</span>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="nav-link " aria-current="page">
                          <span class="navbar2_span">ZARA</span>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</div>


<div class="album py-5 ">
<div class="container ">
  <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3  ">
      <div class="col " v-for="product in sortProducts">
          <div class="card">
              <a>
                  <img :src="product.imageUrl" class="card-img-top " alt="">
              </a>
              <div class="card-body">
                  <span class="card-title">{{ product.title }}</span>
                  <br>
                  <span class="card-infor">{{ product.infor }}</span>
                  <br>
                  <span class="card-price">{{ product.price }}</span>
                  <span class="card-price ms-2 card-span-text"><del>{{ product.sale }}</del></span>
                  <br>
                  <i class="bi bi-heart-fill"></i>
                  <i class="bi bi-cart-fill"></i>
              </div>
          </div>
      </div>
  </div>
</div>
<nav aria-label="...">
  <ul class="pagination justify-content-center">
      <li class="page-item">
          <span class=""><a href="#" class="num_a">1</a></span>
      </li>
      <li class="page-item">
          <span class=""><a href="#" class="num_a">2</a></span>
      </li>
      <li class="page-item">
          <span class=""><a href="#" class="num_a">3</a></span>
      </li>
  </ul>
</nav>
</div>


<section class="subscription">
<div class="container" data-v-c6d36319="">
  <div class="row" data-v-c6d36319="">
      <div class="col-md-4">
          <h3 class="fs-1 fw-bold c_gray mb-4">記得<br data-v-c6d36319="">訂閱以獲取更多資訊！</h3>
          <div class="input d-flex"><input class="email-input" type="text" placeholder="Your email address"><a
                  class="subscription-btn text-white w-100 d-flex justify-content-center align-items-center"
                  href="javascript:;">Subscribe</a>
          </div>
      </div>
  </div>
</div>
</section>




  `,
  computed: {
    ...mapState(productsStore, ["sortProducts"]),
  },
};
