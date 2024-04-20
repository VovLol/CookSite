<template>
  <nav>
     <MyDinner />
  </nav>
  <router-view/>
</template>

<script>
import MyDinner from './components/MyDinner.vue';

export default {
  name: 'App',
  components: {
    MyDinner
  }
}
</script>


<style>

</style>
