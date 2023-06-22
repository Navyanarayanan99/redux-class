import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
//import { decrement, increment } from '../redux/actions'
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../redux/counterSlice';

const Home = ({navigation, route}) => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  const [dataGet, setData] = useS
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'green'}}>
        Redux - {counter}
      </Text>
      <Button title="Increment" onPress={() => dispatch(increment(2))} />
      <Button title="Decrement" onPress={() => dispatch(decrement(2))} />
    </View>
  );
};

export default Home;
