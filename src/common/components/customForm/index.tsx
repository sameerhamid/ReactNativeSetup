import {View, Text, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS} from '../../../common/constants/fonts';

import Foect from 'foect';
import styles from './stylex';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Colors from '../../styles/colors';

const CustomForm = (formFieldsData?: []): React.ReactElement => {
  return (
    <>
      {
        //@ts-ignore
        formFieldsData?.formFieldsData?.length ? (
          <Foect.Form
            onValidSubmit={model => {
              Alert.alert('Payload', JSON.stringify(model));
            }}>
            {form => (
              <View>
                <FlatList
                  data={
                    //@ts-ignore
                    formFieldsData?.formFieldsData
                  }
                  renderItem={({item}) =>
                    item.fieldName.toLowerCase().includes('email') ? (
                      <Foect.Control
                        name={item.fieldName}
                        required={item.isRequired}
                        email
                        defaultValue="">
                        {control => (
                          <View style={{marginTop: 20}}>
                            <TextInput
                              style={styles.textInp}
                              placeholder={item?.placeholder}
                              placeholderTextColor={
                                item.placeholderTextColor
                                  ? item.placeholderTextColor
                                  : Colors.text
                              }
                              cursorColor={
                                item.cursorColor
                                  ? item.cursorColor
                                  : Colors.text
                              }
                              selectionColor={
                                item.selectionColor
                                  ? item.selectionColor
                                  : Colors.text
                              }
                              onBlur={control.markAsTouched}
                              onChangeText={text => control.onChange(text)}
                              value={control.value}
                            />
                            {control.isInvalid && control.errors.required && (
                              <Text
                                style={{
                                  marginTop: 5,
                                  marginStart: 5,
                                  color: 'red',
                                }}>
                                Email is required
                              </Text>
                            )}
                            {control.isInvalid &&
                              !control.errors.required &&
                              control.errors.email && (
                                <Text
                                  style={{
                                    marginTop: 5,
                                    marginStart: 5,
                                    color: 'red',
                                  }}>
                                  Email is not valid
                                </Text>
                              )}
                          </View>
                        )}
                      </Foect.Control>
                    ) : item.fieldName.toLowerCase() === 'password' ? (
                      <Foect.Control
                        defaultValue={{
                          email: '',
                        }}
                        name={item.fieldName}
                        required
                        pattern={
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                        }>
                        {control => (
                          <View style={{marginTop: 20}}>
                            <TextInput
                              style={styles.textInp}
                              placeholder="Password"
                              placeholderTextColor={Colors.text}
                              cursorColor={Colors.text}
                              selectionColor={Colors.text}
                              onBlur={control.markAsTouched}
                              onChangeText={text => control.onChange(text)}
                              value={control.value}
                            />
                            {control.isInvalid && control.errors.required && (
                              <Text
                                style={{
                                  marginTop: 5,
                                  marginStart: 5,
                                  color: 'red',
                                }}>
                                Password is required
                              </Text>
                            )}
                            {control.isInvalid &&
                              !control.errors.required &&
                              control.errors.pattern && (
                                <Text
                                  style={{
                                    marginTop: 5,
                                    marginStart: 5,
                                    color: 'red',
                                  }}>
                                  Password should contain minimum eight
                                  characters, at least one uppercase letter, one
                                  lowercase letter, one number and one special
                                  character
                                </Text>
                              )}
                          </View>
                        )}
                      </Foect.Control>
                    ) : item.fieldName.toLowerCase() === 'confirm password' ? (
                      <Foect.Control
                        defaultValue={{
                          email: '',
                        }}
                        name="confirm_password"
                        required
                        equalToControl="password">
                        {control => (
                          <View style={{marginTop: 20}}>
                            <TextInput
                              style={styles.textInp}
                              placeholder="Confirm Password"
                              placeholderTextColor={Colors.text}
                              cursorColor={Colors.text}
                              selectionColor={Colors.text}
                              onBlur={control.markAsTouched}
                              onChangeText={text => control.onChange(text)}
                              value={control.value}
                            />
                            {control.isInvalid && control.errors.required && (
                              <Text
                                style={{
                                  marginTop: 5,
                                  marginStart: 5,
                                  color: 'red',
                                }}>
                                Confirm Password is required
                              </Text>
                            )}
                            {control.isInvalid &&
                              !control.errors.required &&
                              control.errors.equalToControl && (
                                <Text
                                  style={{
                                    marginTop: 5,
                                    marginStart: 5,
                                    color: 'red',
                                  }}>
                                  Passwords do not match
                                </Text>
                              )}
                          </View>
                        )}
                      </Foect.Control>
                    ) : item.fieldName.toLowerCase() === 'mobile' ? (
                      <Foect.Control
                        name="mobile"
                        pattern={/^[0-9]{10}/}
                        defaultValue={{
                          email: '',
                        }}>
                        {control => (
                          <View style={{marginTop: 20}}>
                            <TextInput
                              style={styles.textInp}
                              placeholder="Mobile"
                              placeholderTextColor={Colors.text}
                              cursorColor={Colors.text}
                              selectionColor={Colors.text}
                              onBlur={control.markAsTouched}
                              onChangeText={text => control.onChange(text)}
                              value={control.value}
                            />
                            {control.isInvalid && control.errors.pattern && (
                              <Text
                                style={{
                                  marginTop: 5,
                                  marginStart: 5,
                                  color: 'red',
                                }}>
                                Mobile number is not valid
                              </Text>
                            )}
                          </View>
                        )}
                      </Foect.Control>
                    ) : (
                      <Foect.Control
                        defaultValue=""
                        name={item?.fieldName}
                        required={item.isRequired}
                        minLength={item.minLength}
                        maxLength={item.maxLength}>
                        {control => (
                          <View style={{flex: 1, marginEnd: 5}}>
                            <TextInput
                              style={styles.textInp}
                              placeholder={item?.placeholder}
                              placeholderTextColor={
                                item.placeholderTextColor
                                  ? item.placeholderTextColor
                                  : Colors.text
                              }
                              cursorColor={
                                item.cursorColor
                                  ? item.cursorColor
                                  : Colors.text
                              }
                              selectionColor={
                                item.selectionColor
                                  ? item.selectionColor
                                  : Colors.text
                              }
                              onBlur={control.markAsTouched}
                              onChangeText={text => control.onChange(text)}
                              value={control.value}
                            />
                            {control.isInvalid && control.errors.required && (
                              <Text
                                style={{
                                  marginTop: 5,
                                  marginStart: 5,
                                  color: 'red',
                                }}>
                                {item.fieldName} is required
                              </Text>
                            )}

                            {control.isInvalid &&
                              !control.errors.required &&
                              control.errors.minLength && (
                                <Text
                                  style={{
                                    marginTop: 5,
                                    marginStart: 5,
                                    color: 'red',
                                  }}>
                                  {item.fieldName} name should be at least{' '}
                                  {item.minLength} characters long
                                </Text>
                              )}
                            {control.isInvalid && control.errors.maxLength && (
                              <Text
                                style={{
                                  marginTop: 5,
                                  marginStart: 5,
                                  color: 'red',
                                }}>
                                {item.fieldName} should be maximum of{' '}
                                {item.maxLength} characters long
                              </Text>
                            )}
                          </View>
                        )}
                      </Foect.Control>
                    )
                  }
                />

                <TouchableOpacity onPress={() => form.submit()}>
                  <View
                    style={{
                      height: 50,
                      backgroundColor: Colors.danger100,
                      marginTop: 20,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: FONTS.MONTSERRAT_BOLD,
                        color: Colors.text,
                        fontSize: 16,
                      }}>
                      Sign Up
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </Foect.Form>
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
            <Text style={{fontFamily: FONTS.MONTSERRAT_BOLD, fontSize: 22}}>
              Please provide field details
            </Text>
          </View>
        )
      }
    </>
  );
};

export default CustomForm;
