<template>
    <div id="app">
        <h2>苗喵喵2020新春大冒险</h2>
        <div id="board">

            <div id="top">
                <h3>{{level}}</h3>
                <hr style="margin-bottom: 0px">
                <marquee><p>目前奖金：<span>{{ money }}</span></p></marquee>
            </div>

            <hr width="100%" style="height: 1px;margin-top: 0px">

            <div id="bottom">
                <component ref="level" :is="currentComponent" :money.sync="money"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Level1 from "./components/Level1"
    import Level2 from "./components/Level2"
    import Level3 from "./components/Level3"
    import Level4 from "./components/Level4"
    export default {
        components: {
            Level1,
            Level2,
            Level3,
            Level4
        },
        data(){
            return{
                money:0,
                currentComponent:"Level1",
                level:"",
            }
        },
        //更新第几关
        mounted() {
            this.level=this.$refs.level.level
        },
        updated() {
            this.level=this.$refs.level.level
        }
    }
</script>

<style>
    #app {
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    #board {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: auto;
        border: black 1px dashed;
        height: 600px;
    }


    #bottom {
        height: 80%;
    }


</style>
