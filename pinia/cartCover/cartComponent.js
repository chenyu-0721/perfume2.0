export default {
  data() {
    return {
      perfume: [], // 在 data 选项中定义 perfume
      perfumedata: "",
      isLoading: true,
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

<div class="album py-5 bg-light"  v-if="isLoading">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4">
          <table class="table align-middle">
              <tbody>
                  <tr v-for="(item) in perfume" :key="item.id" class="placeholder-glow">
                      <td>
                        <div style="width: 75px; height:75px; background-color: #ccc;"></div>

                      </td>
                      <td><span class="placeholder col-4"></span></td>
                      <td><span class="placeholder col-4"></span></td>
                      <td><span class="placeholder col-4"></span></td>
                      <td><span class="placeholder col-4"></span></td>
                      <td><span class="placeholder col-4"></span></td>
                      <td>
                      <span class="placeholder col-5">
                      </td>               
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</div>


<div class="album py-5 bg-light" v-else>
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
                      <td>啟用</td>
                      <td>編輯/刪除</td>
                  </tr>
                  <tr v-for="(item) in perfume" :key="item.id" >
                      <td>
                          <img :src="item.image" class="table-image" alt="">
                      </td>
                      <td>{{item.title}}</td>
                      <td>{{item.category}}</td>
                      <td>{{item.price}}</td>
                      <td>{{item.unit}}</td>
                      <td>{{item.is_enabled}}</td>
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
                  <p>香水名稱：<input type="text" class="perfume-title-patch" v-model="perfumedata.title"></p>
              </div>

              <div>
                  <p>香水類別：<input type="text" class="perfume-category-patch" v-model="perfumedata.category"></p>
              </div>

              <div>
                  <p>香水價錢：<input type="text" class="perfume-price-patch" v-model="perfumedata.price"></p>
              </div>

              <div>
                  <p>香水容量：<input type="text" class="perfume-unit-patch" v-model="perfumedata.unit"></p>
              </div>

              <div>
                  <p>香水啟用：<input type="checkbox" class="perfume-isEnabled-patch" v-model="perfumedata.is_enabled"></p>
              </div>

          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">返回</button>
              <button type="button" @click="savePatchButtonClick(perfumedata._id)" class="btn btn-primary"
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
              <button type="button" @click="closePostButtonClick()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div>
                  <p>香水照片：<input type="text" class="perfume-image-post" ></p>
              </div>

              <div>
                  <p>香水名稱：<input type="text" class="perfume-title-post" ></p>
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

              <div>
              <p>香水啟用：<input type="checkbox" class="perfume-isEnabled-post"></p>
            </div>

          </div>
          <div class="modal-footer">
              <button type="button" @click="closePostButtonClick()" class="btn btn-secondary" data-bs-dismiss="modal">返回</button>
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
        this.isLoading = false;
        // console.log(this.perfume[0]._id);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  },
  methods: {
    removeCardItem(id) {
      // console.log("id", id);
      axios
        .delete(`https://perfume-express-pty3.onrender.com/posts/${id}`)
        .then((response) => {
          try {
            // console.log("刪除成功", response);
            this.fetchPerfumeData();
            alert("刪除成功");
          } catch {
            console.error("刪除失敗", error);
          }
        })
        .catch((error) => {
          console.log("刪除失敗:", error);
        });
    },

    updateCardItem(data) {
      this.perfumedata = { ...data };
      //   console.log("update", this.perfumedata.title);
    },

    postDataCotent() {
      const newImage = document.querySelector(".perfume-image-post").value;
      const newTitle = document.querySelector(".perfume-title-post").value;
      const newCategory = document.querySelector(
        ".perfume-category-post"
      ).value;
      const newPrice = document.querySelector(".perfume-price-post").value;
      const newUnit = document.querySelector(".perfume-unit-post").value;
      const newIsEnabled = document.querySelector(
        ".perfume-isEnabled-post"
      ).checked;

      // 创建包含需要更新的字段的对象
      const postdData = {
        image: newImage,
        title: newTitle,
        category: newCategory,
        price: newPrice,
        unit: newUnit,
        is_enabled: newIsEnabled,
      };

      // 使用 axios.patch 方法发送更新请求
      axios
        .post(`https://perfume-express-pty3.onrender.com/posts`, postdData)
        .then((response) => {
          try {
            // console.log("新增成功", response);
            this.fetchPerfumeData();
            this.closePostButtonClick();
            alert("新增成功");
          } catch {
            console.error("新增失敗", error);
          }
        })
        .catch((error) => {
          console.log("新增失敗:", error);
        });
    },

    closePostButtonClick() {
      document.querySelector(".perfume-image-post").value = "";
      document.querySelector(".perfume-title-post").value = "";
      document.querySelector(".perfume-category-post").value = "";
      document.querySelector(".perfume-price-post").value = "";
      document.querySelector(".perfume-unit-post").value = "";
      document.querySelector(".perfume-isEnabled-post").checked = false;
    },

    savePatchButtonClick(id) {
      const newTitle = document.querySelector(".perfume-title-patch").value;
      const newCategory = document.querySelector(
        ".perfume-category-patch"
      ).value;
      const newPrice = document.querySelector(".perfume-price-patch").value;
      const newUnit = document.querySelector(".perfume-unit-patch").value;
      const newIsEnabled = document.querySelector(
        ".perfume-isEnabled-patch"
      ).checked;

      //   console.log("newIsEnabled", newIsEnabled);
      // 创建包含需要更新的字段的对象
      const updatedData = {
        title: newTitle,
        category: newCategory,
        price: newPrice,
        unit: newUnit,
        is_enabled: newIsEnabled,
      };

      // 使用 axios.patch 方法发送更新请求
      axios
        .patch(
          `https://perfume-express-pty3.onrender.com/posts/${id}`,
          updatedData
        )
        .then((response) => {
          try {
            // console.log("更新成功", response);
            this.fetchPerfumeData();

            alert("更新成功");
          } catch {
            console.error("更新失敗", error);
          }
        })
        .catch((error) => {
          console.error("更新失败:", error);
        });
    },

    fetchPerfumeData() {
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
  },

  getters: {
    getPerfumeData: ({ perfumedata }) => {
      return perfumedata;
    },
  },
};
