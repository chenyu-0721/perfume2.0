import productsStore from "../store/productsStore.js";
const { mapState } = Pinia;

export default {
  template: ` 
  

 


<div class="album py-5 ">
<div class="container ">
  <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3  ">
      <div class="col "  v-for="product in sortProducts"  v-show="product.infor == '花香調'">
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
          <span class=""><a href="#/allmenu" class="num_a">1</a></span>
      </li>
      <li class="page-item">
          <span class=""><a href="#/allmenu" class="num_a">2</a></span>
      </li>
      <li class="page-item">
          <span class=""><a href="#/allmenu" class="num_a">3</a></span>
      </li>
  </ul>
</nav>
</div>


<section class="subscription">
<div class="container" >
  <div class="row" >
      <div class="col-md-4">
          <h3 class="fs-1 fw-bold c_gray mb-4">記得<br>訂閱以獲取更多資訊！</h3>
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
