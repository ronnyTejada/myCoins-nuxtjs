<template lang='pug'>
v-card
  v-card-title
    v-text-field(
      append-icon="mdi-magnify",
      label="Search",
      single-line,
      hide-details,
      v-model='search'
    )

  v-data-table(:headers="headers", :items="updatedCoins")
    template(v-slot:item.current_price="{ item }")
      p(:style="color", dark) {{ item.current_price }}$

    template(v-slot:item.high_24h="{ item }")
      p(:style="color", dark) {{ item.high_24h }}$
    
    template(v-slot:item.low_24h="{ item }")
      p(:style="color", dark) {{ item.low_24h }}$

    template(v-slot:item.market_cap="{ item }")
      p(:style="color", dark) {{ item.market_cap }}$

    template(v-slot:item.name="{ item }")
      nuxt-link(:to=`/coins/+item.id`)

        p(:style="color", dark) {{ item.name }}
       
   

        

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
      coins: [],
      color: "",
      id:0,
      search:'',
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
    async getCoins() {
      await axios
      
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((res) => {
          console.log('data')
          this.coins=res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
  },
  computed: {
     updatedCoins() {
       if(this.search === ''){
         return this.coins
       }else{
         return this.coins.filter(c=> c.name.toLowerCase().includes(this.search.toLowerCase()))
       }
      
      
    },
  },
  mounted() {
    //this.getCoins()

    setInterval(() => this.getCoins(), 1000);

  },
  created() {
  }
};
</script>
