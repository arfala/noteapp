import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CustomButton = ({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize = 16,
  width = 120,
  iconName,
  borderRadius,
}) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor,
      width,
      padding: 10,
      flexDirection: 'row', 
      justifyContent: 'center', 
      borderRadius:10,
    },
    buttonText: {
      fontSize,
      fontWeight: '700',
      color,
      marginLeft: 10, 
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome name={iconName} size={fontSize} color={color} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
