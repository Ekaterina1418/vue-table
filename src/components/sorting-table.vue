<template>
  <tbody>
    <tr>
      <td>{{ table_data.id }}</td>
      <td>{{ table_data.mail }}</td>
      <td>{{ table_data.orders }}</td>
      <td>{{ table_data.status }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'SortingTable',
  props: {
    table_data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    sortBy(e) {
      this.$emit('sortBy', e)
    },
  },
}
</script>

<style></style>
