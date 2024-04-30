import { LineChartData, LineChart } from "./../../types";
import { storeProperties, chartStore } from "./../../helpers";

interface LineStore extends chartStore {
  state: () => {
    id: string;
    name: string;
    data: LineChartData;
    default: LineChartData;
    list: LineChart[];
  };
}

const store: LineStore = {
  state: () => ({
    id: "default",
    name: "default",
    default: [5, 9, 7, 13, 15],
    data: [],
    list: [],
  }),
  ...storeProperties,
};

export default store;
