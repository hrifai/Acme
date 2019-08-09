<template>
    <user-profile :user="activeUser"></user-profile>
</template>

<script>
    import utils from '../firebaseCRUD'
    import UserProfile from "../components/user-profile";

    export default {
        components: {UserProfile},
        created(){
           utils.database.ref('/Users/'+this.activeUser.key).on('value', (snap) => {
              this.activeUser = snap.val();
           })
        },
        data() {
          return {
              password: ''
          }
        },
        props:{
            activeUser: Object
        }
    }
</script>
