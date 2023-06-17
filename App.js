import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // const [enteredGoalText, setEnteredGoalText] = useState('');  // transported to GoalInput.js

  //manage list of goals
  //adding states as list of goals has data is something that changes dynamically
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  // function goalInputHandler(enteredText) {
  //   setEnteredGoalText(enteredText);
  // };
  // to connect goalinputHandler to textInput we can add onChangeText={} prop in textInput
  function addGoalHandler(enteredGoalText) {
    //  console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() },
      //if your new state depends on the previous state,a better way of updating,is to pass a function to this state updating function,
    ]); // spread operator for spreading existing 'courseGoals'-- and for updating new course goal to 'enteredGoaltext', text and id prop is passed
    endAddGoalHandler(); //or use setModalIsVisible(false);
    //in order to close the modal when goal was added we have to call endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
      // if inner function inside filter returns true ,item is kept, if it returs false, item is dropped
      //if id property of goal in addGoalHandler not matches with 'id' passed in deleteGoalHandler,the function returns true
    })
  }
  return (
    <>
      {/* <> is the wrapping fragment used for statusbar */}
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.btnstyle}>
          {/* to add styling to button store it inside view section */}
          <Button title='Add New Goal' color={'#cc0099'} onPress={startAddGoalHandler} />
        </View>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return < GoalItem text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} />
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false} />
          {/* Flatlist is almost similar to ScrollView */}
          {/* this ScrollView/FlatList is added because without adding it 'view' will take more space */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  },
  btnstyle: {
    margin: 10
  }
});
