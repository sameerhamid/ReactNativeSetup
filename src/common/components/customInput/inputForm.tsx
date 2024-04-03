import {
  View,
  Text,
  ImageSourcePropType,
  TextStyle,
  ViewStyle,
  KeyboardTypeOptions,
  FlatList,
} from 'react-native';
import React, {ReactElement} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {CustomInputModel, CustomInputModelItem} from './customInputModle';
import {InputBorderType, UseFormMode} from '../../constants/enums';
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {ParamListBase, useTheme} from '@react-navigation/native';
import {ThemeModelItem} from '../../model/theme/themeModel';
import textStyles from '../customText/styles';
import stylesObj from './styles';
import {scaleSize} from '../../utils/scaleSheetUtils';

// Define your form data type (FieldValues)
type FormData = {};

interface Props {
  data?: CustomInputModelItem[];
  useFormMode?: UseFormMode;
  onSubmit?: SubmitHandler<FormData> | undefined;
  hasHeader?: boolean;
  navigation?: StackNavigationProp<ParamListBase>;
  hasRightSubmitButton?: boolean;
  borderType?: InputBorderType;
  borderRadius?: number;
  formTitle?: string;
  shouldDisable?: boolean;
  termVw?: boolean;
  showSubmitBtn?: boolean;
  onError?: (_values: FieldErrors<FieldValues>) => void;
  valuesValid?: (_arg0: boolean) => void;
  onSubmitRightBtn?: (arg0: unknown) => void;
  showSkipBtn?: boolean;
  rightImage?: ImageSourcePropType;
  usePageSkelton?: boolean;
  titleTextStyle?: TextStyle;
  isExtraSpacingBetweenFields?: boolean;
  shouldShowTowFieldsInRow?: boolean;
  textInputStyle?: TextStyle;
  inputFieldPadding?: number;
  bottomBtnStyle?: ViewStyle;
  keyboardType?: KeyboardTypeOptions | undefined;
  isCompleteRadiousButton?: boolean;
  header?: ReactElement;
  formFooter?: () => ReactElement;
  scrollVwContainer?: ViewStyle;
  ViewFlex?: number;
  inputListContainerStyle?: ViewStyle;
  isDisabledButtonTextBig?: boolean;
}

const defaultProps: Props = {
  data: [],
  useFormMode: UseFormMode.ON_SUBMIT,
  onSubmit: undefined,
  hasHeader: false,
  navigation: undefined,
  formTitle: '',
  shouldDisable: false,
  termVw: false,
  showSubmitBtn: true,
  onError: undefined,
  valuesValid: undefined,
  onSubmitRightBtn: undefined,
  rightImage: undefined,
  usePageSkelton: false,
  titleTextStyle: undefined,
  isExtraSpacingBetweenFields: false,
  shouldShowTowFieldsInRow: false,
  textInputStyle: undefined,
  inputFieldPadding: undefined,
  keyboardType: 'default',
  ViewFlex: 1,
  isDisabledButtonTextBig: false,
};

interface editProfileRequest {
  editProfile: {
    name: string;
    gender: string;
    dob: string;
  };
}

const CustomInputForm = (props: typeof defaultProps): ReactElement => {
  const {
    data,
    useFormMode,
    onSubmit,
    hasHeader,
    navigation,
    hasRightSubmitButton,
    borderType,
    borderRadius,
    showSubmitBtn,
    formTitle,
    termVw,
    shouldDisable,
    onError,
    valuesValid,
    rightImage,
    usePageSkelton,
    titleTextStyle,
    isExtraSpacingBetweenFields,
    shouldShowTowFieldsInRow,
    textInputStyle,
    isCompleteRadiousButton,
    inputFieldPadding,
    ViewFlex,
    isDisabledButtonTextBig,
    onSubmitRightBtn,
  } = props;

  const {
    control,
    watch,
    handleSubmit,
    getValues,
    setValue,
    formState: {isValid},
  } = useForm({
    mode: useFormMode,
  });

  const theme: ThemeModelItem = useTheme();
  const textStyle = textStyles(theme?.colors);
  const styles = stylesObj(theme?.colors);
  const formValues: FieldValues = watch();
  const fieldValues = getValues();

  return (
    <>
      <View
        style={{
          marginHorizontal: !usePageSkelton ? scaleSize(25) : scaleSize(0),
          flex: ViewFlex ?? defaultProps.ViewFlex,
          justifyContent: 'space-between',
        }}>
        <View style={[props?.inputListContainerStyle || {}]}>
          <FlatList
            bounces={false}
            windowSize={5}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // initialNumToRender={4}
            // maxToRenderPerBatch={5}
            updateCellsBatchingPeriod={10}
            data={data}
            //@ts-ignore
            keyExtractor={({item}: {item: CustomInputModelItem}) =>
              //@ts-ignore
              item?.name
            }
            renderItem={({item}: {item: CustomInputModelItem}) => (
              <View>
                <Text>Input item</Text>
              </View>
            )}
          />
        </View>

        {hasHeader && hasRightSubmitButton ? undefined : (
          <View>
            {showSubmitBtn ? (
              <View style={[styles.bottomBtn, props?.bottomBtnStyle]}></View>
            ) : undefined}
          </View>
        )}
      </View>
    </>
  );
};

export default CustomInputForm;
