<script setup>
import { computed, ref, watch } from 'vue'
import { DateTime, Info } from 'luxon'
import Day from '@/components/Day.vue'

const month = ref(null)
const dayInMonth = computed(() => {
  if (!month.value) return 0
  const date = DateTime.now().set({ month: month.value.value + 1 })
  return date.daysInMonth
})

const dayMinutes = ref([])
watch(dayInMonth, () => {
  dayMinutes.value = Array(dayInMonth.value).fill(0)
})
const totalMinutes = computed(() => dayMinutes.value.reduce((acc, curr) => acc + curr, 0))

const result = computed(() => (160 / 60) * totalMinutes.value)

const options = Info.months().map((month, index) => ({ label: month, value: index }))
</script>

<template>
  <q-select v-model="month" :options="options" option-label="label" label="Расчетный месяц" />
  <Day
    v-for="(minutes, index) in dayMinutes"
    :key="index + (month?.value ?? 0)"
    :day="index + 1"
    @update:minutes="dayMinutes[index] = $event"
  />
  <h5>Итого: {{ result.toFixed(2) }} рублей</h5>
</template>

<style scoped></style>
