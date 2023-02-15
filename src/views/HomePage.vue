<template>
  <div>
  <table-column />
  </div>
</template>

<script>


import TableColumn from '@/components/table-column.vue'

export default {
  components: {
    TableColumn,
  },
  data() {
    return {
      value: '',
    }
  },
}
</script>

<style lang="scss">
@import '../assets/styles/style.scss';
</style>
