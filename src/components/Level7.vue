<template>
    <div id="app7">
        <h4>请在规定时间内打完下列文字</h4>
        <h3>{{s+"."+ms+mms}}</h3>
        <p>{{title}} </p>
        <p>{{author}}</p>
        <p>{{content}}</p>
        <h5 ref="tips" id="tips">tips:只需要打诗的内容，不需要打诗名和作者，按回车可以检验结果是否正确（正确提交 错误提示）<br>
            注意：标点符号都是中文的 不要有空格<br>
            准备好了按开始按钮
        </h5>
        <div><button class="btn btn-info" @click="start()" ref="btn">开始</button></div>
        <textarea class="form-control" v-model="msg" hidden ref="textarea" @keypress.enter="check"></textarea>
    </div>
</template>

<script>
    export default {
        name: "Level7",
        props:['money'],
        data(){
            return{
                level:"第七关",
                s:240,
                ms:0,
                mms:0,
                intervalNum:0,
                msg:"",
                title:"将进酒",
                author:"[唐]李白",
                content:"君不见，黄河之水天上来，奔流到海不复回。" +
                    "君不见，高堂明镜悲白发，朝如青丝暮成雪。" +
                    "人生得意须尽欢，莫使金樽空对月。" +
                    "天生我材必有用，千金散尽还复来。" +
                    "烹羊宰牛且为乐，会须一饮三百杯。" +
                    "岑夫子，丹丘生，将进酒，杯莫停。" +
                    "与君歌一曲，请君为我倾耳听。" +
                    "钟鼓馔玉不足贵，但愿长醉不愿醒。" +
                    "古来圣贤皆寂寞，惟有饮者留其名。" +
                    "陈王昔时宴平乐，斗酒十千恣欢谑。" +
                    "主人何为言少钱，径须沽取对君酌。" +
                    "五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。"
            }
        },
        methods:{
            // 计时器
            fn(){
                if(this.s==0&&this.ms==0&&this.mms==0){
                    clearInterval(this.intervalNum)
                    this.submit()
                }
                else if(this.ms==0&&this.mms==0){
                    this.s--;
                    this.ms=9;
                    this.mms=9;
                }
                else if(this.mms==0){
                    this.ms--;
                    this.mms=9;
                }
                else{
                    this.mms--;
                }
            },
            // 回车检验
            check(){
                if(this.msg==this.content){
                    alert("恭喜通关")
                    let money = this.money
                    money+=13.14
                    this.$emit("update:money",money)
                    this.$parent.currentComponent="Level8"
                }
                else {
                    alert("很遗憾，输入有误")
                }
            },
            // 倒计时检验
            submit(){
                if(this.msg==this.content){
                    alert("恭喜通关")
                    let money = this.money
                    money+=13.14
                    this.$emit("update:money",money)
                }
                else {
                    alert("很遗憾，输入有误")
                }
                this.$parent.currentComponent="Level8"
            },
            //开始答题
            start(){
                this.$refs.tips.hidden=true
                this.$refs.btn.parentElement.hidden=true
                this.$refs.textarea.hidden=false
                this.intervalNum=setInterval(this.fn,10)
            }
        },
    }
</script>

<style scoped>
    #app7{
        display: flex;
        flex-direction: column;
    }
    textarea{
        height: 200px;
        width: 80%;
        margin: 10px auto;
    }
    p{
        user-select: none;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    #tips{
        margin-top: 50px;
    }
</style>