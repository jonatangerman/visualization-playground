export enum Charts {
  PIE = "pie",
  LINE = "line",
  AREA = "area",
}

export type AreaChartPoint = {
  x: number;
  y: number;
};

export type LineChart = {
  id: string;
  data: LineChartData;
  name: string;
};

export type AreaChart = {
  id: string;
  data: AreaChartData;
  name: string;
};

export type PieChart = {
  id: string;
  data: PieChartData;
  name: string;
};

export type PieChartPoint = {
  label: string;
  value: number;
};

export type LineChartData = number[];
export type PieChartData = PieChartPoint[];
export type AreaChartData = AreaChartPoint[];

export type ChartDataFormats = PieChartData | LineChartData | AreaChartData;
