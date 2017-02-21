import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withGetMessages from '../../utils/withGetMessages';
import messages from './messages';
import { actions } from '../../modules/devices';
import DeviceDetail from './DeviceDetail';

export const mapStateToProps = ({ devices, ui }, { params: { deviceId }}) => ({
  deviceId,
  device: devices[deviceId],
  isLoading: ui.isLoading,
});
export const mapDispatchToProps = { fetchDeviceDetail: actions.fetchDeviceDetail };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'DeviceDetail'),
)(DeviceDetail);
