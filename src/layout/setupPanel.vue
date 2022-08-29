<script setup lang="ts">

import { useAppStore } from '@/store/index'

import { ref } from 'vue'

const appStore = useAppStore();

const activeName = ref('first')

</script>

<template>
 <el-dialog
    v-model="appStore.isShowSetupPanel"
    title="设置面板"
    width="30%"
  >
  <el-tabs v-model="activeName">

  </el-tabs>
  </el-dialog>
</template>



<style lang="scss">
.el-drawer {
  h3 {
    color: black;
  }
}

.el-card {
  margin-bottom: 30px;
}
</style>