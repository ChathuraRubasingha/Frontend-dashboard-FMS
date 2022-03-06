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
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Tables = () => {
  return (
    <div className="table-container">
      <>
        <CCol xs={12}>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" className="Catogory TableHedder">
                  Ctogory
                </CTableHeaderCell>
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
              <CPagination className="justify-content-end" aria-label="Page navigation example">
                <CPaginationItem disabled>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>4</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
              </CPagination>
            </CTableBody>
          </CTable>
        </CCol>
      </>
    </div>
  )
}

export default Tables
