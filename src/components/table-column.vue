<template>
  <div>
    <filteration-table v-model="value" />
    <div class="container mtb">
      <table class="table">
        <thead>
          <tr>
            <th>
              <figure class="table-column" @click="sortBy('id')">
                <figcaption>Место</figcaption>
                <img src="../assets/icons/arrow.svg" alt="arrow" />
              </figure>
            </th>
            <th>
              <figure class="table-column" @click="sortBy('mail')">
                <figcaption>Логин</figcaption>
                <img src="../assets/icons/arrow.svg" alt="arrow" />
              </figure>
            </th>
            <th>
              <figure class="table-column" @click="sortBy('orders')">
                <figcaption>Подтверждённые заказы</figcaption>
                <img src="../assets/icons/arrow.svg" alt="arrow" />
              </figure>
            </th>
            <th>
              <figure class="table-column" @click="sortBy('status')">
                <figcaption>Статус</figcaption>
                <img src="../assets/icons/arrow.svg" alt="arrow" />
              </figure>
            </th>
          </tr>
        </thead>
        <sorting-table
          v-for="order in filter"
          :key="order.id"
          :table_data="order"
        />
      </table>
    </div>
  </div>
</template>

<script>
import SortingTable from '@/components/sorting-table.vue'
import FilterationTable from '@/components/filtretion-table.vue'
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
  name: 'table-column',
  components: {
    SortingTable,
    FilterationTable,
  },
  data() {
    return {
      value: '',
      sortDirection: 'asc',
    }
  },
  methods: {
    ...mapMutations(['setOrderList', 'sortBy']),
  },
  computed: {
    ...mapGetters(['getOrderList']),
    ...mapState(['orderList']),
    filter() {
      const arr = this.orderList.filter((order) => {
        return (
          order.status.toUpperCase().includes(this.value.toUpperCase()) ||
          order.mail.toUpperCase().includes(this.value.toUpperCase()) ||
          order.orders === parseInt(this.value)
        )
      })

      return arr
    },
  },
}
</script>

<style></style>
