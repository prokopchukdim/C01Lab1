import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {v4 as uuidv4} from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ taskTitles }) => {
    const [toDos, setToDos] = useState(taskTitles.map((value) => ({ id: uuidv4(), title: value })));

    const addToDo = (newTitle) => {
        setToDos([...toDos, {id: uuidv4(), title: newTitle}]);
    };

    const removeToDo = (id) => {
        setToDos(toDos.filter(item => item.id !== id));
    }

    return (
        <View style = {styles.container}>
        {toDos.map((item) => (
            <View key = {item.id} style = {styles.toDoItem}>
                <Text>{item.title}</Text>
                <Button onPress={() => removeToDo(item.id) } title = "Remove"></Button>
            </View>
        ))}
        <AddTask onAddTask={addToDo}></AddTask>
        </View>
      ); 
}

ToDoList.defaultProps = {
    taskTitles: []
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    toDoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    }
  });

export default ToDoList;