<script setup lang="ts">
import { useAppStore } from '@/store/index'
const appStore = useAppStore();
</script>

<template>
  <div>
    <el-tooltip content="点击点开设置面板" placement="bottom">
      <img class="setupBtn" src="@/static/icons/leaf.svg" @click="appStore.toggleSetupPanel" />
    </el-tooltip>
  </div>
</template>

<style lang="scss">
.setupBtn {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 30px;
  top: 50vh;
  cursor: pointer;
}
</style>