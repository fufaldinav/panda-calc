<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({ day: Number })
const emit = defineEmits(['update:minutes'])

const from = ref(null)
const to = ref(null)

const minutes = computed(() => {
  if (from.value === null) return 0
  if (to.value === null) return 0
  return getMinutes(to.value) - getMinutes(from.value)
})

const getMinutes = (time) => {
  const [hour, minute] = time.split(':')
  return Number(hour) * 60 + Number(minute)
}

watch(minutes, () => {
  emit('update:minutes', minutes.value)
})
</script>

<template>
  <div class="row" style="padding: 8px">
    <div class="col-2">{{ props.day }}</div>
    <q-input v-model="from" filled type="time" hint="Начало дня" class="col-4" />
    <div class="col-1"></div>
    <q-input v-model="to" filled type="time" hint="Конец" class="col-4" />
  </div>
</template>

<style scoped></style>
