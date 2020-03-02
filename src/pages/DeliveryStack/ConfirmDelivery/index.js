import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Alert } from 'react-native';
import api from '~/services/api';

import {
  Container,
  WhiteBackground,
  Holder,
  Camera,
  SendButton,
  SnapView,
  SnapHolder,
} from './styles';

export default function ConfirmDelivery({ route, navigation }) {
  const { ID } = route.params;
  const user = useSelector(state => state.user.data);
  const [fileURI, setFile] = useState(null);

  let cam = useRef();

  const takePicture = async () => {
    const options = { quality: 0.8 };
    const data = await cam.takePictureAsync(options);
    console.log(data.uri);
    setFile(data.uri);
  };

  const handleUpload = async () => {
    if (!fileURI) {
      return Alert.alert(
        'Fastfeet',
        'Please take a picture of the recipient signature before ending the delivery!'
      );
    }
    const formData = new FormData();
    formData.append('name', 'signature');
    formData.append('file', {
      uri: fileURI,
      type: 'image/jpg',
      name: 'image_signature',
    });

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const response = await api
      .post('files', formData, config)
      .catch(e => console.log(e));

    await api.put(`provider/${user.id}/deliver/${ID}`, {
      signature_id: response.data.id,
    });
    setFile(null);
    navigation.navigate('Deliveries');
  };

  return (
    <Container>
      <WhiteBackground />
      <Holder>
        <Camera
          ref={camera => (cam = camera)}
          captureAudio={false}
          autoFocus={Camera.Constants.AutoFocus.on}
          flashMode={Camera.Constants.FlashMode.off}
          type={Camera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          <SnapView>
            <SnapHolder
              onPress={() => {
                takePicture();
              }}
            >
              <Icon name="camera" color="#fff" size={20} />
            </SnapHolder>
          </SnapView>
        </Camera>
        <SendButton onPress={handleUpload}>Send</SendButton>
      </Holder>
    </Container>
  );
}

ConfirmDelivery.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};
