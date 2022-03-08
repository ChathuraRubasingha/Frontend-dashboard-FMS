import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import {
  CCol,
  CRow,
  CPagination,
  CPaginationItem,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CCard,
  CCardBody,
} from '@coreui/react'

const Table2 = () => {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState('')
  const getProductData = async () => {
    try {
      const data = await axios.get('https://nba-players.herokuapp.com/players-stats')
      console.log(data.data)
      setProduct(data.data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProductData()
  }, [])
  return (
    <CCard className="table2">
      <CCardBody>
        <div className="table-container">
          <>
            <CCol xs={12}>
              <div className="inner-hedder">
                <CCard>
                  <CCardBody className="Allocated-innerHedder">
                    <CRow>
                      <CCol sm={6} lg={6}>
                        <h5>Vehicle Overview</h5>
                      </CCol>
                      <CCol sm={6} lg={6}>
                        <CInputGroup className="mb-1 my-0 mx-0" lg={6} xs={6}>
                          <CInputGroupText>
                            <CIcon icon={cilSearch} />
                          </CInputGroupText>
                          <CFormInput
                            placeholder="Search"
                            onChange={(e) => {
                              setSearch(e.target.value)
                            }}
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </div>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Excavetor</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Poker</CTableHeaderCell>
                    <CTableHeaderCell scope="col">JCB</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Bouser</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Boom Truck</CTableHeaderCell>
                    <CTableHeaderCell scope="col">1T Roller</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Excavetor</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Poker</CTableHeaderCell>
                    <CTableHeaderCell scope="col">JCB</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Bouser</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Boom Truck</CTableHeaderCell>
                    <CTableHeaderCell scope="col">1T Roller</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Excavetor</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Poker</CTableHeaderCell>
                    <CTableHeaderCell scope="col">JCB</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Bouser</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Boom Truck</CTableHeaderCell>
                    <CTableHeaderCell scope="col">1T Roller</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {product
                    .filter((item) => {
                      if (search == '') {
                        return item
                      } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                        return item
                      }
                    })
                    .map((item) => {
                      return (
                        <CTableRow key={item.id}>
                          <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                          <CTableDataCell>{item.games_played}</CTableDataCell>
                        </CTableRow>
                      )
                    })}
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
      </CCardBody>
    </CCard>
  )
}

export default Table2
