const { defineStore } = Pinia;

export default defineStore("card", {
  // methods 方法
  // actions
  state: () => ({
    perfume: [],
    perfumedata: [],
  }),
  actions: {
    removeCardItem(id) {
      // console.log("id", id);
      axios
        .delete(`https://perfume-express-pty3.onrender.com/posts/${id}`)
        .then((response) => {
          this.perfume = response.data.data;
          alert("删除成功");
        })
        .catch((error) => {
          console.log("删除失败:", error);
        });
    },

    updateCardItem(data) {
      this.perfumedata = data;
    },

    postDataCotent() {
      const newImage = document.querySelector(".perfume-image-post").value;
      const newTitle = document.querySelector(".perfume-title1-post").value;
      const newCategory = document.querySelector(
        ".perfume-category-post"
      ).value;
      const newPrice = document.querySelector(".perfume-price-post").value;
      const newUnit = document.querySelector(".perfume-unit-post").value;

      // 创建包含需要更新的字段的对象
      const postdData = {
        image: newImage,
        title: newTitle,
        category: newCategory,
        price: newPrice,
        unit: newUnit,
      };

      // 使用 axios.patch 方法发送更新请求
      axios
        .post(`https://perfume-express-pty3.onrender.com/posts`, postdData)
        .then((response) => {
          this.perfume = response.data.data;
          alert("新增成功");
        })
        .catch((error) => {
          console.log("新增失败:", error);
        });
    },

    handleButtonClick(id) {
      const newTitle = document.querySelector(".perfume-title1").value;
      const newCategory = document.querySelector(".perfume-category").value;
      const newPrice = document.querySelector(".perfume-price").value;
      const newUnit = document.querySelector(".perfume-unit").value;

      // 创建包含需要更新的字段的对象
      const updatedData = {
        title: newTitle,
        category: newCategory,
        price: newPrice,
        unit: newUnit,
      };

      // 使用 axios.patch 方法发送更新请求
      axios
        .patch(
          `https://perfume-express-pty3.onrender.com/posts/${id}`,
          updatedData
        )
        .then((response) => {
          this.perfume = response.data.data;
          alert("更新成功");
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
