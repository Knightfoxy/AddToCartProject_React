import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {Dimensions} from 'react-native';
import CartItemComponent from './CartItemView';
import HeaderViewComponent from './CartHeaderComponent';
import FooterViewComponent from './FooterView';
import {View, StyleSheet, FlatList} from 'react-native';
import {styles} from './AddToCart_Css';

const ProductItemType = {
  id: 0,
  title: '',
  price: '',
  category: '',
  description: '',
  image: '',
};

const AddToCartScreen = () => {
  const [data, setData] = useState([]);
  const [totalCost, setTotalPay] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  let counter = 0;

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
      .then(response => {
        const data1 = response.data;
        const updatedData = data1.map(item => ({
          ...item,
          count: 0,
        }));
        setData(updatedData);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCartItemUpdate = (isIncreased, id) => {
    setData(items => {
      calculateTotalPrice(items[id - 1], isIncreased);
      const updatedData = items.map(value => {
        if (value.id === id) {
          if (isIncreased) {
            if (value.count > 0) {
              setItemCount(itemCount);
            } else {
              setItemCount(itemCount + 1);
            }
          } else {
            if (value.count == 1) {
              setItemCount(itemCount - 1);
            } else {
              setItemCount(itemCount);
            }
          }
          const updateValueCount = isIncreased
            ? value.count + 1
            : value.count - 1;
          return {
            ...value,
            count: updateValueCount,
          };
        }
        return value;
      });
      return updatedData;
    });
  };

  const calculateTotalPrice = (data, isIncreased) => {
    console.log('calculate price: ', data.price);
    setTotalPay(isIncreased ? totalCost + data.price : totalCost - data.price);
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
              product={item}
              onUpdateCount={handleCartItemUpdate}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>

      {/* Footer View */}
      <FooterViewComponent
        totalCount={itemCount}
        totalCost={totalCost.toFixed(2)}></FooterViewComponent>
    </View>
  );
};

export default AddToCartScreen;
