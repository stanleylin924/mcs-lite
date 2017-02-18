import { actions } from '../devices';

describe('devices', () => {
  it('should return fetchDeviceList actions', () => {
    expect(actions.fetchDeviceList()).toMatchSnapshot();
  });

  it('should return fetchDeviceDetail actions', () => {
    expect(actions.fetchDeviceDetail('deviceId')).toMatchSnapshot();
  });

  it('should return setDeviceList actions', () => {
    expect(actions.setDeviceList([])).toMatchSnapshot();
  });

  it('should return setDeviceDetail actions', () => {
    expect(actions.setDeviceDetail({})).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});