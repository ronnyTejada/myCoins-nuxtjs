<template lang='pug'>

    v-row(justify="center" align="center")
      img(:src='img')
      
              

</template>

<style>
.nuxt-logo {
  height: 180px;
}
</style>

<script>
import axios from "axios";

export default {
  name: "TaskList",
  data() {
    return {
      coin: [],
      color: "",
      img:'',
      id:'bitcoin',
      headers: [
        {
          text: "#",
          align: "start",
          filterable: false,
          value: "market_cap_rank",
        },
        { text: "Name", value: "name" },
        { text: "Price", value: "current_price" },
        { text: "High 24h", value: "high_24h" },
        { text: "Low 24h", value: "low_24h" },
        { text: "Market Cap", value: "market_cap" },
        { text: "Circulanting Supply", value: "circulating_supply" },
      ],
    };
  },
  methods: {
    getCoin() {
       axios
      
        .get(
          `https://api.coingecko.com/api/v3/coins/${this.$route.params.id}?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        )
        .then((res) => {
          
          this.coin=res.data;
          this.img=res.data.image.large
          console.log(this.coin)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
  },
  
  mounted() {
    this.getCoin()
    console.log(this.coin)
   

  },
  
};
</script>
