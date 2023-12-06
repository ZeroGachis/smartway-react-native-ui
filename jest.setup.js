// This 2 following lines are mandatory since we add and use react-native-device-info
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
// eslint-disable-next-line no-undef
jest.mock('react-native-device-info', () => mockRNDeviceInfo);
