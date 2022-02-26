Vue.config.devtools = true;

new Vue({
  el: "#app",
  methods: {
    updateActiveIndex(index) {
      this.activeIndex = index;
    } },

  data() {
    return {
      activeIndex: 0,
      btnActiveClass: 'is-active',
      btnClass: 'feature-button',
      features: [
      {
        name: "医疗养生",
        description: '不仅可以体验传统中医，还可以体验独特的藏医' },

      {
        name: "饮食养生",
        description: '在美食，茶饮中享受健康生活' },

      {
        name: "环境养生",
        description: '森林沐浴，阳光浴，雾浴，生态温泉任你选择' },

      {
        name: "运动养生",
        description: '垂钓，骑行，武术，生命在于运动' }],


      appImages: [
      {
        src:
        "img/app-screen-1a.png" },

      {
        src:
        "img/app-screen-2a.png" },

      {
        src:
        "img/app-screen-3a.png" },

      {
        src:
        "img/app-screen-4a.png" }] };



  } });