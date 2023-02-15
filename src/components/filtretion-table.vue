<template>
  <input
    class="input-search"
    placeholder="Поиск"
    @input="$emit('input', $event.target.value)"
    type="text"
  />
</template>

<script>
export default {
  name: 'FiltrationTable',
  model: {
    prop: 'value',
    event: 'input',
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
