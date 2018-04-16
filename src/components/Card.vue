<template>
  <div class="photo__wrapper">
    <a class="photo cursor-pointer"
      :href="photo.url"
      target="_blank"
      :style="{backgroundImage: `url(${photo.thumbnailUrl}`}"></a>
    <div class="photo__title">{{photo.title}}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['photo'],
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/base.scss';
@import 'src/assets/css/colors.scss';

.photo {
  background-repeat: no-repeat;
  height: 70%;
  background-size: cover;
  max-height: 100%;
  max-width: 100%;
}

.photo__title {
  height: 20%;
  padding: 18px 20px 10px 20px;
  background-color: $background-title-card;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
}

.photo__wrapper {
  display: flex;
  flex-direction: column;
}
</style>
