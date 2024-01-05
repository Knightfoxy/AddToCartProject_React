import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {Dimensions} from 'react-native';
import CartItemComponent from './CartItemView';
import HeaderViewComponent from './CartHeaderComponent';
import FooterViewComponent from './FooterView';
import {View, StyleSheet, FlatList} from 'react-native';

const AddToCartScreen = () => {
  const [data, setData] = useState([]);
  const [totalParticularCostToPay, setTotalCostToPay] = useState(0);
  const [totalCost, setTotalPay] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // fetch('https://fakestoreapi.com/products')
    //   .then(result => result.json())
    //   .then(data => setData(data))
    //   .catch(error => {
    //     console.log({error});
    //   });
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => setData(response.data))
      .catch(error => {
        console.error(error);
      });
  };

  const handleCartItemUpdate = (count, price) => {
    console.log(`CartItemComponent updated with count: ${count}`);
    console.log(`CartItemComponent updated with Money: ${price * count}`);
    setTotalCostToPay(price * count);
    // setTotalPay(totalCost + totalParticularCostToPay);
  };

  return (
    <View style={styles.mainView}>
      {/* headerView */}
      <HeaderViewComponent></HeaderViewComponent>

      {/* Listing  */}
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <CartItemComponent
              title={item.title}
              imageUrl={item.image}
              totalPrice={item.price}
              onUpdateCount={handleCartItemUpdate}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>

      {/* Footer View */}
      <FooterViewComponent
        totalCost={totalParticularCostToPay}></FooterViewComponent>
    </View>
  );
};

export default AddToCartScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
