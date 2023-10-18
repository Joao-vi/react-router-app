import { CanvasRenderer } from 'echarts/renderers'
import { use, ComposeOption } from 'echarts/core'
import { LineChart, LineSeriesOption } from 'echarts/charts'

import {
  LegendComponent,
  GridComponent,
  TooltipComponent,
  DataZoomComponent,
  GridComponentOption,
  TimelineComponent,
} from 'echarts/components'

export const setup = () =>
  use([
    LineChart,
    GridComponent,
    TooltipComponent,
    DataZoomComponent,
    LegendComponent,
    CanvasRenderer,
    TimelineComponent,
  ])

export type EChartOptions = ComposeOption<LineSeriesOption | GridComponentOption>
