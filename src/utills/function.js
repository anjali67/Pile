import { showMessage } from 'react-native-flash-message';
export const displayMessage = ({message,type}) => {
    showMessage({
      message: message,
      type: type ? type : 'success',
      duration: 2000,
      floating: true,
      icon: 'auto',
    });
  }