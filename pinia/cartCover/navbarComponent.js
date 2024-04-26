import productsStore from "../store/productsStore.js";

const { mapState } = Pinia;

export default {
  data() {
    return {
      perfume: [], // 在 data 选项中定义 perfume
     
    };
  },
  template: ` 
  
  <nav class="container container_text navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
      <a class="navbar-brand" href="#"><img class="navbar_img" src="./img/d’Perfume@2x.png"></a>
      <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto mb-2 mb-md-0">
              <li class="nav-item">
                  <a href="#" class="nav-link" aria-current="page">
                      <i class="bi bi-shop navbar_icon"></i>
                      <span class="navbar_span">Product</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link " aria-current="page">
                      <i class="bi bi-person-fill navbar_icon"></i>
                      <span class="navbar_span">log in</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link " aria-current="page">
                      <i class="bi bi-heart navbar_icon"></i>
                      <span class="navbar_span">Wishlist</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link " aria-current="page">
                      <i class="bi bi-cart navbar_icon"></i>
                      <span class="navbar_span">Cart(3)</span>
                  </a>
              </li>
              <li class="nav-item">
              <a href="#/cart" class="nav-link " aria-current="page">
                  <i class="bi bi-gear navbar_icon"></i>
                  <span class="navbar_span">後台</span>
              </a>
          </li>
          </ul>
      </div>
  </div>
</nav>


<div>
<div class="album  ">
    <div class="container_bg  ">
        <div class=" d-flex flex-wrap navbar2_bg ">
            <ul class="container navbar2_container nav nav-pills">
                <li class="nav-item">
                    <a href="#" class="nav-link " aria-current="page">
                        <span class="navbar2_span">全部商品</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link " aria-current="page">
                        <span class="navbar2_span">清新海洋</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link " aria-current="page">
                        <span class="navbar2_span">木質</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link " aria-current="page">
                        <span class="navbar2_span">花香調</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link " aria-current="page">
                        <span class="navbar2_span">果香調</span>
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
      <div class="col " v-for="product in perfume">
          <div class="card">
              <a>
                  <img :src="product.image" class="card-img-top " alt="">
              </a>
              <div class="card-body">
                  <span class="card-title">{{ product.title }}</span>
                  <br>
                  <span class="card-infor">{{ product.category }}</span>
                  <br>
                  <span class="card-price">NT\${{ product.price }}</span>
                  <span class="card-price ms-2 card-span-text"><del>NT\${{ product.origin_price }}</del></span>
                  <br>
                  <i class="bi bi-heart-fill"></i>
                  <i class="bi bi-cart-fill"></i>
              </div>
          </div>
      </div>
  </div>
</div>

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

<div>
<div class="container-footer">
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <img class="navbar_img" src="./img/d’Perfumew@2x.png">
        </a>
      </div>

      <ul class="nav col-md-4 justify-content-center list-unstyled d-flex">
        <li class="ms-3"><a href="#" class="footer-li">Product</a></li>
        <li class="ms-3"><a href="#" class="footer-li">Blog</a></li>
        <li class="ms-3"><a href="#" class="footer-li">Contact</a></li>
      </ul>
    </footer>
  </div>
</div>
</div>

  `,
  mounted() {
    axios
      .get("https://perfume-express-pty3.onrender.com/posts")
      .then((response) => {
        this.perfume = response.data.data;
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  },
};
