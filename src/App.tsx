import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import AppProvider from './hooks';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#333333" />
      <View style={{flex: 1, backgroundColor: '#333333'}}>
        <AppProvider>
          <Dashboard />
        </AppProvider>
      </View>
    </>
  );
};

export default App;
