import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Score extends React.Component {
	
	render() {
		return (
			<View style={styles.score_container}>
                <Text style={styles.score}>Attempts: {this.props.attempts}</Text>
				<Text style={styles.score}>Matches : {this.props.score}</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	score_container: {
		flex: 2,
		alignItems: 'center',
		padding: 10,
		flexDirection:'row',
		justifyContent:'space-around'
	},
	score: {
		fontSize: 20,
        	color:'white',
		fontWeight: 'bold'
	}
});
