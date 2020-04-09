import { connect } from 'react-redux'
import { AppState } from '../redux/reducers'
import { getAcademy, getIsLoading, getSelectedAcademyId, getSelectedAcademyDeviceId } from '../redux/reducers/battery'
import { ACTIONS } from '../redux/actions/battery'
import { Academys } from '../components/academy'

const mapStateToProps = ({academy}: AppState) => ({
  isLoading: getIsLoading(academy),
  academys: getAcademy(academy),
  getSelectedAcademyId: getSelectedAcademyId(academy),
  getSelectedAcademyDeviceId: getSelectedAcademyDeviceId(academy)
})

const mapDispatchToProps = {
  loadAcademys: ACTIONS.fetchAcadmey,
  selectAcademy: ACTIONS.selectAcademy,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Academys as any)
