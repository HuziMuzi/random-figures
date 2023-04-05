import {TextInputProps, View, Text, StyleSheet, TextInput} from 'react-native';
import {Colors} from '@src/theme/Colors';

export type CustomTextInputPropsType = {
  error?: string;
  label: string;
  onChangeText?: (value: string) => void;
};
type CustomTextInputCombinePropsType = TextInputProps & CustomTextInputPropsType;

export const CustomInputWithLabel = ({
  value,
  label,
  onChangeText,
  ...props
}: CustomTextInputCombinePropsType) => {
  const onChangeTextHandler = (text: string) => {
    onChangeText && onChangeText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        {...props}
        onChangeText={onChangeTextHandler}
        value={value}
      />
      {props.error && <Text>{props.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 2,
    color: Colors.White,
  },
  input: {
    width: 180,
    height: 38,
    fontSize: 14,
    color: Colors.White,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Colors.GrayMedium,
    backgroundColor: Colors.GrayDark,
  },
});
