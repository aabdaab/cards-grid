<template>
  <div class="pagination__wrapper">
    <img
      @click="pageChanged(previousPage)"
      :class="[{ 'disabled': isFirstPage }, 'arrow left-arrow cursor-pointer']"
      src="src/assets/icons/right-arrow.png"/>
    <span
      v-for="pageNum in paginationRange" :key="pageNum"
      :class="activePage(pageNum)"
      class="page-number cursor-pointer"
      @click="pageChanged(pageNum)">
        {{pageNum}}
    </span>
    <img
      @click="pageChanged(nextPage)"
      :class="[{ 'disabled': isLastPage }, 'arrow cursor-pointer']"
      src="src/assets/icons/right-arrow.png"/>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import * as types from "../store/mutation-types"

export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalItems: Number,
    itemsPerPage: Number,
    visiblePages: {
      type: Number,
      default: 5,
      coerce: value => parseInt(value)
    }
  },
  computed: {
    lastPage() {
      return this.totalItems % this.itemsPerPage === 0
        ? this.totalItems / this.itemsPerPage
        : Math.floor(this.totalItems / this.itemsPerPage) + 1
    },
    previousPage() {
      return this.currentPage == 1 ? 1 : this.currentPage - 1
    },
    nextPage() {
      return this.currentPage == this.lastPage
        ? this.lastPage
        : this.currentPage + 1
    },
    isFirstPage() {
      return this.currentPage == 1
    },
    isLastPage() {
      return this.currentPage == this.lastPage
    },
    paginationRange() {
      let start =
        this.currentPage - this.visiblePages / 2 <= 0
          ? 1
          : this.currentPage + this.visiblePages / 2 > this.lastPage
            ? this.lastPage - this.visiblePages + 1
            : Math.ceil(this.currentPage - this.visiblePages / 2)

      let range = new Array()
      for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
        range.push(start + i)
      }
      return range
    },
  },
  methods: {
    ...mapActions("pages", ["setPage"]),
    activePage(pageNum) {
      return this.currentPage === pageNum ? "page--active" : ""
    },
    pageChanged(pageNum) {
      this.setPage(pageNum)
      this.$emit("pageChanged", pageNum)
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/base.scss';

$margin-page-numbers-sides: 5px;
$padding-page-numbers-bottom: 5px;
$padding-for-underline-active-page: 2px;

.arrow {
  height: 8px;
  padding-bottom: $padding-page-numbers-bottom;
  padding-left: $margin-page-numbers-sides;
}
.left-arrow {
  transform: scaleX(-1);
  padding-right: $margin-page-numbers-sides;
}
.page-number {
  margin-left: $margin-page-numbers-sides;
  padding-left: $padding-for-underline-active-page;
  padding-right: $padding-for-underline-active-page;
  margin-right: $margin-page-numbers-sides;
  padding-bottom: $padding-page-numbers-bottom;
}
.pagination__wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page--active {
  border-bottom: 1px solid;
  padding-bottom: $padding-page-numbers-bottom - 1;
}
</style>
