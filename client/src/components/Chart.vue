<template>
  <div class="chart-container" ref="chart"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, defineProps, computed } from "vue";
import * as d3 from "d3";
import {
  Charts,
  ChartDataFormats,
  LineChartData,
  PieChartData,
  AreaChartData,
} from "./../types";
import {
  _generatePieChart,
  _generateAreaChart,
  _generateLineChart,
} from "./../helpers";

interface Props {
  data: ChartDataFormats;
  type: Charts;
  isRealTime: boolean;
}

const props = defineProps<Props>();

const chart = ref(null);

const drawChart = () => {
  const svg = d3.select(chart.value).selectAll("svg").data([null]);
  function _handleDraw() {
    switch (props.type) {
      case Charts.PIE:
        return _generatePieChart(svg, props.data as PieChartData);
      case Charts.LINE:
        return _generateLineChart(svg, props.data as LineChartData);
      case Charts.AREA:
        return _generateAreaChart(svg, props.data as AreaChartData);
      default:
        throw new Error(`${props.type} is not a valid/supported chart`);
    }
  }
  _handleDraw();
};

const data = computed(() => props.data);

watch(
  data,
  () => {
    d3.select(chart.value).selectAll("*").remove();
    drawChart();
  },
  { deep: true }
);

onMounted(drawChart);
</script>
