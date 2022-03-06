import { CCol, CContainer, CRow } from '@coreui/react'
import React, { lazy } from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
const Navs = lazy(() => import('../../base/navs/Navs.js'))

const Allocated = () => {
  return (
    <>
      <Navs />
      <CCard className="mb-4">
        <CCardHeader>Allocation</CCardHeader>
        <CCardBody>hello this is card body</CCardBody>
      </CCard>
    </>
  )
}

export default Allocated
