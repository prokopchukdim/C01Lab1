import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState("");
    
    const handleAddTask = () => {
        if (title.trim() !== "") {
            onAddTask(title);
            setTitle("");
        }
    }

    return (
        <View style = {styles.addTodoForm}>
            <TextInput style = {styles.input} value = {title} onChangeText = {setTitle}></TextInput>
            <Button onPress={handleAddTask} title = "Add Todo"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;