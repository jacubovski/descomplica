<template>
  <div>
    <input type="text" v-model="search" placeholder="Filter By Name">
      <span class="radio-toolbar">
        Oder By
        <input
        type="radio"
        id="radioApple"
        name="radioFruit"
        v-model="filterParams.orderBy"
        value="name_ASC"
        checked
        >
        <label for="radioApple">ASC</label>

        <input
        type="radio"
        id="radioBanana"
        name="radioFruit"
        v-model="filterParams.orderBy"
        value="name_DESC"
        >
        <label for="radioBanana">DESC</label>
      </span>
  </div>
</template>

<script>
export default {
  name: 'FilterComponent',
  data () {
    return {
      search: '',
      filterParams: {
        first: 10,
        filter: '',
        orderBy: 'name_ASC'
      }
    }
  },
  watch: {
    async search (value) {
      this.filterParams.filter = value
      this.getPersons()
    },
    filterParams: {
      deep: true,
      handler (value) {
        this.getPersons()
      }
    }
  },
  methods: {
    getPersons () {
      this.$store.dispatch('setPersons', this.filterParams)
    }
  }
}
</script>

<style>
input {
  padding: 5px;
  border-bottom: 1px solid #888;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
.radio-toolbar {
  margin: 10px;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar label {
    display: inline-block;
    background-color: #ddd;
    padding: 5px 10px;
    font-family: sans-serif, Arial;
    font-size: 13px;
    border: 2px solid #444;
    border-radius: 4px;
}

.radio-toolbar label:hover {
  background-color: #dfd;
}

.radio-toolbar input[type="radio"]:focus + label {
    border: 2px dashed #444;
}

.radio-toolbar input[type="radio"]:checked + label {
    background-color: #bfb;
    border-color: #4c4;
}
</style>
