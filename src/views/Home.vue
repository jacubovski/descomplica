<template>
  <div class="home">
    <Persons />
  </div>
</template>

<script>
// @ is an alias to /src
import Persons from '@/views/Persons/Person'

export default {
  name: 'Home',
  components: {
    Persons
  }
}
</script>
