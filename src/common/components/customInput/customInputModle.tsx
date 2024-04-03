import {Ref} from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  ImageSourcePropType,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInput,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {InputBorderType} from '../../constants/enums';
import {Control, RegisterOptions} from 'react-hook-form';

export class CustomInputModelItem {
  //placeholder of input field
  placeholeholder?: string;

  // type of input
  type?: string;

  // Form Controller
  control?: Control;

  // Name of a Field
  name?: string;

  // title of field
  title?: string;

  // Is a field editable or not
  editable?: boolean;

  // Border Type
  borderType?: InputBorderType;

  // Return Type of Keyboard
  returnKeyType?: ReturnKeyTypeOptions;

  // Rules for Validation
  rules?: RegisterOptions;

  // Rules for Validation
  rules2?: RegisterOptions;

  // Should Show Eye for Password field
  shouldShowVisibleEye?: boolean;

  // Field should auto focus
  shouldAutoFocus?: boolean;

  // Left Accessories for Image
  isLeftAccessories?: ImageSourcePropType | undefined;

  // Right Accessories for Image
  isRightAccessories?: ImageSourcePropType | undefined;

  // Right Accessories on Press
  rightAccessoriesOnPress?:
    | ((_event: GestureResponderEvent) => void)
    | undefined;

  // Should Show Error Icon or not
  shouldShowErrorIcon?: boolean;

  // Handling forward Ref for Input fields
  forwardRef?: Ref<TextInput>;

  // Handling forward Ref for Input fields
  forwardRef2?: Ref<TextInput>;

  // On Submit Editing of Keyboard
  onSubmitEditing?: (
    _data: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;

  // On Submit Editing of Keyboard
  onSubmitEditing2?: (
    _data: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;

  // On Focus of Input field
  onFocus?: (_data: NativeSyntheticEvent<TextInputFocusEventData>) => void;

  // On Focus of Input field
  onFocus2?: (_data: NativeSyntheticEvent<TextInputFocusEventData>) => void;

  // On Blur of Input field
  onBlur?: (_data: NativeSyntheticEvent<TextInputFocusEventData>) => void;

  // On Blur of Input field
  onBlur2?: (_data: NativeSyntheticEvent<TextInputFocusEventData>) => void;

  // Dropdown Data for Dropdown Picker
  dropdownData?: [] | {label: string; value: string}[] | undefined;

  // Should Show Flog
  shouldShowFlags?: boolean;

  // Should show Error in input fields for validation
  shouldShowError?: boolean;

  // Should show the word count for characters in input field
  showWordCount?: boolean;

  // Max length of input field
  maxLength?: number;

  // Border Radius of Input Field
  borderRadius?: number;

  // Should Text be Clickable
  shouldShowClickableText?: boolean;

  // Click on Text Press
  textPress?: ((_event: GestureResponderEvent) => void) | undefined;

  // Clickable Text Value
  clickableText?: string;

  // Border Bottom Color
  borderBottomColor?: ColorValue | undefined;

  // Border Bottom Color
  borderBottomColor2?: ColorValue | undefined;

  // Right Accessories
  rightAccessories?: ImageSourcePropType;

  // Mode of Date for DatePicker
  mode?: 'date' | 'time' | 'datetime' | undefined;

  // Placeholder to show when Date selected
  selectedDatePlaceHolder?: string;

  // Show Submit Button or not
  showSubmitBtn?: boolean;

  // Show TermVw(Switch) or not
  termVw?: boolean;

  rightImage?: string;

  titleTextStyle?: TextStyle;

  dropdownPlaceholder?: string;

  showClickableTextonSwitch?: boolean;

  isExtraSpacingBetweenFields?: boolean;

  customDropdownTintColor?: string;

  shouldShowBigSwitch?: boolean;

  switchDescription?: string;

  placeholderTextColor?: string;

  shouldShowTwoFieldsInRow?: boolean;

  name1?: string | undefined;

  name2?: string | undefined;

  title1?: string | undefined;

  title2?: string | undefined;

  textInputStyle?: TextStyle;

  inputFieldPadding?: number;

  shouldShowDropdownIcon?: boolean;

  keyboardType?: KeyboardTypeOptions | undefined;

  customRightAccessoryVw?: React.ReactElement;

  customRightAccessoryVw1?: React.ReactElement;

  customRightAccessoryVw2?: React.ReactElement;

  containerStyle?: ViewStyle;

  isImage?: boolean;

  isImage2?: boolean;

  inputWithDropDown?: boolean | undefined;

  inputWithDropDown2?: boolean | undefined;

  rightAccessoriesTxt?: string | undefined;

  rightAccessoriesTxt1?: string | undefined;

  onChangeText?: ((_text: string) => void) | undefined;

  datePickerPlaceHolderTxtColor?: string | undefined;

  maximumDate?: Date;

  minimumDate?: Date;

  onLayout?: any;
}

export class CustomInputModel {
  CustomInputModelItem?: CustomInputModelItem;
}
