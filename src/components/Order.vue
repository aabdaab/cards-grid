<template>
  <div class="order__button cursor-pointer" @click="changePhotosOrder">
    <span>{{sortingPropertyName}}</span>
    <img :class="[{ 'arrow--up': isAsc }, 'arrow']" src="src/assets/icons/down-arrow.png"/>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import { capitalizeFirstLetter } from "../utils"

const ASC_ORDER = 'asc'
const DESC_ORDER = 'desc'

export default {
  name: "Order",
  methods: {
    ...mapActions("photos", ["setOrder"]),
    changePhotosOrder() {
      this.$store.getters["photos/order"] === ASC_ORDER
        ? this.setOrder(DESC_ORDER)
        : this.setOrder(ASC_ORDER)
      this.$emit("orderChanged")
    }
  },
  computed: {
    isAsc() {
      return this.$store.getters["photos/order"] === ASC_ORDER
    },
    sortingPropertyName() {
      return capitalizeFirstLetter(this.$store.getters["photos/sortProperty"])
    }
  },
};
</script>

<style lang="scss" scoped>
@import 'src/assets/css/base.scss';

.order__button {
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  height: 17px;
}
.arrow {
  max-height: 100%;
}
.arrow--up {
  transform: scaleY(-1);
}
</style>
