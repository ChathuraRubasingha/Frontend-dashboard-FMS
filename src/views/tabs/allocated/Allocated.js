import React, { lazy } from 'react'
const Navs = lazy(() => import('../../base/navs/Navs.js'))

const Allocated = () => {
  return (
    <>
      <Navs />
      Allocated page
    </>
  )
}

export default Allocated
