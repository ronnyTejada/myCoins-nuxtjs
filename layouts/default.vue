<template lang="pug">
  v-app
    
    v-app-bar(:clipped-left="clipped"
      fixed
      app)
    
      
      
          
       nuxt-link(to="/" style="text-decoration:none")
          v-toolbar-title(v-text="title")

       <v-spacer/>
          button(@click='logout' v-if=' this.$store.state.user || user') Logout
     

       
      
      
      
    
    v-main
      v-container
        Nuxt
    
    
    v-footer(:absolute="!fixed"
      app)
      <span>&copy; {{ new Date().getFullYear() }}</span>
   
</template>

<script>
export default {
  data () {
    return {
     
      //user:this.$cookies.get('user'),
      title: 'MyCoins'
    }
  },
  methods:{
    async logout(){
      //alert('sd')
      await this.$cookies.set('user',false)
      //this.$router.push('/')
      window.location.reload();


    }
  },
  computed:{
    user(){
      return this.$cookies.get('user')
    }
  }
}
</script>
