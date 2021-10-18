import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Card extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		
		
		let name = '';
		
		
		if(this.props.is_open){
			
			name = this.props.name;
			
		}
		
		return (
			
				<TouchableHighlight onPress={this.props.clickCard} activeOpacity={0.75} underlayColor={"blue"} style={styles.card}>
                    <View style={{alignItems:'center'}}>
                    <Text style={styles.text}>{name}</Text>
                    </View>
					
				</TouchableHighlight>		
			
		);
	}

	

}


const styles = StyleSheet.create({
	card: {
        flexDirection:'column',
        padding:30,
        marginRight:10,
        borderRadius:20,
        
        //alignSelf:'center',
        backgroundColor:'yellow'

        
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
        alignItems:'center',
        color:'black',
	}
});
