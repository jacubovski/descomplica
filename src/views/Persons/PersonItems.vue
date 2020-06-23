<template>
  <div>
    <ul v-for="person in persons" :key="person.id" >
      <li>
        <h4 :style="{color: person.eyeColor[0]}">{{person.name}}</h4>
        <button @click="remove(person.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PersonItems',
  computed: {
    ...mapState(['persons'])
  },
  methods: {
    remove (id) {
      this.$store.dispatch('removePersons', id)
    }
  }
}
</script>

<style scope>
button {
  padding: 8px;
  background-color:red;
  color:#fff;
  font-weight: bolder;
  border:0;
  cursor: pointer;
}
button:hover {
  background-color:#ff3333;
  color:#fff
}
ul {
  padding: 0;
  max-width: 300px;
}
li {
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background-color:#eee
}
li button {
  margin-left: 20px;
}
</style>
