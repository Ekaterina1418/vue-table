import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [
      {
        id: 1,
        mail: 'smith@gmail.com',
        orders: 312,
        status: 'Ценитель красоты',
      },
      {
        id: 2,
        mail: 'lenin@gmail.com',
        orders: 120,
        status: 'Поставщик аксессуаров',
      },
      {
        id: 3,
        mail: 'mask@gmail.com',
        orders: 98,
        status: 'Конкурент минздрава',
      },
      {
        id: 4,
        mail: 'dog@gmail.com',
        orders: 64,
        status: 'рыбак',
      },
      {
        id: 5,
        mail: 'nightmare@gmail.com',
        orders: 34,
        status: 'oхотник',
      },
      {
        id: 6,
        mail: 'cat@gmail.com',
        orders: 1,
        status: 'Ценитель красоты',
      },
    ],
    sortDirection: 'asc',
  },
  getters: {
    getOrderList(state) {
      return state.orderList
    },
  },
  mutations: {
    sortBy(state, sort) {
      if (sort === 'id') {
        if (state.sortDirection === 'asc') {
          state.orderList.sort((a, b) => b.id - a.id)
          state.sortDirection = 'dec'
        } else if (state.sortDirection === 'dec') {
          state.orderList.sort((a, b) => a.id - b.id)
          state.sortDirection = 'asc'
        }
      } else if (sort === 'orders') {
        if (state.sortDirection === 'asc') {
          state.orderList.sort((a, b) => b.orders - a.orders)

          state.sortDirection = 'dec'
        } else if (state.sortDirection === 'dec') {
          state.orderList.sort((a, b) => a.orders - b.orders)
          state.sortDirection = 'asc'
        }
      } else if (sort === 'status') {
        if (state.sortDirection === 'asc') {
          state.orderList.sort((a, b) => (b.status > a.status ? -1 : 1))
          state.sortDirection = 'dec'
        } else if (state.sortDirection === 'dec') {
          state.orderList.sort((a, b) => (a.status < b.status ? 1 : -1))
          state.sortDirection = 'asc'
        }
      } else if (sort === 'mail') {
        if (state.sortDirection === 'asc') {
          state.orderList.sort((a, b) => (b.mail > a.mail ? -1 : 1))
          state.sortDirection = 'dec'
        } else if (state.sortDirection === 'dec') {
          state.orderList.sort((a, b) => (a.mail < b.mail ? 1 : -1))
          state.sortDirection = 'asc'
        }
      }
    },

    setOrderList(state, payload) {
      state.orderList = payload
    },
  },
  actions: {},
  modules: {},
})
