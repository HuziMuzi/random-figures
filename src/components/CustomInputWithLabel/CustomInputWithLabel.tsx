import {TextInputProps, View, Text, StyleSheet, TextInput, ViewStyle} from 'react-native';
import {Control, FieldPath, Controller, FieldValues, FieldError} from 'react-hook-form';
import {Colors} from '../../theme/Colors';

export type CustomTextInputPropsType<T extends FieldValues> = TextInputProps & {
  error?: string;
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Object;
};

export const CustomInputWithLabel = <T extends FieldValues>({
  control,
  name,
  rules,
  label,
  ...props
}: CustomTextInputPropsType<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
        <View style={styles().container}>
          <Text style={styles().label}>{label}</Text>
          <TextInput
            style={styles(error).input}
            {...props}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
          {error && <Text style={styles().errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create((error?: FieldError) => ({
  container: {
    alignItems: 'center',
    marginBottom: 15,
  } as ViewStyle,
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
    borderWidth: 1,
    borderColor: error ? Colors.Red : Colors.GrayMedium,
    backgroundColor: Colors.GrayDark,
    marginBottom: 5,
  } as ViewStyle,
  errorText: {
    color: Colors.Red,
  },
}));
