import { useRef, useEffect } from 'react'
import { init, ECharts, SetOptionOpts } from 'echarts/core'

import { EChartOptions } from './config'

export interface ChartProps {
  option: EChartOptions
  settings?: SetOptionOpts
}

export const Chart = (props: ChartProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const chart = useRef<ECharts | null>(null)

  useEffect(() => {
    if (!divRef.current) return

    chart.current = init(divRef.current)

    return () => chart.current?.dispose()
  }, [])

  useEffect(() => {
    chart.current?.setOption(props.option, props.settings)
  }, [props.option, props.settings])

  return (
    <>
      <button
        onClick={() =>
          chart.current?.dispatchAction({
            type: 'restore',
          })
        }
      >
        reset
      </button>

      <div
        ref={divRef}
        style={{ width: 500, height: 500 }}
      />
    </>
  )
}
