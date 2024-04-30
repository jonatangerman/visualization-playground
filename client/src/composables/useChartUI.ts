import { useStore } from "vuex";
import { ref, computed, watch } from "vue";
import { Charts } from "./../types";
import { useToast } from "primevue/usetoast";

export const useChartUI = (type: string) => {
  const store = useStore();
  const isRealTime = ref(store.state.isRealTime);
  const toast = useToast();

  const name = ref("");

  const chartComputedData = computed(() => store.state[type].data);

  const handleSetData = (data) => {
    switch (type) {
      case Charts.LINE:
        return [...data];
      default:
        return [...data].map((data) => ({ ...data }));
    }
  };
  const setChartData = (data) => {
    if (isRealTime.value) {
      return data;
    } else {
      return handleSetData(data);
    }
  };

  const chartData = ref([] as any);

  const loadData = async () => {
    const data = await store.dispatch(`${type}/fetchAll`, type);
    name.value = store.state[type].name;
    chartData.value = setChartData(store.state[type].data);
  };

  loadData();

  const addPoint = (): void => {
    switch (type) {
      case Charts.PIE:
        chartData.value.push({ label: "New Slice", value: 10 });
        break;

      case Charts.LINE:
        chartData.value.push(1);
        break;

      case Charts.AREA:
        chartData.value.push({ x: 1, y: 1 });
        break;

      default:
        throw new Error(`${type} is not a valid/supported chart`);
    }
  };

  const removePoint = (index): void => {
    chartData.value.splice(index, 1);
  };

  const updateChartData = (): void => {
    store.dispatch(`${type}/updateData`, chartData.value);
  };

  watch(
    chartComputedData,
    (value) => {
      chartData.value = setChartData(value);
    },
    { deep: true }
  );

  watch(
    isRealTime,
    () => {
      store.dispatch("toggleRealTime", isRealTime);
      chartData.value = setChartData(store.state[type].data);
    },
    { deep: true }
  );

  const handleDbUpdate = async () => {
    if (canDelete.value) {
      await store.dispatch(`${type}/updateRecord`, {
        type,
        id: store.state[type].id,
        data: {
          name,
          data: chartData.value,
        },
      });
      toast.add({
        severity: "info",
        summary: "Info",
        detail: "Chart Updated Successfully",
        life: 3000,
      });
    } else {
      await store.dispatch(`${type}/createRecord`, {
        type,
        data: {
          name: name.value,
          data: chartData.value,
        },
      });
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Chart Created Successfully",
        life: 3000,
      });
    }
  };

  const actionLabel = computed(() => {
    return store.state[type].id !== "default" ? "Update Chart" : "Create Chart";
  });

  const canDelete = computed(() => {
    return store.state[type].id !== "default";
  });

  const isActionDisabled = computed(() => {
    return name.value == "";
  });

  return {
    updateChartData,
    removePoint,
    addPoint,
    chartComputedData,
    isRealTime,
    chartData,
    handleDbUpdate,
    actionLabel,
    isActionDisabled,
    name,
  };
};
