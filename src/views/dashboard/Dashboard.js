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
        <WidgetsDropdown />
        <CRow>
          <CCol xs={8}>
            <Tables />
          </CCol>
          <CCol xs={4}>
            <Charts />
          </CCol>
        </CRow>
        <BarCharts />
      </>
    </div>
  )
}

export default Dashboard
