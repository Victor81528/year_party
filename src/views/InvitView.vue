<template>
    <div id="invitation">
        <div class="letter">
            <div class="letter-border">
                <h2>我是邀請函</h2>
                <div class="line"></div>
                <p>路過了學校花店 荒野到海邊</p>
                <div class="line"></div>
                <p>有一種浪漫的愛是浪費時間</p>
                <div class="line"></div>
                <p>徘徊到繁華世界</p>
                <div class="line"></div>
                <p>才發現 你背影 平凡得特別</p>
                <div class="line"></div>
                <p>幸福兜了一個圈</p>
                <div class="line"></div>
                <p>兜兜轉轉</p>
                <div class="line"></div>
                <p>我們來到羅賓斯相聚</p>
                <div class="line"></div>
                <p>選擇，一向都不是做的決定好不好</p>
                <div class="line"></div>
                <p>而是我是否能在這裡找到自己的舞台</p>
                <div class="line"></div>
                <p>我們一同經歷了各種</p>
                <div class="line"></div>
                <p>被瘋狂催件又被雷</p>
                <div class="line"></div>
                <p>被作業流程刁難</p>
                <div class="line"></div>
                <p>被投資人洗臉</p>
                <div class="line"></div>
                <p>還有被業績追著跑的日子</p>
                <div class="line"></div>
                <p>也一同經歷許多</p>
                <div class="line"></div>
                <p>一起唱歌</p>
                <div class="line"></div>
                <p>一起喝酒</p>
                <div class="line"></div>
                <p>一起大笑</p>
                <div class="line"></div>
                <p>然後一起吐的快樂回憶</p>
                <div class="line"></div>
                <p>那麼年末對於公司的期待與想法</p>
                <div class="line"></div>
                <p>是學生時期的青澀戀愛</p>
                <div class="line"></div>
                <p>還是轟轟烈烈後的心酸？</p>
                <div class="line"></div>
                <p>如果這些在心裡的體會還不夠深刻</p>
                <div class="line"></div>
                <p>那麼請務必出席一場難忘的世紀餐敘</p>
                <div class="line"></div>
                <p>讓你從新拾起對18歲的記憶</p>
                <div class="line"></div>
                <div style="margin: 100px 0; text-align: center; font-size: 20px; font-weight: 700;">
                    <p>2023 / 01 / 17 (二)  18:30 - 22:00</p>
                    <br>
                    <p>W Hotel  Strategy 2</p>
                    <br>
                    <p>台北市信義區忠孝東路五段10號 <a href="https://www.google.com/maps/place/%E5%8F%B0%E5%8C%97W%E9%A3%AF%E5%BA%97/@25.040868,121.5633378,17z/data=!4m8!3m7!1s0x3442aba4b2822781:0xfba2ec4c0c7ca966!5m2!4m1!1i2!8m2!3d25.0408632!4d121.5655265" target="_blank"><i class="fa-solid fa-map"></i></a></p>
                    <br>
                    <p>Dress Code：請著「<span class="code1">學</span><span class="code2">院</span><span class="code3">風</span>」服裝</p>
                    <br>
                </div>
                <div class="line"></div>
                <p>期待羅賓斯2023年揚眉吐氣、營收兔破天際！</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#invitation {
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: start;
    font-weight: 500;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    animation: into 0.3s;
    opacity: 1.0;
}
@keyframes into {
    0% {
        opacity: 1.0;
    }
    25% {
        opacity: 0;
    }
    75% {
        opacity: 1.0;
    }
    100% {
        opacity: 0;
    }
}
.letter {
    width: 80vw;
    max-width: calc(768px - 20vw);
    background-color: rgb(239, 186, 115);
    border-radius: 8px;
    padding: 10px;
    margin: 50px 0;
    text-align: start;
    .letter-border {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 5px;
        h2 {
            margin-top: 15px;
            margin-bottom: 20px;
            text-align: center;
            font-size: 30px;
        }
    }
}
.line {
    width: 100%;
    height: 7px;
    backdrop-filter: opacity(10%);
    background-image: url(../../public/line.svg);
    background-size: cover;
    opacity: 0.3;
    margin: 15px 0;
}
.code1 {
    color: black;
    animation: code1 0.3s infinite;
}
@keyframes code1{
    to {
        color: white;
    }
}
.code2 {
    color: black;
    animation: code2 0.4s infinite;
}
@keyframes code2{
    to {
        color: rgb(23, 152, 245);
    }
}
.code3 {
    color: black;
    animation: code3 0.25s infinite;
}
@keyframes code3{
    to {
        color: red;
    }
}

a {
    transition: 0.2s;
    &:hover {
        color: white;
    }
}
</style>
