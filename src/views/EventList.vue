<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EvenCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EvenCard from '@/components/EventCard.vue'
//import axios from 'axios'

export default {
  name: 'EventList',
  components: {
    EvenCard
  },
  data() {
    return {
      events: null
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>