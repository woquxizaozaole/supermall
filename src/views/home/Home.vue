<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <!-- <swiper>
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper> -->
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  // import {Swiper, SwiperItem} from 'components/common/swiper'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import {getHomeMultidata} from 'network/home'
  

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
      // Swiper,
      // SwiperItem
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res);
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav  {
    background-color: var(--color-tint);
    color: white;
  }
</style>
