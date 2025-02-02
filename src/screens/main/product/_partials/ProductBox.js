import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import Icon from '../../../../core/Icon';
import { Color, Font, GlobalStyle, Window } from '../../../../globalStyle/Theme';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ADD_MORE_ITEM,
  CREATE_CART_ADD_ONE_ITEM,
} from '../../../../graphql/mutations/Cart';
import { handleCreateCart } from '../../../../apis/cart';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { COLORS, FONTS, RADIUS, WIDTH } from '../../../../constants';
import { TouchableRipple } from 'react-native-paper';

const ProductBox = ({ item, relatedProducts = false, GET_WISHLIST_DATA }) => {
  const [showFavIcon, setShowFavIcon] = useState(false);
  const navigation = useNavigation();
  const [cartCreate] = useMutation(CREATE_CART_ADD_ONE_ITEM);
  const [cartLinesAdd] = useMutation(ADD_MORE_ITEM);

  return (
    <View style={styles.container}>
      <TouchableRipple
        style={styles.ripple}
        onPress={() =>
          navigation.navigate('ProductDetail', {
            item: item,
            relatedProducts,
          })
        }>
        <>
          <ImageBackground
            imageStyle={{ borderRadius: RADIUS, overflow: 'hidden' }}
            source={item.image}
            style={{
              height: WIDTH / 2.75,
              borderRadius: RADIUS,
              overflow: 'hidden',
            }}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.iconContainer}>
                <Icon
                  iconFamily={'AntDesign'}
                  style={{ fontSize: 16 }}
                  color={showFavIcon ? '#F91212' : Color.secondary}
                  name={showFavIcon ? 'heart' : 'hearto'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.iconContainer,
                  { backgroundColor: COLORS.green },
                ]}
                onPress={() =>
                  navigation.navigate('ProductDetail', {
                    product: item,
                  })}>
                <Icon
                  iconFamily={'AntDesign'}
                  style={{ fontSize: 16 }}
                  color={COLORS.white}
                  name={'plus'}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <Text numberOfLines={1} style={styles.productTitle}>
            {item.title}
          </Text>
          <View style={styles.row}>
            <Text style={styles.subTitle}>
              $150
            </Text>
            <Text style={styles.subTitle}>
              (4 in stock)
            </Text>
          </View>
        </>
      </TouchableRipple>
    </View>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: WIDTH / 2.5,
    height: WIDTH / 2,
    borderRadius: RADIUS,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productTitle: {
    marginTop: 10,
    color: COLORS.tertiary,
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    marginLeft: 5,
  },
  subTitle: {
    marginTop: 5,
    color: COLORS.secondary,
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginHorizontal: 5,
  },
  ripple: { width: '100%', height: '100%' },
  btnContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 5,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ////////////////////////////////////////////////////////////////
  proImg: {
    width: '100%',
    height: 140,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
