<template>
    <div>
        <h2>找出卧底</h2>
        <div>
            <span v-for="item in list" :key="item.id">
                 <img :src="item.img" :id="item.id" @click="check($event)">
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Level5",
        props:['money'],
        data() {
            return {
                level: "第五关",
                smile1: require("../img/smile1.png"),
                smile2: require("../img/smile2.png"),
                list: [],
                random:0
            }
        },
        methods:{
          check(e){
              let id=e.srcElement.id;
              if(this.random==id){
                  alert("竟然被你发现了！")
                  let money = this.money
                  money+=13.14
                  this.$emit("update:money",money)
                  this.$parent.currentComponent="Level6"
              }
          },
        },
        mounted() {
            //随机生成位置
            this.random=parseInt(Math.random()*500);
            for (let i = 0; i < 500; i++) {
                if(i==this.random)
                    this.list.push({id: i, img: this.smile2})
                else
                    this.list.push({id: i, img: this.smile1})
            }

        }
    }
</script>

<style scoped>
    img {
        cursor: pointer;
        width: 2.5%;
        display: inline;
    }
    h2{
        color: coral;
    }
</style>