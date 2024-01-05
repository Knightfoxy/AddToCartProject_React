import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {Dimensions} from 'react-native';
import CartItemComponent from './CartItemView';
import HeaderViewComponent from './CartHeaderComponent';
import FooterViewComponent from './FooterView';
import {View, StyleSheet, FlatList} from 'react-native';

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
  const [totalParticularCostToPay, setTotalCostToPay] = useState(0);
  const [totalCost, setTotalPay] = useState(0);
  const [itemCountDictionary, setItemCountDictionary] = useState({});
  const [itemsCount, setItemsCount] = useState(0);

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

  const handleCartItemUpdate = (count, id) => {
    console.log(`CartItemComponent updated with count: ${count}`);
    console.log(`CartItemComponent updated having ID: ${id}`);
    setItemCountDictionary(prevDictionary => ({
      ...prevDictionary,
      [id]: count,
    }));
    setTotalCostToPay(count * data.hasOwnProperty(id));
    setItemsCount(Object.keys(itemCountDictionary).length);
    console.log(Object.keys(itemCountDictionary).length);
    console.log(itemCountDictionary);
    // setTotalCostToPay(data[id].price * count);
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
        totalCount={itemsCount}
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
