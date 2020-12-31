<template>
    <div>
<!--        <embed src=musicurl width=170 height=25 loop="true" autostart="true">-->
<!--        <video controls="true" autoplay="true" name="media" loop="true" hidden="true"> <source src=musicurl type="audio/mpeg"></video>-->
        <div class="outer">
        <div v-for="info in informaton" :key= "info">
            <div class="img-div">
                    <div class="rightullidiv">
                        <img
                                :src=info.imgsrc
                                alt=""
                                class="rightulliimg"
                        ></div>
                <p style="text-indent:5em;">
                    <i class="el-icon-star-off"></i>
                    {{info.year}}
                </p>
                <p style="text-align: center">{{info.word}}</p>
        </div>
        </div>
            <container class="container2">
                <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                    End
                </el-button>
            </container>

            <el-drawer
                    title="我是标题"
                    :visible.sync="drawer"
                    :direction="direction"
                    :with-header="false">
                <p style="text-indent:9em;">{{text1}}</p>
                <p style="text-indent:9em;">{{text2}}</p>
                <p style="text-indent:9em;">{{text3}}</p>
                <p style="text-indent:9em;">{{text4}}</p>
                <p style="text-indent:9em;">{{text5}}</p>
            </el-drawer>
    </div>

    </div>
</template>

<script>
    // import img from 'static/imges/img/a.jpg'
    export default {
        name: "home",
        data() {
            return {
                musicurl: require("../assets/music.mp3"),
                ur: require("../imges/1.png"),
                centerDialogVisible: false,
                drawer: false,
                direction: 'btt',
                informaton: [
                    { position: 'left',year:'2000年',imgsrc:require("../imges/01.png"),word:'一个叫毛文瑞的美女在银川出生了' },
                    { position: 'right',year:'2001年',imgsrc:require("../imges/02.png"),word:'周杰伦的专辑《范特西》发行' },
                    { position: 'left',year:'2002年',imgsrc:require("../imges/03.png"),word:'中国在酒泉卫星发射中心成功发射神舟四号飞船' },
                    { position: 'right',year:'2003年',imgsrc:require("../imges/003.png"),word:'古装传记电视剧《神医喜来乐》在央视首播' },
                    { position: 'left',year:'2004年',imgsrc:require("../imges/04.png"),word:'CCTV-12正式由西部频道更名为社会与法频道' },
                    { position: 'right',year:'2005年',imgsrc:require("../imges/05.png"),word:'《喜羊羊与灰太狼》系列开始在中国大陆播放' },
                    { position: 'left',year:'2006年',imgsrc:require("../imges/06.png"),word:'中国青藏铁路全线通车' },
                    { position: 'right',year:'2007年',imgsrc:require("../imges/07.png"),word:'我国成功发射第一颗北斗导航卫星' },
                    { position: 'left',year:'2008年',imgsrc:require("../imges/08.png"),word:'北京奥运会在中国北京举行' },
                    { position: 'right',year:'2009年',imgsrc:require("../imges/09.png"),word:'哔哩哔哩弹幕视频网正式上线' },
                    { position: 'left',year:'2010年',imgsrc:require("../imges/10.png"),word:'苹果公司发布第一代ipad' },
                    { position: 'right',year:'2011年',imgsrc:require("../imges/11.png"),word:'朝鲜最高领导人金正日逝世，其子金正恩接任' },
                    { position: 'left',year:'2012年',imgsrc:require("../imges/12.png"),word:'中国蛟龙号创造中国载人深潜器新纪录' },
                    { position: 'right',year:'2013年',imgsrc:require("../imges/13.png"),word:'习近平全票当选为国家主席、中央军委主席' },
                    { position: 'left',year:'2014年',imgsrc:require("../imges/14.png"),word:'美国微软公司发布新一版操作系统Windows 10' },
                    { position: 'right',year:'2015年',imgsrc:require("../imges/15.png"),word:'屠呦呦获得诺贝尔生理学或医学奖' },
                    { position: 'left',year:'2016年',imgsrc:require("../imges/16.png"),word:'上海迪士尼乐园正式开门迎客' },
                    { position: 'right',year:'2017年',imgsrc:require("../imges/17.png"),word:'孔子诞辰2560周年' },
                    { position: 'left',year:'2018年',imgsrc:require("../imges/18.png"),word:'守卫国旗35年的天安门国旗护卫队光荣结束使命' },
                    { position: 'right',year:'2019年',imgsrc:require("../imges/19.png"),word:'中华人民共和国70周年大庆' },
                    { position: 'left',year:'2020年',imgsrc:require("../imges/20.png"),word:'很特别的一年，不过它结束了' },
                    // { position: 'right',year:'2021年',imgsrc:'h',word:'326' }
                ],
                text1:'祝阿瑞元旦快乐呀~',
                text2:'最开心的一件事是，当你看到这些的时候，2020一定已经过去了。在这沉重的一年中，有许多人的命运发生了改变，所幸无论如何，都有你们陪伴。',
                text3:'我选了每一年或大或小的事情，它们在你每一岁的生命里发生，而且对于我们的“当下”有着无法估量的影响。我想，它们都是很有意义的。',
                text4:'本来想给你加的bgm叫“情书”，但是加上去之后播放器好奇怪，所以你自己听听吧~写前端总是有很多遗憾，比如我其实想手写一点什么，但是弹窗放不了~',
                text5:'希望你在新的一年，所有的或微小或宏大的心愿、所有渴望实现的想法、所有突如其来的情思，都能够得偿所愿。',
            };
        },
        methods: {
            open1() {
                this.$alert('hah', 'HTML 片段', {
                    dangerouslyUseHTMLString: true
                });
            },
        }
    }
</script>

<style scoped>
    .rightullidiv {
        margin: 21px;
        width: 365px;
        height: 355px;
        background: #fcf5e0;
        display: flex;
        justify-content: center;
        align-items: center;}
    .rightulliimg {
        max-width: 95%;
        max-height: 290px;
    }
    .outer{
        margin-top: 50px;
        /*margin: 100px;*/
        margin-left: 100px;
        margin-right: 100px;
    }
    .img-div {
        /*
        display 设置 inline-block 、inline 都能水平并排展示。
        设置 inline-block 时，可以修改盒子的width、height；
        设置 inline 时是根据盒子里的内容的width、height来决定，且直接修改盒子width、
            height无效。
        */
        /*display:inline;*/
        display:inline-block;
        float:left;
        padding:7px;
        border:5px ;
    }
    .insidediv{
        /*background-color: cornflowerblue;*/
        position: center;

    }
    .container2{
        position: relative;
        /*top: 20%;*/
        left: 45%;
    }
</style>