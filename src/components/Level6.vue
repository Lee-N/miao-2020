<template>
    <div id="app">
        <h4>{{grade}}</h4>
        <div class="box">
            <div id="cover"  @click="start"></div>
            <p @click="start">爱心发射箱<br>➹</p>
            <span @click="add($event)" v-for="i in list" :key="i" v-show="position[i].flag" :style="{'transform':'translate('+position[i].x+'px,'+position[i].y+'px)'}"><img src="../img/f3.png"></span>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Level6",
        props: ['money'],
        data() {
            return {
                level: "第六关",
                list: [],
                position: [],
                index: 0,
                intervalNum:0,
                grade:0
            }
        },
        methods: {
            start() {
                this.intervalNum=setInterval(this.move, 2010)
            },
            add(e){
                e.srcElement.hidden=true
              this.grade++
            },
            del(index){
                this.position[index].flag=false
            },
            move() {
                let positionX = this.position[this.index].x
                let positionY = this.position[this.index].y
                let stepX = 0
                let stepY = 0
                if (Math.random() > 0.5) {
                    stepX = 0;
                    stepY = 350;
                } else {
                    stepX = 580;
                    stepY = 0
                }
                if (Math.random() > 0.5) stepX = -stepX  //左右方向
                this.position[this.index].x = positionX + stepX
                this.position[this.index].y = positionY + stepY
                setTimeout(()=>{
                    this.position[this.index-1].flag=false
                },2000)
                this.index++
                if(this.index>19){
                    clearInterval(this.intervalNum)
                    setTimeout(()=>{
                        if(this.grade>=9){
                            alert("恭喜通关")
                            let money = this.money
                            money+=13.14
                            this.$emit("update:money",money)
                        }
                        else {
                            alert("很遗憾")
                        }
                        this.$parent.currentComponent="Level7"
                    },2000)
                }
            }

        },
        beforeMount() {
            for (let i = 0; i < 20; i++) {
                this.position.push({
                    x: 0,
                    y: 0,
                    flag: true //是否可见
                })
            }
            for (let i = 0; i < 20; i++) {
                this.list.push(i)
            }

        },
        mounted() {
            alert("收集9颗以上的心过关")
        }
    }
</script>

<style scoped>
    #app {
        display: flex;
        flex-direction: column;
    }

    div {
        position: relative;
    }

    span {
        display: inline-block;
        position: absolute;
        bottom: 25px;
        right: 40px;
        transition: 2s;
        width: 40px;
        transition-timing-function: linear;
    }

    img {
        width: 100%;
    }

    .box {
        margin: auto;
        width: 120px;
        height: 80px;
        cursor: pointer;
    }

    button {
        position: absolute;
    }

    #cover {
        z-index: 10;
        background: red;
        width: 120px;
        height: 80px;
        border-style: outset;
        border-color: coral;
    }

    .box > p {
        width: 100%;
        position: absolute;
        top: 10px;
        z-index: 20;
        font-family: "Microsoft YaHei UI";
        color: snow;
    }
    h4{
        color: deeppink;
    }
</style>