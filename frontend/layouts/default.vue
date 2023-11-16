<template>
      <div class="flex fixed w:100% jc:space-between font:medium bd:blur(5px) z-index:5">
        <div>
        </div>
      <div class="flex ai:center@>md m:10px {py:10px;rel}@<md text:center">
        <a href="https://github.com/TommcyOWO#-hi-im-tomycat-一個平平無奇數學爆幹爛的國3生" target="_blank"><IconBrandGithub color="white" class="mx:10px cursor:pointer"/></a>
        <select v-model="locale" class="mx:10px h:25px b:2|solid|crimson-54 bg:white outline:none r:10px">
            <option value="en">English</option>
            <option value="tw_zh">繁體中文</option>
        </select>
      </div>
    </div>
      <slot/>
</template>

<script setup lang="ts">
import '@master/css';

const { locale } = useI18n();

</script>

<style scoped>

</style>