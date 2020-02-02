<template>
    <div id="app">
        <h2 id="title">苗喵喵2020新春大冒险</h2>
        <h2 id="level">{{level}}</h2>
        <div id="board">
            <div id="top">
                <hr style="margin-bottom: 0px;">
                <marquee id="money"><p>目前奖金：<span>{{ money }}</span></p></marquee>
            </div>

            <hr width="100%" style="height: 1px;margin: 0px 0px 15px 0px;">

            <div id="bottom">
                <component ref="level" :is="currentComponent" :money.sync="money"></component>
            </div>
        </div>
        <modals-container></modals-container>
    </div>
</template>

<script>
    import Level1 from "./components/Level1"
    import Level2 from "./components/Level2"
    import Level3 from "./components/Level3"
    import Level4 from "./components/Level4"
    import Level5 from "./components/Level5"
    import Level6 from "./components/Level6"
    import Level7 from "./components/Level7"
    import Level8 from "./components/Level8"
    import Level9 from "./components/Level9"
    import Level10 from "./components/Level10"
    import modal from "./components/modal"
    export default {
        components: {
            Level1,
            Level2,
            Level3,
            Level4,
            Level5,
            Level6,
            Level7,
            Level8,
            Level9,
            Level10,
        },
        data(){
            return{
                money:0,
                currentComponent:"level1",
                level:"",
            }
        },
        //更新第几关
        mounted() {
            this.level=this.$refs.level.level
            this.$modal.show(modal, {
                text:"身份验证"
            },{
                clickToClose:false,
                transition:"nice-modal-fade",
                delay:2
            })
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
        /*border: pink 2px dashed;*/
        height: 600px;
        /*border-image: url("./img/f3.png");*/
    }

    #bottom {
        height: 80%;
        border: #ffae35 2px dashed;
        border-top: none;
    }
    #title{
        font: 600 50px "Comic Sans MS";
        color: white;
        text-shadow: 0 0 20px #fdec84,
        10px -10px 30px #ffae35,
        20px -20px 40px #ec760c,
        -20px -60px 50px #cd4607,
        0px -80px 60px #973717,
        10px -40px 70px #451b0e;
    }
    #level{
        color: coral;
    }
    #money{
        color: red;
    }


</style>
