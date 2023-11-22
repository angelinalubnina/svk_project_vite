<!-- <template>
    <div class="grey">
        POW-360
        <div class="pole">
            <div v-for="item in q" :key="item.id">
                <div class="card">
                    1
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

let q = 6

</script>

<style scoped>
/* .container1 {
    background-color:#201f1f;
    width: auto;
    height: 1080px;
} */

.pole {
    background-color:rgb(151, 119, 240);
    border: 20px;
    width: 90%;
    height: 90%;
    margin: auto;
    display: block;
    justify-content: space-between;
    
}
.card {
    background-color:rgb(62, 12, 198);
    border: 20px;
    width: 20%;
    height: 20%;
}

/* div {
    color: rgb(232, 207, 207)
} */
</style> -->

  <script>
//   import { useMotions } from '@vueuse/motion'
  
//   // Get custom controls
//   const { custom } = useMotions()
  
//   const customEvent = () => {
//     // Change the current variant of `custom` element
//     custom.variant.value = 'custom'
//   }
  </script>

<template>

    <div class="target" v-motion-slide-visible-once-right>1</div>
    <div
        class="target"
        v-motion
        :initial="{ opacity: 1, y: 100}"
        :visibleOnce="{opacity: 1, y: 0}"
    >
    3
    </div>
</template>

<style scoped>

.target {
    width: 100px;
    height: 100px;
    margin: 300px auto 500px auto;
    display: flex;
    justify-content: space-between;
    background-color: #43b883;
    border-radius: 10px;
    font-weight: bold;
}

</style>
  



