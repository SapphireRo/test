<template>
  <main class="main-container">
    <article class="lyric">
      <ul v-for="(item, index) in LyricsArr" :key="index">
        <li :class="['act', { active: isActive }]">{{ item.lrc }}</li>
      </ul>
    </article>
    <audio ref="audioLrc" :src="lyricLrc" controls class="audio" currentTime />
    <button type="button" @click="getLyricsArr()">1</button>
  </main>
</template>

<script lang="jsx" setup>
import { ref, watchEffect } from 'vue'
const isActive = ref(true)
const LyricsArr = ref([])
const audioLrc = ref()
const lyricLrc = ref('/src/music/.bomdo.mp3')
// eslint-disable-next-line no-unused-vars
const changeButton = () => {
  isActive.value = !isActive.value
}

// eslint-disable-next-line no-unused-vars
function getLyricsArr() {
  const lyrics = `[00:00.000] My Heart Will Go On
  [00:12.345] Celine Dion
  [00:23.456] Titanic Soundtrack
  [00:34.567] Andy
  [00:45.678]
  [01:23.456] Every night in my dreams
  [01:29.876] I see you, I feel you
  [01:36.789] That is how I know you go on`
  lyrics.split('\n').forEach((line) => {
    const [time, Str] = line.match(/^\[(.*?)\]\s*(.*)/).slice(1) ?? "ull";
    const [minutes, seconds] = time.split(':');
    const timeCode = +minutes * 60 + +seconds;
    var parseLyrics = {
      time: timeCode,
      lrc: Str
    };
    LyricsArr.value.push(parseLyrics);
    console.log(parseLyrics);
  })
}
// eslint-disable-next-line no-unused-vars
function findIndex() {
  for (var i = 0; i < LyricsArr.value.length; i++) {
    if (audioLrc.value.currentTime < LyricsArr[i].time) {
      return i - 1;
    }
    return LyricsArr.value.length - 1;
  }
}

watchEffect(() => {
})
</script>
<style lang="less" scoped>
@import url(LoginVue.less);
</style>
