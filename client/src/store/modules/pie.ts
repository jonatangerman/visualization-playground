import { PieChartData, PieChart } from "./../../types";
import { storeProperties, chartStore } from "./../../helpers";

interface PieStore extends chartStore {
  state: () => {
    id: string;
    name: string;
    data: PieChartData;
    default: PieChartData;
    list: PieChart[];
  };
}

const store: PieStore = {
  state: () => ({
    id: "default",
    name: "default",
    default: [
      { label: "Apples", value: 30 },
      { label: "Oranges", value: 15 },
      { label: "Bananas", value: 45 },
      { label: "Berries", value: 10 },
    ],
    data: [],
    list: [],
  }),
  ...storeProperties,
};

export default store;
