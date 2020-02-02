<template>
    <div>
        <form role="form">
            <h3>请问谁是老大</h3>
            <br>
            <div class="radio" >
                <label><input class="from-control" type="radio" v-model="answer" name="answer" value="1" @click="fun()">苗喵喵</label>
            </div>
            <div>
                <label><input  type="radio" v-model="answer" name="answer" value="2" checked ref="lee">李哒哒</label>
            </div>
            <br>
            <div>
                <button type="button" class="btn btn-primary" @click="check()">确定</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Level4",
        props:['money'],
        data(){
            return{
                level:"第四关",
                answer: 2,
            }
        },
        methods:{
            check(){
                let money = this.money
                money+=13.14
                this.$emit("update:money",money)
                this.$parent.currentComponent="Level5"

            },
            fun(){
                alert("？？？？？？？？？？")
                this.$refs.lee.checked=true
            }
        }
    }
</script>

<style scoped>
    h3{
        color: coral;
    }
</style>