import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomAlert = ({ visible, message, onClose, navigation }) => {
  const handleOK = () => {
    onClose();
    if (navigation) {
      navigation.navigate("home");
    }
  };



  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <TouchableOpacity onPress={handleOK} style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal:20,
  
  },
  button: {
    position: 'absolute',
    width:70,
    textAlign:'center',
    bottom: 10,
    right: 10,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign:'center'
  },
});

export default CustomAlert;
