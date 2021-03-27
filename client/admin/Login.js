import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
// import CIcon from '@coreui/icons-react'
import {signin} from '../auth/api-auth'
import auth from '../auth/auth-helper'
import { Container, Row, Card, Form, Col, Button} from 'react-bootstrap'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CInput,
//   CInputGroup,
//   CInputGroupPrepend,
//   CInputGroupText,
//   CRow
// } from '@coreui/react'

export default function Login(props) {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
      })
    
      const clickSubmit = () => {
        const user = {
          email: values.email || undefined,
          password: values.password || undefined
        }
    
       signin(user).then((data) => {
          if (data) {
            setValues({ ...values, error: data.error})
          } else {
            auth.authenticate(data, () => {
              setValues({ ...values, error: '',redirectToReferrer: true})
            })
          }
          if(user.isAdmin){
            setValues({...values, error:data.error})
          }
          else{
            auth.authenticate(data, ()=>{
              setValues({...values, error:'', redirectToReferrer:true})
            })
          }
        })
      }
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    
      const {from} = props.location.state || {
        from: {
          pathname: '/admin'
        }
      }
      const {redirectToReferrer} = values
      if (redirectToReferrer) {
          return (<Redirect to={from}/>)
      }
    return (
        <div className="c-app c-default-layout flex-row align-items-center">
        {/* <CContainer>
          <Row className="justify-content-center">
            <Col md="6">
                <Card className="p-2">
                <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" onChange={handleChange('email')} value={values.email} id='email' />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" onChange={handleChange('password')} value={values.password} id='password'/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={clickSubmit}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </Card>    
            </Col>
          </Row>
        </CContainer> */}
          <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">Admin Login</h3>
        </div>
        <div className="form-horizontal">
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" onChange={handleChange('email')} value={values.email} id='email'  placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" onChange={handleChange('password')} value={values.password} id='password' placeholder="Password" />
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-sm-2 col-sm-10">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                  <label className="form-check-label" htmlFor="exampleCheck2">Remember me</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-info" onClick={clickSubmit}>Sign in</button>
            <button type="submit" className="btn btn-default float-right">Cancel</button>
          </div>
        </div>
      </div>

            
      </div>
    )
}
