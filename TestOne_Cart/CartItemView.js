import React, {useEffect} from 'react';
import {useState} from 'react';
import {Dimensions, TouchableHighlightBase} from 'react-native';
import {styles} from './CartItem_Css';
import {
  Text,
  Pressable,
  View,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ImageBackground,
} from 'react-native';

const CartItemComponent = ({product, onUpdateCount}) => {
  const [itemCount, setItemCount] = useState(0);

  const handleButtonClick = () => {
    console.log('Button in child clicked');
    setItemCount(itemCount + 1);
    onUpdateCount(true, product.id);
  };

  const onDecreaseButtonPress = () => {
    console.log('decrease button pressed.');
    setItemCount(itemCount - 1);
    onUpdateCount(false, product.id);
  };

  const onIncreaseButtonPress = () => {
    console.log('Increase button pressed.');
    setItemCount(itemCount + 1);
    onUpdateCount(true, product.id);
  };

  return (
    <View style={styles.componentMainView}>
      {/* //Item ImageView BG */}
      <View style={styles.cartImageBgView}>
        <Image style={styles.cartItemImage} src={product.image} />
        <View style={styles.dotView} />
      </View>

      {/* //Name And Add Button View BG */}
      <View style={styles.cartDetailsView}>
        <View style={styles.viewForNameAndAdd}>
          <Text style={styles.foodNameText} numberOfLines={1}>
            {product.title}
          </Text>
          {product.count <= 0 ? (
            <TouchableOpacity
              style={styles.pressableButton}
              onPress={handleButtonClick}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.stepperBgView}>
              <TouchableOpacity
                style={styles.stepperButton}
                title="-"
                onPress={onDecreaseButtonPress}>
                <Text style={styles.stepperButtonWithValueText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.stepperCountText}>{product.count}</Text>

              <TouchableOpacity
                style={styles.stepperButton}
                onPress={onIncreaseButtonPress}>
                <Text style={styles.stepperButtonWithValueText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.cartDetailsView}>
          {/*  Micro Details View */}
          <View style={styles.detailsbgView}>
            <View style={styles.itemDetailsView}>
              <Text style={styles.detailsHeadingsTextStyle}>UOM</Text>
              <Text style={styles.detailsTextStyle}>02</Text>
            </View>

            <View style={styles.itemDetailsView}>
              <Text style={styles.detailsHeadingsTextStyle}>Pack Size</Text>
              <Text style={styles.detailsTextStyle}>02</Text>
            </View>

            <View style={styles.itemDetailsView}>
              <Text style={styles.detailsHeadingsTextStyle}>Per Unit</Text>
              <Text style={styles.detailsTextStyle}>${product.price}</Text>
            </View>

            <View style={styles.itemDetailsView}>
              <Text style={styles.detailsHeadingsTextStyle}>Total</Text>
              <Text style={styles.totalTextStyle}>
                ${(product.price * product.count).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItemComponent;
