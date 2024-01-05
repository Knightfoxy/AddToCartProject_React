import React, {useEffect} from 'react';
import {useState} from 'react';
import {Dimensions, TouchableHighlightBase} from 'react-native';
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

  useEffect;

  const handleButtonClick = () => {
    console.log('Button in child clicked');
    setItemCount(itemCount + 1);
    onUpdateCount(itemCount + 1, product.id);
  };

  const onDecreaseButtonPress = () => {
    console.log('decrease button pressed.');
    setItemCount(itemCount - 1);
    onUpdateCount(itemCount - 1, product.id);
  };

  const onIncreaseButtonPress = () => {
    console.log('Increase button pressed.');
    setItemCount(itemCount + 1);
    onUpdateCount(itemCount + 1, product.id);
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
          {itemCount <= 0 ? (
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

              <Text style={styles.stepperCountText}>{itemCount}</Text>

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
                ${product.price * itemCount.toFixed(0)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItemComponent;

const styles = StyleSheet.create({
  detailsHeadingsTextStyle: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 12,
    color: 'darkgray',
  },

  stepperCountText: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },

  detailsTextStyle: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
  },
  totalTextStyle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
  },

  itemDetailsView: {
    margin: 2,
    flex: 1,
    flexDirection: 'coloumn',
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  detailsbgView: {
    margin: 2,
    marginRight: 30,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  cartDetailsView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  stepperBgView: {
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 24,
    width: 80,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
    overflow: 'hidden',
  },

  pressableButton: {
    left: 20,
    height: 24,
    width: 80,
    borderRadius: 12,
    backgroundColor: '#2FCC70',
  },

  stepperButton: {
    height: 24,
    width: 24,
    borderRadius: 0,
    backgroundColor: '#2FCC70',
  },

  addButtonText: {
    // for add button to swapp
    top: 3,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '400',
  },

  stepperButtonWithValueText: {
    // stepper value button
    top: 3,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '400',
  },

  viewForNameAndAdd: {
    justifyContent: 'center',
    marginTop: 2,
    flex: 0.4,
    flexDirection: 'row',
    backgroundColor: 'white',
    overflow: 'hidden',
  },

  // main bg View .
  componentMainView: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    height: 90,
    flexDirection: 'row',
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },

  // dot View .
  dotView: {
    width: 8,
    height: 8,
    backgroundColor: '#FF8B4D',
    position: 'absolute',
    borderRadius: 4,
    left: 3,
    top: 6,
  },

  // Cart Item image .
  cartItemImage: {
    width: 70,
    height: 80,
    marginTop: 0,
    borderWidth: 1.4,
    backgroundColor: '#FFFFFF',
    borderColor: '#D2D2D2',
    borderRadius: 5,
    marginBottom: 5,
    resizeMode: 'contain',
  },

  // Food name text design
  foodNameText: {
    flex: 0.8,
    marginLeft: 0,
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
});
