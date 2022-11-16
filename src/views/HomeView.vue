<template>
    <div id="home">
        <div class="input-outer">
            <input type="text" v-model="keyword" ref="inputBorder" :autofocus='true'>
        </div>
        <div class="input-outer">
            <input type="text" v-model="res" ref="resBorder">
        </div>

    </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useIndexStore } from '@/store'

const store = useIndexStore()
store.step = 1

const inputBorder = ref(null)
const keyword = ref('')
const resBorder = ref(null)
const res = ref('')

watch(() => keyword.value, (newValue, oldValue) => {
    if (keyword.value === '我們都在Robins' || keyword.value === '我們都在robins' || keyword.value === '我們都在羅賓斯') {
        inputBorder.value.disabled = true
        nextTick(() => {
            resBorder.value.focus()
        })
        setTimeout(() => {
            res.value = '我'
        }, 1500)
        setTimeout(() => {
            res.value = '我懂'
        }, 1900)
        setTimeout(() => {
            res.value = '我懂了'
        }, 2300)

        // setTimeout(() => {
        //     store.step = 2
        // }, 3800)
    }
})

nextTick(() => {
    inputBorder.value.focus()
})
setTimeout(() => {
    keyword.value = '我'
}, 2000)
setTimeout(() => {
    keyword.value = '我們'
}, 2200)
setTimeout(() => {
    keyword.value = '我們都'
}, 2400)
setTimeout(() => {
    keyword.value = '我們都在'
}, 2600)

</script>

<style lang="scss" scoped>
@keyframes flicker {
    0% {
        opacity: 0.97861;
    }
    5% {
        opacity: 0.64769;
    }
    10% {
        opacity: 0.33604;
    }
    15% {
        opacity: 0.90626;
    }
    20% {
        opacity: 0.78128;
    }
    25% {
        opacity: 0.83891;
    }
    30% {
        opacity: 0.65583;
    }
    35% {
        opacity: 0.67807;
    }
    40% {
        opacity: 0.56559;
    }
    45% {
        opacity: 0.84693;
    }
    50% {
        opacity: 0.96019;
    }
    55% {
        opacity: 0.08594;
    }
    60% {
        opacity: 0.80313;
    }
    65% {
        opacity: 0.71988;
    }
    70% {
        opacity: 0.53455;
    }
    75% {
        opacity: 0.67288;
    }
    80% {
        opacity: 0.71428;
    }
    85% {
        opacity: 0.70419;
    }
    90% {
        opacity: 0.7003;
    }
    95% {
        opacity: 0.86108;
    }
    100% {
        opacity: 0.94387;
    }
}
@keyframes textShadow {
  0% {
    text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  5% {
    text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  10% {
    text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  15% {
    text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  20% {
    text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  25% {
    text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  30% {
    text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  35% {
    text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  40% {
    text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  45% {
    text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  50% {
    text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  55% {
    text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  60% {
    text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  65% {
    text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  70% {
    text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  75% {
    text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  80% {
    text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  85% {
    text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  90% {
    text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  95% {
    text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  100% {
    text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
}

#home {
    animation: flicker 0.08s infinite;
    &:before{
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(transparentize(rgb(40, 40, 40),1) 50%, transparentize(darken(rgb(103, 103, 103),10),0.75) 50%), linear-gradient(90deg,transparentize(#ff0000,0.94),transparentize(#00ff00,0.98),transparentize(#0000ff,0.94));
        z-index: 2;
        background-size: 100% 2px, 3px 100%;
        pointer-events: none;
    }
    &:after {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(18, 16, 16, 0.1);
        opacity: 0;
        z-index: 2;
        pointer-events: none;
        animation: flicker 0.15s infinite;
    }
}
.input-outer {
    margin: 30px;
    input {
        animation: textShadow 1.6s infinite;
        background-color: inherit;
        border: 0;
        color: rgba(0, 245, 69, 0.727);
        font-size: 30px;
        cursor: default;
        caret-color: white;
    }
}
</style>
