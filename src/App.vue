<script lang="ts" setup>
import setupBtn from '@/layout/setupBtn.vue';
import setupPanel from '@/layout/setupPanel.vue';

import { useAppStore } from '@/store'


const appStore = useAppStore();


</script>


<template>
  <div>
    <setupBtn />
    <setupPanel />
  </div>
</template>

<style lang="scss">
</style>