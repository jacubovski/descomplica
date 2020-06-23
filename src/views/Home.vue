<template>
  <div>
    <h1>Persons from Star Wars</h1>
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
