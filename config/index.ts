import {Platform} from 'react-native';
import {DocumentDirectoryPath, MainBundlePath} from 'react-native-fs';

const config = {
  imgUrl:
    Platform.OS == 'ios'
      ? `${MainBundlePath}/assets/images`
      : `${DocumentDirectoryPath}/Images`,
  androidDirPath: DocumentDirectoryPath,
  imgUrlAndroid: `${DocumentDirectoryPath}/Images`,
};

export default config;
