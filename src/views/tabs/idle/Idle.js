import React, { lazy } from 'react'
const Navs = lazy(() => import('../../base/navs/Navs.js'))

const Idle = () => {
  return (
    <>
      <Navs />
      Idle page
    </>
  )
}

export default Idle
