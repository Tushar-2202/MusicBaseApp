import React, {useEffect} from 'react';

import {CommonActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {AppButton, AppInput} from 'src/component';

import Routes from 'src/router/Routes';
import {
  CommonStyle,
  Constants,
  Messages,
  ThemeUtils,
  ToastType,
  showToast,
} from 'src/utils';
import {StackParamList} from 'src/utils/types';
import {RootState} from 'src/reduxToolkit/store';
import {connect} from 'react-redux';
import {
  changeLanguage,
  setLanguageCode,
  setToken,
  logout,
} from 'src/reduxToolkit/rootSlice';
import {language} from 'src/locales';
import styles from './styles';

interface FormData {
  email: string;
  password: string;
}

interface LoginProps {
  navigation: StackNavigationProp<StackParamList>;
  changeLanguage: (payload: Record<string, any>) => void; // Adjust the type based on your actual action payload
  setLanguageCode: (code: string) => void;
  languageValue: Record<string, any>; // Adjust the type based on the structure of your language objects
  setToken: (token: string) => void;
  token: string;
  languageCode: string;
  logout: () => void;
}

const Login: React.FC<LoginProps> = props => {
  const {navigation} = props;
  const {
    changeLanguage,
    setLanguageCode,
    languageValue,
    setToken,
    token,
    languageCode,
    logout,
  } = props;
  /*  Life-cycles Methods */
  const {
    register,
    setValue,
    control,
    reset,
    clearErrors,
    getValues,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  /*  Public Interface Methods */
  /*  Validation Methods  */
  /*  UI Events Methods   */
  /*  Custom-Component sub-render Methods */

  const onSubmit = async (data: FormData) => {
    console.log('onSubmitted');
    showToast('Success', 'Login Successfully', ToastType.SUCCESS);

    const code = 'en';
    changeLanguage(language[code]); // set your selected language code
    setLanguageCode(code);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: Routes.Authenticated}],
      }),
    );
  };
  /* Localization  UseCase */
  useEffect(() => {
    console.log('lang====', languageValue.welcome);
  }, [languageValue, token]);
  return (
    <View style={CommonStyle.master_full_flex}>
      <View style={styles.container}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              onFocus={() => clearErrors('email')}
              error={errors?.email?.message}
              value={value}
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
          name="email"
          defaultValue=""
          rules={{
            required: Messages.Errors.emailBlank,
            pattern: {
              value: Constants.Regex.PASSWORD,
              message: Messages.Errors.emailValidity,
            },
          }}
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              onFocus={() => clearErrors('password')}
              error={errors?.password?.message}
              value={value}
              label="Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
          name="password"
          defaultValue=""
          rules={{required: 'Password is required.'}}
        />

        <AppButton
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          click={handleSubmit(onSubmit)}
          width="100%"
          mt={ThemeUtils.relativeRealHeight(4)}
          style={CommonStyle.full_flex}>
          Login
        </AppButton>
      </View>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.app.user,
  token: state.app.token,
  languageValue: state.app.languageValue,
  languageCode: state.app.languageCode,
});

const mapDispatchToProps = {
  changeLanguage,
  setLanguageCode,
  setToken,
  logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
