const { defineStore } = Pinia;
import productsStore from "./productsStore.js";

export default defineStore("card", {
  // methods 方法
  // actions
  state: () => ({
    perfume: [],
    perfumedata: [],
  }),
  actions: {
    removeCardItem(id) {
      console.log("id", id);
      axios
        .delete(`https://perfume-express-pty3.onrender.com/posts/${id}`)
        .then((response) => {
          this.perfume = response.data.data;
          console.log("删除成功");
        })
        .catch((error) => {
          console.error("删除失败:", error);
        });
    },

    updateCardItem(data) {
      this.perfumedata = data;
    },

    handleButtonClick(id) {
      console.log("id", id);
      const Newtitle = document.querySelector(".perfume-title1").value;
      const Newcategory = document.querySelector(".perfume-category").value;
      const Newprice = document.querySelector(".perfume-price").value;
      const Newunit = document.querySelector(".perfume-unit").value;

      // 创建包含需要更新的字段的对象
      const updatedData = {
        title: Newtitle,
        category: Newcategory,
        price: Newprice,
        unit: Newunit,
      };

      // 使用 axios.patch 方法发送更新请求
      axios
        .patch(
          `https://perfume-express-pty3.onrender.com/posts/${id}`,
          updatedData
        )
        .then((response) => {
          this.perfume = response.data.data;
          console.log("更新成功");
        })
        .catch((error) => {
          console.error("更新失败:", error);
        });
    },
  },
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

  getters: {
    getPerfumeData: ({ perfumedata }) => {
      const data = perfumedata;

      return data;
    },
  },
  methods: {},
});
