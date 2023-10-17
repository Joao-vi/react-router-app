import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'

import precipitation from './mocks/precipitation.json'

const App = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div>
      <h1>hola</h1>

      <div style={{ width: 700, height: 600 }}>
        <ReactECharts
          option={{
            series: [
              {
                type: 'line',
                name: 'Chuva',
                data: precipitation.precipitation.map((i) => i.accumulation),
                smooth: 1,
                large: true,
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#3b82f6',
                    },
                    {
                      offset: 1,
                      color: '#bfdbfe',
                    },
                  ]),
                },

                lineStyle: {
                  width: 4,
                  color: '#3b82f6',
                },
              },
            ],
            xAxis: {
              type: 'category',
              data: precipitation.precipitation.map((i) =>
                DateUtils.getLocalDayMonthHourMinutesString(i.date)
              ),
              axisLine: {
                lineStyle: {
                  color: '#a1a1aa',
                },
              },
            },
            yAxis: {
              type: 'value',
              splitLine: {
                lineStyle: {
                  color: '#e4e4e7',
                  type: 'dashed',
                },
              },
            },
            dataZoom: [
              {
                type: 'inside',
              },
            ],
            tooltip: {
              trigger: 'axis',
              valueFormatter: (value) => value.toFixed(1) + 'mm',
            },
            textStyle: {
              color: '#3f3f46',
              fontWeight: 500,
              fontFamily: 'Poppins',
              fontSize: 14,
            },
          }}
        />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

export class DateUtils {
  static toViewDate(date: string | Date) {
    const _date = this.getSafeDate(date)

    return _date.toLocaleDateString('pt-br', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  private static getSafeDate(date: string | Date): Date {
    return date instanceof Date ? date : new Date(date)
  }

  static getLocalDayMonthHourMinutesString(date: string | Date): string {
    return (
      this.getSafeDate(date).toLocaleString('pt-br', {
        day: 'numeric',
        month: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }) + 'h'
    )
  }
}
