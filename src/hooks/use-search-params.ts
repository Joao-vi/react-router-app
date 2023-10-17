import { useEffect, useState } from 'react'

import { create } from 'zustand'
import { querystring } from 'zustand-querystring'

const getSearchParamsFromUrl = () => {
  const urlSearchParams = new URLSearchParams(location.search)

  return Object.fromEntries(urlSearchParams)
}

export const setSearchurlParams = (data: Record<string, any>) => {
  const urlSearchParams = new URLSearchParams(data)
  const currentLocation = location.href.replace(location.search, `?${urlSearchParams.toString()}`)

  window.history.pushState({}, '', currentLocation)
}

export const useSearchParams = () => {
  const [state, setState] = useState<any>(() => getSearchParamsFromUrl() || {})

  useEffect(() => {
    setSearchurlParams(state)
  }, [state])

  return [state, setState]
}

interface Store {
  count: number
  ticks: number
  someNestedState: {
    nestedCount: number
    hello: string
  }
  increment(): void
}

export const useStore = create<Store>()(
  querystring(
    (set, get) => ({
      count: 0,
      ticks: 0,
      someNestedState: {
        nestedCount: 0,
        hello: 'Hello',
      },

      increment: () =>
        set((state) => ({
          someNestedState: { nestedCount: state.someNestedState.nestedCount + 1 },
        })),
    }),
    {
      select: () => ({ count: false, someNestedState: true }),
    }
  )
)
