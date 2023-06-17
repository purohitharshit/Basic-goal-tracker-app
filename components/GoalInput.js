import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(''); // when we add new goal we will reset it
  }
  return (
    <Modal visible={props.visible} animationType='fade'>
      {/* The React Native Modal is a type of View component which is used to present the content above an enclosing view.  */}
      {/* The visible prop determines whether your modal is visible. */}
      <View style={styles.inputContainer}>
        {/* we will include inputcontainer and textinput styles here */}
        <Image style={styles.image} source={require('../assets/images/icons8-goal-50.png')} />
        <TextInput
          style={styles.textInput}
          placeholder='Your Course Goal!'
          onChangeText={goalInputHandler} // note here paranthesis is not used
          value={enteredGoalText} // whenever enteredgoaltext changes it is reflected in textinput
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#8800cc' />
          </View>
          {/* both buttons are put in different views for the ease of styling */}
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#737373' />
          </View>
        </View>
      </View>
    </Modal>

  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 30,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  button: {
    width: 120,
    marginHorizontal: 8,
    borderRadius: 10,
    marginTop: 5
  }
})