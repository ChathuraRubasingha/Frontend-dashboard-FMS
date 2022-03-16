import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Navs = () => {
  return (
    <div className="tab-bar">
      <>
        <CCol xs={12}>
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink href="/dashboard" active>
                Summary of Vehicles
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/tabs/allocated">Allocated Vehicles</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/tabs/idle">Idle Vehicles</CNavLink>
            </CNavItem>
          </CNav>
        </CCol>
      </>
    </div>
  )
}

export default Navs
