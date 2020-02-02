<template>
    <div id="app">
        <div id="left">
            <img :id=item.index v-for="(item,key) in imgList" :key="key" :src=item.src draggable="true" v-on:dragstart="drag($event)">
        </div>
        <div id="middle">
            <marquee direction="down" id="money"><p>拼<br>图</p></marquee>
        </div>
        <div id="right">
            <div>
                <div :id=item+9 v-for="(item,key) in divList1" :key="key"  draggable="false" v-on:dragover="allowDrop($event)" v-on:drop="drop($event)"></div>
            </div>
            <div>
                <div :id=item+9 v-for="(item,key) in divList2" :key="key" draggable="false" v-on:dragover="allowDrop($event)" v-on:drop="drop($event)"></div>
            </div>
            <div>
                <div :id=item+9 v-for="(item,key) in divList3" :key="key"  draggable="false" v-on:dragover="allowDrop($event)" v-on:drop="drop($event)"></div>
            </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Level8",
        props:['money'],
        data(){
            return{
                level:"第八关",
                imgList:[],
                divList1:[],
                divList2:[],
                divList3:[],
                num:0
            }
        },
        mounted() {
            this.push(2)
            this.push(4)
            this.push(6)
            this.push(8)
            this.push(3)
            this.push(9)
            this.push(7)
            this.push(5)
            this.push(1)
            for(let i=1;i<4;i++)
                this.divList1.push(i)
            for(let i=4;i<7;i++)
                this.divList2.push(i)
            for(let i=7;i<10;i++)
                this.divList3.push(i)
        },
        methods:{
            push(index){
                this.imgList.push({
                    src:require("../img/img"+index+".jpg"),
                    index:index
                })
            },
            drag(ev){
                ev.dataTransfer.setData("id",ev.target.id);
            },
            allowDrop(ev){
                ev.preventDefault()
            },
            drop(ev){
                let id=ev.dataTransfer.getData("id");
                //有则交换图片无则直接附加
                if(ev.target.tagName=="DIV"){
                    if(document.getElementById(id).parentElement.getAttribute("id")=="left"){ //从左边移到右边 拼图数+1用于最后检查是否拼图正确
                        this.num++
                    }
                    ev.target.appendChild(document.getElementById(id));
                }
                else {
                    //交换两图片位置
                    let dom1=ev.target
                    let dom2=document.getElementById(id)
                    let dom1Parent=ev.target.parentNode
                    let dom2Parent=dom2.parentNode
                    dom2Parent.appendChild(dom1)
                    dom1Parent.appendChild(dom2);
                }

                if(this.num==9)setTimeout(()=>{this.check()},100)//自动检查是否拼图成功
                ev.preventDefault();
            },
            check(){
                //div.id=img.d+9
                let flag=true
                let j=0
                let dom=document.getElementById("right").firstChild
                for(let i=1;i<10;i++){
                    j++
                    if(j%3==0){
                        dom=dom.nextSibling
                    }
                    if(document.getElementById(i+9).childNodes.item(0).getAttribute("id")!=i){
                        flag=false
                    }
                }
                if(flag==true){
                    alert("通关")
                    let money = this.money
                    money+=13.14
                    this.$emit("update:money",money)
                    this.$parent.currentComponent="Level9"
                }
            }
        }
    }
</script>

<style scoped>
    #app{
        display: flex;
        flex-direction: row;
    }
    #app>div{
        height: 480px;
    }
    #left{
        width: 40%;
    }
    #left>img{
        width: 30%;
        height: 160px;
    }
    #middle{
        width: 20%;
    }
    #right{
        width: 40%;
       display: flex;
        flex-direction: column;
    }
    #right img{
        width: 100%;
        height: 100%;
    }
    #right>div{
        display: flex;
        justify-content: center;
        flex-shrink: 0;
        width: 100%;
        height: 160px;
    }
    #right>div>div{
        width: 30%;
        height: 100%;
    }
    #middle>marquee{
        color: coral;
        text-align: center;
        height: 100%;
        font-family: "Microsoft YaHei UI";
        font-size: 30px;
    }
</style>