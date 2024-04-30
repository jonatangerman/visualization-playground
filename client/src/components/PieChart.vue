<template>
  <div class="component-container">
    <Toast />
    <div class="data-container">
      <h3>Modify Pie Chart Data</h3>
      <ToggleButton
        class="isRealTime"
        v-model="isRealTime"
        onLabel="Realtime On"
        offLabel="Realtime Off"
      />
      <div>
        <InputText v-model="name" placeholder="Chart Name" />
        <div v-for="(slice, index) in chartData" :key="index">
          <p>
            <InputText v-model="slice.label" placeholder="Name" />
            <InputNumber
              v-model="slice.value"
              :min="0"
              :max="100"
              :key="Math.random()"
            />
            <Button icon="pi pi-minus" @click="removePoint(index)" />
          </p>
        </div>
        <Button label="Add Slice" @click="addPoint" />
        <Button
          v-show="!isRealTime"
          label="Update Slice"
          @click="updateChartData"
        />
      </div>
    </div>

    <div class="chart-elements-container">
      <Chart :data="chartComputedData" :type="type" :isRealTime="isRealTime" />
      <Button :label="actionLabel" @click="handleDbUpdate" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Charts } from "./../types";
import { useChartUI } from "./../composables/useChartUI";
const type = Charts.PIE;

const {
  updateChartData,
  removePoint,
  addPoint,
  chartComputedData,
  isRealTime,
  chartData,
  handleDbUpdate,
  name,
  actionLabel,
} = useChartUI(type);
</script>
