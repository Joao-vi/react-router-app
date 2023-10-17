import { ReactNode, Suspense, useEffect, useState } from 'react'
import {
  Await,
  Link,
  Navigate,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

const AuthRoutes = (
  <Route
    path="/"
    element={<RootElement />}
  >
    <Route
      index
      element={<Dashboard />}
    />

    <Route
      path="users"
      element={<Users />}
      loader={async (params) => {
        console.log('ola', params)
        const promisee = await new Promise((r, reject) => setTimeout(() => r('foi'), 2000))
        // setSearchurlParams({ color: 'red' })

        return defer({ user: promisee })
      }}
    />
  </Route>
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login">
        <Route
          index
          element={<Login />}
        />
        <Route
          path="remember-password"
          element={<RememberPassword />}
        />
      </Route>

      {AuthRoutes}

      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Route>
  )
)

export const PAGE_ANIMATION = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      bounce: 0,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      bounce: 0,
    },
  },
}

export { router }
