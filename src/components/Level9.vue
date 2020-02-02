<template>
    <div>
        <div id="d1" @click="fn()" :style="styleObject"></div>
        <h2 ref="tips" v-show="flag">找到能让你通关的点吧</h2>
    </div>
</template>

<script>
    export default {
        name: "Level9",
        props:['money'],
        data(){
            return{
                level:"第九关",
                styleObject:{
                    left:0,
                    top:0
                },
                flag:true
            }
        },
        methods:{
            fn(){
                alert("不错不错")
                let money = this.money
                money+=13.14
                this.$emit("update:money",money)
                this.$parent.currentComponent="Level10"
            }
        },
        mounted() {
            setTimeout(()=>{this.flag=false},5000)
            let x=Math.random()*500
            let y=Math.random()*500
            this.$set(this.styleObject,'left',x+'px')
            this.$set(this.styleObject,'top',y+'px')
        }
    }
</script>

<style scoped>
    div{
        position: relative;
    }
    #d1{
        position:absolute ;
        width: 35px;
        height: 35px;
        cursor: pointer;
    }
</style>