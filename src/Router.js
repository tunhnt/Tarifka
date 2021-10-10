
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Meals from './pages/Meals';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title: 'Categories',
          headerTintColor: '#FFA500',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="MealsPage" component={Meals} options={{
          title: 'Meals',
          headerTintColor: '#FFA500',
          headerTitleAlign: 'center',    
        }} />
        <Stack.Screen name="DetailPage" component={Detail} options={{
          title: 'Detail',
          headerTintColor: '#FFA500',
          headerTitleAlign: 'center',    
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};    

export default Router;
