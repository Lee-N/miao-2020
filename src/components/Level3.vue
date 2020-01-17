<template>
    <div id="app">
        <h1>6.66s挑战</h1>
        <div id="time">
            {{s+"."+ms+mms}}
        </div>
        <br>
        <div>
            <button type="button" :class="btnClass" @click="fun()" ref="btn">▷ START</button>
        </div>
        <br>
        <div id="pass" ref="pass" hidden >
            <input class="form-control"   type="password" placeholder="输入密码" v-model="password">
            <button type="button" class="btn btn-info" @click="this.check">确定</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Level3",
        props:['money'],
        data() {
            return {
                level: "第三关",
                s: 0,
                ms: 0,
                mms:0,
                status: 0,
                btnClass: "btn btn-primary",
                timeIntervalID:0,
                count:0,
                password:""
            }
        },
        methods: {
            fun() {
                if (this.status == 0) {
                    this.s=0
                    this.ms=0
                    this.mms=0
                    this.status = 1
                    this.$refs.btn.innerHTML = "■ STOP"
                    this.btnClass = "btn btn-danger"
                    this.timeIntervalID= setInterval(this.updateTime, 10)
                } else {
                    this.status = 0
                    this.$refs.btn.innerHTML = "▷ START"
                    this.btnClass = "btn btn-primary"
                    clearInterval(this.timeIntervalID)
                    this.count++
                    if(this.s==6&&this.ms==6&&this.mms==6){
                        alert("太强了宝贝")
                        let money = this.money
                        money+=13.14
                        this.$emit("update:money",money)
                        this.$parent.currentComponent="Level4"
                    }

                    //显示通行密码
                    if(this.count==30){
                        this.$refs.pass.hidden=false
                        alert("你已经试了30次了，可以向我请求密码进入下一关")
                    }
                }
            },
            //计时器
            updateTime() {
                this.mms++
                if(this.mms==10){
                    this.ms++
                    this.mms=0
                }
                if(this.ms==10){
                    this.s++
                    this.ms=0
                    this.mms=0
                }
            },

            //密码验证

            check(){
                console.log(this.password)
                if(this.password=="999999"){
                    alert("通关")
                    let money = this.money
                    money+=13.14
                    this.$emit("update:money",money)
                    this.$parent.currentComponent="Level4"
                }
            }
        }
    }

</script>

<style scoped>
    #app {
        display: flex;
    }

    #time {
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-family: "Microsoft JhengHei UI";
        font-size: 4vw;
        margin: auto;
        height: 15vw;
        width: 15vw;
        border: blue solid 2px;
        border-radius: 50%;
    }
    #pass{
        display: flex;
        justify-content: center;
    }
    #pass>input{
        width: 22%;
    }
</style>