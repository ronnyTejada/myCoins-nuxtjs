<template lang="pug">
    v-row(justify="center" align="center")
      v-container.form-container.elevation-7
        form
            v-text-field(v-model="email" label="Email"   prepend-icon='mdi-account' required)

            v-text-field(v-model="password" label="password" type="password" prepend-icon='mdi-lock')

            v-btn(style="width:100%" color="primary" @click="login" class="mr-4") enviar
      


</template>
<script>
export default {
  name: 'LoginForm',
  data(){
    return{
      email:'gerente@coins.com',
      password:'1234'
    }
  },
  methods:{
    login(){
      if(this.email==='gerente@coins.com' && this.password==='1234'){
          //localStorage.setItem('user', true);
          this.$cookies.set('user',true)
          this.$router.push('/coins')
          this.$store.state.user = true
      }
    }
  },
  mounted(){
    console.log(this.$cookies.get('user'))
  }
}

</script>