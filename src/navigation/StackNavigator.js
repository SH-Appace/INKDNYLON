import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonalInfo from '../screens/main/personalInfo/PersonalInfo';
import BottomTabScreen from './BottomTab';
import CodeVerification from '../screens/auth/codeVerification/CodeVerification';
import ProductDetail from '../screens/main/product/ProductDetail';
import CheckOut from '../screens/main/checkOut/CheckOut';
import Splash from '../screens/SplashScreen';
import WishList from '../screens/main/wishList/WishList';
import MyOrder from '../screens/main/myOrder/MyOrder';
import ForgetPassword from '../screens/auth/forgetPassword/ForgetPassword';
import Cart from '../screens/main/cart/Cart';
import SignIn from '../screens/auth/signIn/SigninScreen';
import SignUp from '../screens/auth/signUp/SignupScreen';
import SearchScreen from '../screens/main/search/SearchScreen';
import Onboarding from '../screens/main/onBoarding/OnBoardingScreen';
import Category from '../screens/main/category/Category';
import ProductListing from '../screens/main/product/ProductListing';
import PersonalInfoEdit from '../screens/main/personalInfo/PersonalInfoEdit';
import AddressListing from '../screens/main/address/AddressListing';
import Voucher from '../screens/main/profile/Voucher';
import CustomDesign from '../screens/main/product/CustomDesign';
import CustomDesignQty from '../screens/main/product/CustomDesignQty';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Voucher" component={Voucher} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="ProductListing" component={ProductListing} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="AddressListing" component={AddressListing} />
      <Stack.Screen name="PersonalInfoEdit" component={PersonalInfoEdit} />
      <Stack.Screen name="WishList" component={WishList} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
      <Stack.Screen name="CodeVerification" component={CodeVerification} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="CustomDesign" component={CustomDesign} />
      <Stack.Screen name="CustomDesignQty" component={CustomDesignQty} />
      <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
