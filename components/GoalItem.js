import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (

        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#483D8B' }} onPress={props.onDeleteItem.bind(this, props.id)}>
                {/* With the bind() method, an object can borrow a method from another object. */}
                {/* borrowing onDeleteItem method from props to props.id */}
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>

        </View>

    );
};

export default GoalItem;


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#e6fff5',
    },
    goalText: {
        color: 'black',
        padding: 8,
    },
});