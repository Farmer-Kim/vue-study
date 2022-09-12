<template>
    <div>
        <h1>UsersDetail</h1>
        <p>유저 번호 : {{userId}}</p>
        <v-btn @click="edit">수정</v-btn>
    </div>
</template>

<script>
 export default {
     computed:{
         userId(){
             return this.$route.params.id
         }
     },
     methods:{
         edit(){
            //  this.$router.push({name: 'users-edit'})
             this.$router.push({path: `users/${this.userId}/edit`})
         }
     }
 }
</script>