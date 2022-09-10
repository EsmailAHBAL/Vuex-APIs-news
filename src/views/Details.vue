<template>
   <section class="container">
     <div class="block">
     <h3 class="tag is-danger"> {{post.title}}</h3>

   </div>
     <div v-if="post">
      <div class="card">
        <div class="card-content">
         
         <div class="block">
            {{post.description}}
         </div>
         <div class="block" style="height: 200px;">
                            <img :src="post.urlToImage" style="height: 100%;border-radius: 90%;width:100% ;   object-fit: contain;" />
         </div>
         <div class="block">
            {{post.content}}
         </div>
         <hr />
         <div class="block">
            {{post.url}}
         </div>
         <div class="block">
            <span class="tag is-dark"> publishedAt </span> <span class="tag is-success">  {{post.publishedAt}}</span>
         </div>
         <div class="block">
          <span class="tag is-dark"> By </span>   <span class="tag is-success"> {{post.author}}</span>
         </div>
         <div class="block">
          <span class="tag is-dark"> The Source </span>   <span class="tag is-success">   {{nameOf.name}}</span>
         </div>
        </div>
      </div>
    </div>
    <div v-else>
        Sorry 😔
    </div> 
   </section>

</template>

<script >
import { mapState } from 'vuex'
export default{
     data:()=>({
        post:{},
        nameOf:""
     }),
    computed:{
       
        
        ...mapState(['data']),

       
    },
     mounted(){
     
        this.$store.commit('getData')
        this.post = this.data.filter(item =>{
            if(item.title == this.$route.params.title){
                return item
            }
        })[0]
        this.nameOf =this.post.source
        this.addTen()
        
    }
    ,
    methods:{  addTen() {
                this.$store.commit('addTen', 1);
            },},
}
</script>