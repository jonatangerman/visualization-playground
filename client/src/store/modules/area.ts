import { AreaChartData, AreaChart } from "./../../types";
import { storeProperties, chartStore } from "./../../helpers";

interface PieStore extends chartStore {
  state: () => {
    id: string;
    name: string;
    data: AreaChartData;
    default: AreaChartData;
    list: AreaChart[];
  };
}

const store: PieStore = {
  state: () => ({
    id: "default",
    name: "default",
    default: [
      { x: 1, y: 20 },
      { x: 2, y: 30 },
      { x: 3, y: 10 },
      { x: 4, y: 40 },
      { x: 5, y: 30 },
    ],
    data: [],
    list: [],
  }),
  ...storeProperties,
};

export default store;
