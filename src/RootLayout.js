import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './component/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';

export default function RootLayout() {
    return (
        <Provider store={store}>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </Provider>
  )
}
