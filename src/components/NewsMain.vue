<template>
    <div>
        
        <div class="block">
         
               <div class="block">
                <span class="tag is-link"> Number of articles read</span>
                <br />
                 <span class="tag is-danger" style="margin-top: 10px;">Data Saved</span>
               </div>
              <div class="block">
              {{news}}
            </div>
        </div>
        <div>
            <hr />
            <section class="container">
                <div class="columns is-multiline" style="margin-left: 3%;">
                    <progress class="progress is-small is-link" value="100" max="100"></progress>
                    <div class="column is-4" v-for="art in data" :key="art.id">

                        <div class="block">
                            {{art.source.name}}
                        </div>
                        <div class="block" style="height: 90px;">
                            {{art.title}}
                        </div>
                        <div class="block" style="height: 200px;">
                            <img :src="art.urlToImage" style="height: 100%;width:100% ;" />
                        </div>
                        
                        <div class="block" style="height: 100px;">
                            {{art.description}}
                        </div>
                        <br />
                        <div class="block">
                            <progress class="progress is-small is-success" value="100" max="100"></progress>
                        </div>
                        <div class="block">
                            <button class="button is-link" @click="ReadMore(art.title)">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex';
    export default {
        computed: {
            ...mapState(['news', 'data'])
        },
        mounted() {
            this.$store.commit('getData')
        },
        methods: {
          
            ReadMore (p){
               this.$router.push('post/'+p)
               
            } 

        }
    }
</script>