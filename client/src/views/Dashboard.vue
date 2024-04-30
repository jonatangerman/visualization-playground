<template>
  <TabView lazy>
    <TabPanel header="Pie Chart">
      <PieChart />
    </TabPanel>
    <TabPanel header="Line Chart">
      <LineChart />
    </TabPanel>
    <TabPanel header="Area Chart">
      <AreaChart />
    </TabPanel>
  </TabView>
</template>

<script lang="ts" setup>
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import LineChart from "./../components/LineChart.vue";
import PieChart from "./../components/PieChart.vue";
import AreaChart from "./../components/AreaChart.vue";
</script>
