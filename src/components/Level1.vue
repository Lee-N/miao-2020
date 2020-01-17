<template>
    <div>
        <h3>李哒哒喜欢做的工作</h3>
        <br>
        <form role="form" ref="form">
            <div class="form-group">
                <input type="radio" class="from-control" name="answer" value="1" v-model="answer">前端开发
            </div>
            <div class="form-group">
                <input type="radio" class="from-control" name="answer" value="2" v-model="answer">后端开发
            </div>
            <div class="form-group">
                <input type="radio" class="from-control" name="answer" value="3" v-model="answer">界面设计
            </div>
            <div class="form-group">
                <input type="radio" class="from-control" name="answer" value="4" v-model="answer">给老师跑腿
            </div>
        </form>
        <br>
        <button type="button" class="btn btn-primary" @click="check()">确定</button>

    </div>
</template>

<script>
    export default {
        name: "Level1",
        props:['money'],
        data(){
            return {
                answer:1,
                level:"第一关"
            }
        },
        methods:{
            check(){
                let val = this.answer;
                if(val==1){
                    alert("还不错，选对了")
                    let money = this.money
                    money+=13.14
                    this.$emit("update:money",money)
                }
                else
                    alert("你是猪吗 我当然是做前端开发啊 ^(*￣(oo)￣)^")
                this.$parent.currentComponent = "Level2"
            }
        }
    }
</script>

<style scoped>

</style>