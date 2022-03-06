import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import Tables from '../base/tables/Tables'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const Charts = lazy(() => import('../charts/PieCharts.js'))
const BarCharts = lazy(() => import('../charts/BarChart'))
const Table = lazy(() => import('../base/tables/Tables'))
const Navs = lazy(() => import('../base/navs/Navs.js'))

const Dashboard = () => {
  return (
    <div className="summary-content">
      <>
        <Navs />
        <div className="innerHedder">
          <h4>Summary Of Vehicle</h4>
        </div>
        <WidgetsDropdown />
        <CRow>
          <CCol sm={6} lg={4}>
            <Charts />
          </CCol>
          <CCol sm={6} lg={8}>
            <BarCharts />
          </CCol>
        </CRow>
        <CCol lg={12}>
          <div className="innerHedder">
            <h4>Vehicle Overview</h4>
          </div>
          <Tables />
        </CCol>
        <div className="innerHedder">
          <h4>Project vise Vehicle Allocation</h4>
        </div>
      </>
    </div>
  )
}

export default Dashboard
