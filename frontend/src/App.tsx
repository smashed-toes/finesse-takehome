import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/product/ProductPage";
import Layout from "./components/Layout";
import { ConfigProvider } from "antd";
import ScrollToTop from "./utils/helpers/ScrollToTop";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          InputNumber: {
            paddingInline: 35,
          },
        },
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="products/:productId" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
