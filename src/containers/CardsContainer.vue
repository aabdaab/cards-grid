<template>
  <div class="photos__container">
    <Overlay v-if="showLoading" />
    <Order @orderChanged="orderCards" />
    <div class="wrapper">
      <Card v-for="photo in photos"
        :key="photo.id"
        :photo="photo" />
      </div>
      <Pagination
        :currentPage="currentPage"
        :totalItems="totalItemsCount"
        :itemsPerPage="itemsPerPage"
        @pageChanged="loadCards" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import Card from "../components/Card"
import Pagination from "../components/Pagination"
import Order from "../components/Order"
import Overlay from "../components/Overlay"

const SORT_PROPERTY = 'title'
const INITIAL_ORDER = 'asc'
const ITEMS_PER_PAGE = 6

export default {
  name: "CardsContainer",
  mounted() {
    this.setPageNumber(1)
    this.setCardsPerPageLimit(ITEMS_PER_PAGE)
    this.setSortingProperty(SORT_PROPERTY)
    this.setOrdering(INITIAL_ORDER)
    this.loadCards(this.currentPage)
  },
  components: {
    Card,
    Pagination,
    Order,
    Overlay,
  },
  data() {
    return {
      itemsPerPage: ITEMS_PER_PAGE
    }
  },
  methods: {
    ...mapActions("photos", ["getPhotos", "setSortProperty", "setOrder", "setLimit"]),
    ...mapActions("pages", ["setPage"]),
    setPageNumber(pageNum) {
      this.setPage(pageNum)
    },
    setSortingProperty(property) {
      this.setSortProperty(property)
    },
    setOrdering(order) {
      this.setOrder(order)
    },
    setCardsPerPageLimit(limit) {
      this.setLimit(limit)
    },
    loadCards(currentPage) {
      this.getPhotos(currentPage)
    },
    orderCards() {
      this.loadCards(this.currentPage)
    },
  },
  computed: {
    photos() {
      return this.$store.state.photos.photos
    },
    order() {
      return this.$store.getters['photos/order']
    },
    currentPage() {
      return this.$store.getters['pages/currentPage']
    },
    totalItemsCount() {
      return parseInt(this.$store.getters['photos/totalPhotosCount'])
    },
    showLoading() {
      return this.$store.getters['photos/isLoading']
    },
  }
}
</script>

<style lang="scss" scoped>
.photos__container {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  display: table;
  margin-right: auto;
  margin-left: auto;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: repeat(2, 250px);
  grid-gap: 20px;
}
</style>
