import cartStore from "../store/cartStore.js";
const { mapActions, mapState } = Pinia;

export default {
  data() {
    return {
      perfume: [], // 在 data 选项中定义 perfume
    };
  },
  template: `
  <div class="album py-5 bg-light">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4">
          <table class="table align-middle">
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
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" @click="handleButtonClick(getPerfumeData._id)" class="btn btn-primary"
                  data-bs-dismiss="modal">Save changes</button>
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
        console.log(this.perfume[0]._id);
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
    ]), // 取出方法
  },
  computed: {
    ...mapState(cartStore, ["getPerfumeData"]),
  },
};
