<template>
  <section class="box-person">
    <Filters />
    <PersonItems/>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import PersonItems from './PersonItems'
import Filters from '../../components/Filters'
export default {
  name: 'Person',
  components: {
    PersonItems,
    Filters
  },
  computed: {
    ...mapState(['persons'])
  },
  async mounted () {
    this.$store.dispatch('setPersons', {
      first: 10,
      filter: '',
      orderBy: 'name_ASC'
    })
  }
}
</script>

<style>

.box-person {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box-person section {
  background: #eee;
  border-radius: 10%;
  width: 120px;
  height: 120px;
  padding:10px;
  margin: 10px 0;
}

@media (max-width: 768px) {
  .box-person {
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
  }
}
</style>
