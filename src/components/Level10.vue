<template>
    <div id="app">
        <div>
            <div ref="cover" id="cover" @click="toggle()"><p>To苗喵喵❤</p></div>
            <pre><br> 亲爱的：
           感谢2019年的陪伴，这一年我们经历了很多的事情，无论是好的还是
       坏的，开心的还是难过的，我们都一起走过。我是一个不会说情话的直男，
       很多时候想逗你开心，结果经常会把你惹生气，想哄哄你吧，有时候说的
       话反而火上浇油，但是感觉你比以前好哄多了哈哈哈，谢谢你能包容我的
       直，包容我的急脾气，很多时候心态爆炸如果没有你来安慰我都不知道什
       么时候才会好。我不像你一样喜欢表达，但是你对我来说真的非常重要，
       非常非常的重要，有你在我就心安，你就是我前进的的动力。
           emmm本来还有好多想说的，但是说那么多煽情的话不是我的风格，那
       就先这样吧。
          2020我们继续加油，携手进步。
          爱你❤
                                                          Yours，
                                                          李哒哒
      </pre>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Level10",
        props:['money'],
        data(){
            return{
                level:"第十关",
                flag:false
            }
        },
        methods:{
            toggle(){
                if(this.flag==false){
                    this.$refs.cover.style="transform:rotateX(120deg);"
                    this.flag=true;
                }
                else{
                    this.$refs.cover.style="transform:rotateX(0deg);"
                    this.flag=false;
                }

            }
        },
        mounted() {
            let money = this.money
            money+=13.14
            this.$emit("update:money",money)
        }
    }
</script>

<style scoped>
    #app{
        height: 480px;
        align-items: center;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
    #app>div{
        height: 320px;
        width: 41%;
        position: relative;
        perspective: 1000px;
        background-color: lightblue;
    }
    #cover{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        background-color:cornflowerblue;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    #cover{
        transition-duration: 1s;
        transform-origin: 100% 0 0;
    }
    #app>h5{
        font-family: Calibri;
        position: absolute;
    }
    pre{
        text-align: left;
    }
</style>