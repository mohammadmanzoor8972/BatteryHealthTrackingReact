import * as React from 'react'
import { mount } from 'enzyme'
import { AcademyDeviceList, calculateBattery } from './academy-device-list.component'


describe('AcademyDeviceList component', () => {
  const mockUser: any = {
    academyId: 30007,
    batteries: {}
  }

  it('should render no devics placeholder when no hobbies defined', () => {
    expect(
      mount(<AcademyDeviceList academys={mockUser} batteries={mockUser.batteries}  />)
    ).toMatchSnapshot()
  })

  it('should render devices', () => {
    expect(
      mount(<AcademyDeviceList academys={mockUser} batteries={[]}/>)
    ).toMatchSnapshot()
  })

  it('should should calculate', () => {
    let calculate = calculateBattery("TT-C67ML-A-0001-02585",{'TT-C67ML-A-0001-02585':[{"academyId":30007,"batteryLevel":0.47,"employeeId":"T1001061","serialNumber":"TT-C67ML-A-0001-02585","timestamp":"2019-05-17T07:39:57.884+01:00"},
    {"academyId":30007,"batteryLevel":0.38,"employeeId":"T1001061","serialNumber":"TT-C67ML-A-0001-02585","timestamp":"2019-05-17T15:09:58.221+01:00"}]})
    console.log(calculate)
    expect(
      calculate).toEqual('8');
  })



})