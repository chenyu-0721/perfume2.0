const { defineStore } = Pinia;

export default defineStore("productsStore", {
  // data, methods, computed
  // state, actions, getters
  // 資料建立在 state
  // 給元件使用寫在 getters
  state: () => ({
    products: [
      {
        title: "Poppy & Barley",
        infor: "清新海洋",
        imageUrl:
          "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTE1ODAyMTR8fGVufDB8fHx8fA%3D%3D",
        price: "NT$1,380",
        sale: "$1,580",
      },
      {
        title: "Poppy & Barley",
        infor: "花香調",
        imageUrl:
          "https://images.unsplash.com/photo-1530630458144-014709e10016?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTE1ODAyMTR8fGVufDB8fHx8fA%3D%3D",
        price: "NT$1,380",
        sale: "$1,580",
      },
      {
        title: "Poppy & Barley",
        infor: "木質",
        imageUrl:
          "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjZ8MTE1ODAyMTR8fGVufDB8fHx8fA%3D%3D",
        price: "NT$1,380",
        sale: "",
      },
      {
        title: "Poppy & Barley",
        infor: "果香調",
        imageUrl:
          "https://images.unsplash.com/photo-1578996834254-13d1b661a5ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjd8MTE1ODAyMTR8fGVufDB8fHx8fA%3D%3D",
        price: "NT$1,380",
        sale: "",
      },
      {
        title: "Poppy & Barley",
        infor: "花香調",
        imageUrl:
          "https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjF8MTE1ODAyMTR8fGVufDB8fHx8fA%3D%3D",
        price: "NT$1,380",
        sale: "$1,580",
      },
      {
        title: "Poppy & Barley",
        infor: "果香調",
        imageUrl:
          "https://images.unsplash.com/photo-1585120040315-2241b774ad0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8MTE1ODAyMTR8fGVufDB8fHx8fA%3D%3D",
        price: "NT$1,380",
        sale: "$1,580",
      },
      {
        title: "Poppy & Barley",
        infor: "木質",
        imageUrl:
          "https://images.unsplash.com/photo-1592842414746-a2fd2101381f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjN8MTE1ODAyMTR8fGVufDB8fHx8fA%3D%3D",
        price: "NT$1,380",
        sale: "",
      },
      {
        title: "Poppy & Barley",
        infor: "清新海洋",
        imageUrl:
          "https://images.unsplash.com/photo-1544468266-6a8948003cd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTE1ODAyMTR8fGVufDB8fHx8fA%3D%3D",
        price: "NT$1,380",
        sale: "",
      },
      {
        title: "Poppy & Barley",
        infor: "果香調",
        imageUrl:
          "https://images.unsplash.com/photo-1592247691114-69a06342531a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "NT$1,380",
        sale: "$1,580",
        sale: "",
      },
      {
        title: "Poppy & Barley",
        infor: "花香調",
        imageUrl:
          "https://images.unsplash.com/photo-1559264729-91549dddfc45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8MTE1ODAyMTR8fGVufDB8fHx8fA%3D%3D",
        price: "NT$1,380",
        sale: "$1,580",
      },
      {
        title: "Poppy & Barley",
        infor: "木質",
        imageUrl:
          "https://images.unsplash.com/photo-1594913366159-1832cfbe7ca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMTU4MDIxNHx8ZW58MHx8fHx8",
        price: "NT$1,380",
        sale: "",
      },
    ],
  }),
  getters: {
    sortProducts: ({ products }) => {
      return products;
    },
  },
});

/**
 * 
 *
 {
        id: ,
        title: "",
        imageUrl:
          "",
        price: ,
      },

*/
