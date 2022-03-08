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
import Table2 from '../base/tables/Pv-table'
import Carousels from '../base/carousels/Carousels'

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
        <Carousels />
        <CCard>
          <CCardBody>
            <CCard>
              <CCardBody>
                <WidgetsDropdown />
                <CRow>
                  <CCol sm={4} lg={4}>
                    <Charts />
                  </CCol>
                  <CCol sm={8} lg={8}>
                    <BarCharts />
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
        <br />
        <CCol>
          <Tables />
        </CCol>
        <br />
        <div className="table2">
          <Table2 />
        </div>
        <br />
      </>
    </div>
  )
}

export default Dashboard
