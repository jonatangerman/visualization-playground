<template>
  <div class="component-container">
    <div class="data-container">
      <Toast />
      <h3>Modify Line Chart Data</h3>
      <InputText v-model="name" placeholder="Chart Name" />
      <ToggleButton
        class="isRealTime"
        v-model="isRealTime"
        onLabel="Realtime On"
        offLabel="Realtime Off"
      />
      <div v-for="(value, index) in chartData" :key="index">
        <p>
          Point {{ index + 1 }}:
          <InputNumber
            :key="Math.random()"
            v-model="chartData[index]"
            :min="0"
            :max="50"
          />
          <Button icon="pi pi-minus" @click="removePoint(index)" />
        </p>
      </div>
      <Button label="Add Point" @click="addPoint" />
      <Button
        v-show="!isRealTime"
        label="Update Line"
        @click="updateChartData"
      />
    </div>
    <div class="chart-elements-container">
      <Chart
        :data="chartComputedData"
        :type="Charts.LINE"
        :isRealTime="isRealTime"
      />
      <Button :label="actionLabel" @click="handleDbUpdate" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Charts } from "./../types";
import { useChartUI } from "./../composables/useChartUI";

const type = Charts.LINE;

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
