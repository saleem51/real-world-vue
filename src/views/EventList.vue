<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EvenCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EvenCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';

export default {
  name: 'EventList',
  components: {
    EvenCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
    .then(response => this.events = response.data)
    .catch(error => console.log(error))
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