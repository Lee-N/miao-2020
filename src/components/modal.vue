<template>
    <div id="app">
        <h3 class="dialog-c-title">身份验证</h3>
        <p>李哒哒需要确定你是苗喵喵</p>
        <hr style="height: 2px;width: 100%">
        <div id="warp1">
            <label for="qq">输入你的qq号：</label>
            <input class="form-control"  v-model="qq" id="qq">
             <button id="btn1" class="btn btn-info"  ref="btn1" @click="sendMail">发送验证码<span v-show="show">{{"("+time+"s)"}}</span></button>
        </div>
        <div id="warp2">
            <label for="code" style="margin-left: 50px;" >验证码：</label>
            <input class="form-control"  v-model="code" id="code">
        </div>
        <button id="btn2"  class="btn btn-primary" @click="check">确定</button>
    </div>
</template>

<script>
    import jsonp from "jsonp"
    export default {
        name: "modal",
        data(){
            return{
                qq:"",
                code:"",
                url:"http://123.56.253.83:8888",
                time:60,
                show:false,
                intervalNum:0
            }
        },
        watch:{
            time(val){
                if(val==0){
                    this.show=false
                    this.$refs.btn1.removeAttribute("disabled")
                    clearInterval(this.intervalNum)
                    this.time=60
                }
            }
        },
        methods:{
            sendMail(){
                if(this.qq=="1148727164"){
                    this.show=true
                    this.intervalNum=setInterval(()=>{this.time--},1000)
                    this.$refs.btn1.setAttribute("disabled",true)
                    jsonp(this.url+"/sendMail", null, (err, data) => {
                        if (err) {
                            console.error(err.message);
                        } else {
                            if(data.flag==0)
                                alert("验证码已通过邮件发送")
                        }
                    });
                }
                else
                    alert("qq号码不正确")
            },
            check(){
                jsonp(this.url+"/check?code="+this.code, null, (err, data) => {
                    if (err) {
                        console.error(err.message);
                    } else {
                        if(data.flag==0){
                            alert("欢迎你苗喵喵，共有十关每一关通关有13.14元的奖金，十关全部通关有131.4的奖金。祝你好运")
                            this.$emit('close')
                        }

                        else if(data.flag==1)
                            alert("验证码错误")
                        else
                            alert("验证码已失效")
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #app{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #app>p{
        margin-top: 0;
        margin-bottom: 0;
    }
    #qq{
        width: 40%;
        margin-right: 10px;
    }
    #warp1,#warp2{
        margin-bottom: 10px;
        width: 80%;
        display: flex;
    }
    label{
        line-height: 30px;
    }
    #code{
        width: 30%;
    }
    #btn2{
        margin-top: 20px;
    }
</style>