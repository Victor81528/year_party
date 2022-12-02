<template>
    <div id="invitation">
        <div class="letter">
            <div class="letter-border">
                <h2>我是邀請函</h2>
                <div class="line"></div>
                <p>即將迎來歲末年終，在這段時間對於公司有什麼看法？</p>
                <div class="line"></div>
                <p>是青澀的戀愛感還是激情過後的苦辣？</p>
                <div class="line"></div>
                <p>是什麼並不重要，重要的是</p>
                <div class="line"></div>
                <p>誠摯邀請各位羅賓斯夥伴YYYY年MM月DD日於XX餐廳共享年度尾牙盛宴</p>
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
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.letter {
    width: 80vw;
    max-width: calc(768px - 20vw);
    min-height: 80vh;
    background-color: rgb(239, 186, 115);
    border-radius: 8px;
    padding: 10px;
    text-align: start;
    .letter-border {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        /* border: 3px solid black; */
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
    background-image: url(../../public/line.svg);
    background-size: cover;
    margin: {
        top: 10px;
        bottom: 10px;
    };
}
</style>
