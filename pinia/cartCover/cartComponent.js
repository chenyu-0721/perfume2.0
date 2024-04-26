import cartStore from "../store/cartStore.js";
const { mapActions, mapState } = Pinia;

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

<div class="album py-5 bg-light">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4">
          <table class="table align-middle">
                        <td>
                          <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#patchStaticBackdrop"
                              >新增</button>
                        </td>
              <tbody>
                  <tr>
                      <td>圖片</td>
                      <td>名稱</td>
                      <td>類別</td>
                      <td>價錢</td>
                      <td>容量</td>
                      <td>編輯/刪除</td>
                  </tr>
                  <tr v-for="(item) in perfume">
                      <td>
                          <img :src="item.image" class="table-image" alt="">
                      </td>
                      <td>{{item.title}}</td>
                      <td>{{item.category}}</td>
                      <td>{{item.price}}</td>
                      <td>{{item.unit}}</td>
                      <td>
                          <button type="button" class="btn btn-danger"
                              @click="removeCardItem(item._id)">刪除</button>
                          <button @click="updateCardItem(item)" type="button" class="btn btn-primary"
                              data-bs-toggle="modal" data-bs-target="#staticBackdrop">編輯
                          </button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</div>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">編輯資料</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

              <div>
                  <p>香水名稱：<input type="text" class="perfume-title1" :value="getPerfumeData.title"></p>
              </div>

              <div>
                  <p>香水類別：<input type="text" class="perfume-category" :value="getPerfumeData.category"></p>
              </div>

              <div>
                  <p>香水價錢：<input type="text" class="perfume-price" :value="getPerfumeData.price"></p>
              </div>

              <div>
                  <p>香水容量：<input type="text" class="perfume-unit" :value="getPerfumeData.unit"></p>
              </div>

          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">返回</button>
              <button type="button" @click="handleButtonClick(getPerfumeData._id)" class="btn btn-primary"
                  data-bs-dismiss="modal">儲存</button>
          </div>
      </div>
  </div>
</div>

<div class="modal fade" id="patchStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">編輯資料</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div>
                  <p>香水照片：<input type="text" class="perfume-image-post" ></p>
              </div>

              <div>
                  <p>香水名稱：<input type="text" class="perfume-title1-post" ></p>
              </div>

              <div>
                  <p>香水類別：<input type="text" class="perfume-category-post" ></p>
              </div>

              <div>
                  <p>香水價錢：<input type="text" class="perfume-price-post" ></p>
              </div>

              <div>
                  <p>香水容量：<input type="text" class="perfume-unit-post" ></p>
              </div>

          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">返回</button>
              <button type="button" @click="postDataCotent()" class="btn btn-primary"
                  data-bs-dismiss="modal">新增</button>
          </div>
      </div>
  </div>
</div>




  `,
  mounted() {
    axios
      .get("https://perfume-express-pty3.onrender.com/posts")
      .then((response) => {
        this.perfume = response.data.data;
        // console.log(this.perfume[0]._id);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  },
  methods: {
    ...mapActions(cartStore, [
      "removeCardItem",
      "updateCardItem",
      "handleButtonClick",
      "postDataCotent",
    ]), // 取出方法
  },
  computed: {
    ...mapState(cartStore, ["getPerfumeData"]),
  },
};
