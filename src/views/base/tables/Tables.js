import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Tables = () => {
  return (
    <div className="table-container">
      <>
        <CCol xs={12}>
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Ctogory</CTableHeaderCell>
                <CTableHeaderCell scope="col">Registered</CTableHeaderCell>
                <CTableHeaderCell scope="col">Allocated</CTableHeaderCell>
                <CTableHeaderCell scope="col">Idle</CTableHeaderCell>
                <CTableHeaderCell scope="col">Accident</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">Motor Lorry</CTableHeaderCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">Bike</CTableHeaderCell>
                <CTableDataCell>4</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">Motor Car</CTableHeaderCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">Motor Bike</CTableHeaderCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">JCB</CTableHeaderCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">Motor Lorry</CTableHeaderCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">Motor Lorry</CTableHeaderCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">Bike</CTableHeaderCell>
                <CTableDataCell>4</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">Motor Car</CTableHeaderCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">Motor Bike</CTableHeaderCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">JCB</CTableHeaderCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">Motor Lorry</CTableHeaderCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCol>
      </>
    </div>
  )
}

export default Tables
