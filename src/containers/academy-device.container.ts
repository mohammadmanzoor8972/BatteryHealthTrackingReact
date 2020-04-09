import { connect } from 'react-redux'
import { AppState } from '../redux/reducers'
import { ACTIONS } from '../redux/actions/battery'
import { getSelectedAcademy, getSelectedAcademyDevice } from '../redux/reducers/battery'
import { AcademyDevice } from '../components/academy-device'

const mapStateToProps = ({academy}: AppState) => ({
  academys: getSelectedAcademy(academy),
  battries: getSelectedAcademyDevice(academy),
})


export default connect(
  mapStateToProps
)(AcademyDevice as any)
