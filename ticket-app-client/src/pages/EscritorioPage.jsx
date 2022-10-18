import React, { useContext, useState } from 'react'
import { Button, Col, Divider, Row, Typography } from 'antd'
import {
  CloseCircleOutlined,
  RightOutlined
} from '@ant-design/icons'
import { useShowMenu } from '../hooks/useShowMenu'
import { getUsuarioStorage } from '../helpers/getUsuarioStorage'
import { Navigate, useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'

const { Title, Text } = Typography

const EscritorioPage = () => {
  useShowMenu(true)
  const { socket } = useContext(SocketContext)
  const [ticket, setTicket] = useState(null)
  const [usuario] = useState(getUsuarioStorage())
  const navigate = useNavigate()
  const salir = () => {
    console.log('salir')
    localStorage.removeItem('agente')
    localStorage.removeItem('escritorio')
    navigate('/ingresar', { replace: true })
  }
  const siguienteTicket = () => {
    socket.emit('siguiente-ticket', usuario, ticket => {
      setTicket(ticket)
    })
  }

  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate to='/ingresar' />
  }
  console.log(usuario)

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>
            Usted esta trabajando en el escritorio
            <Text type='success'>
              {' '}
              {usuario.escritorio}
            </Text>
          </Text>
        </Col>
        <Col span={4} align='right'>
          <Button
            shape='round'
            type='danger'
            onClick={salir}
          >
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
        <Divider />
      </Row>

      {ticket && (
        <Row>
          <Col>
            <Text>Está atendiendo el ticket número: </Text>
            <Text style={{ fontSize: 30 }} type='danger'>
              {ticket.numero}
            </Text>
          </Col>
        </Row>
      )}

      <Row>
        <Col offset={18} span={6} align='right'>
          <Button
            onClick={siguienteTicket}
            shape='round'
            type='primary'
          >
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default EscritorioPage
