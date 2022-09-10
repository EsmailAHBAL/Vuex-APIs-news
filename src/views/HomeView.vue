<template>
  <div class="home">

    <NewsMain/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NewsMain from '@/components/NewsMain.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    NewsMain,
  },
  
});
</script>
