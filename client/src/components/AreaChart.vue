<template>
  <div class="component-container">
    <div class="data-container">
      <h3>Modify Area Chart Data</h3>
      <ToggleButton
        class="isRealTime"
        v-model="isRealTime"
        onLabel="Realtime On"
        offLabel="Realtime Off"
      />
      <div>
        <InputText v-model="name" placeholder="Chart Name" />

        <div v-for="(point, index) in chartData" :key="index">
          <p>
            Point {{ index + 1 }}:
            <InputNumber
              :key="Math.random()"
              v-model="point.y"
              :min="0"
              :max="100"
            />
            <Button icon="pi pi-minus" @click="removePoint(index)" />
          </p>
        </div>
        <Button label="Add Point" @click="addPoint" />
        <Button
          v-show="!isRealTime"
          label="Update Area"
          @click="updateChartData"
        />
      </div>
    </div>
    <div class="chart-elements-container">
      <Chart
        :data="chartComputedData"
        :type="Charts.AREA"
        :isRealTime="isRealTime"
      />
      <Button :label="actionLabel" @click="handleDbUpdate" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Charts } from "./../types";
import { useChartUI } from "./../composables/useChartUI";

const type = Charts.AREA;

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
