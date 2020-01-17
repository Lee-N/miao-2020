<template>
    <div id="app">
        <h3>下列哪个是真实的苗喵喵</h3>
        <div id="img">
            <div>
                <img src="../img/img1.jpg" @click="fun0()">
                <div class="cover" ref="cover1" hidden>✔</div>
            </div>
            <div class="middle">
                <h3>or</h3>
            </div>
            <div>
                <img src="../img/img2.jpg" @click="fun1()">
                <div class="cover" ref="cover2" hidden>✔</div>
            </div>
        </div>
        <br>
        <div><button type="button" class="btn btn-primary" @click="check()">确定</button></div>
    </div>
</template>

<script>
    export default {
        name: "Level2",
        props:['money'],
        data(){
            return{
                val:0,
                level:"第二关"
            }
        },
        methods:{
            check(){
                let val=this.val
                if(val==1)
                    alert("你最好有点数")
                else {
                    alert("很好")
                    let money = this.money
                    money+=13.14
                    this.$emit("update:money",money)
                    this.$parent.currentComponent="Level3"
                }
            },
            // 选择图片
            fun0(){
                this.val=0
                this.$refs.cover1.hidden=false;
                this.$refs.cover2.hidden=true;
            },
            fun1(){
                this.val=1
                this.$refs.cover1.hidden=true;
                this.$refs.cover2.hidden=false;
            }
        }
    }
</script>

<style scoped>
    div{
        position: relative;
    }
    #app{
        display: flex;
        flex-direction: column;
    }
    #img{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    #img>div{
        width: 20%;
        cursor: pointer;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .middle{
        display: flex;
        position: relative;
        width: 20%;
        flex-direction:column;
        justify-content: center;
    }
    .cover{
        font-family: "Microsoft YaHei UI";
        font-size: 7vw;
        color: #72e300;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 0px;
        background-color: rgba(163, 163, 163, 0.3);
        float: left;
        width: 100%;
        height: 100%;
    }
</style>