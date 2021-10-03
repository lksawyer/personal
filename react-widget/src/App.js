import "./App.css";

import Wrapper from "./components/UI/Wrapper";
import WidgetHeader from "./components/WidgetHeader/WidgetHeader";
import Product from "./components/Product/Product";
import MainNav from "./components/MainNav/MainNav";
import OnlineRetailerCard from "./components/OnlineRetailer/OnlineRetailerCard";
import { useState } from "react";

const onlineResults = {
  id: "parentSKU",
  title: "This is the generic parent title",
  children: [
    {
      id: "child1",
      title: "This is the child 1 title",
      variant: "Size 1",
      offers: [
        {
          id: "onlineOffer1",
          retailer: "target",
          stock: true,
          cta: "https://www.target.com/",
        },
        {
          id: "onlineOffer2",
          retailer: "walmart",
          stock: false,
          cta: "https://www.walmart.com/",
        },
        {
          id: "onlineOffer3",
          retailer: "target",
          stock: true,
          cta: "https://www.target.com/",
        },
      ],
    },
    {
      id: "child2",
      title: "This is the child 2 title",
      variant: "Size 2",
      offers: [
        {
          id: "onlineOffer1",
          retailer: "instacart",
          stock: true,
          cta: "https://www.instacart.com/",
        },
        {
          id: "onlineOffer2",
          retailer: "heb",
          stock: false,
          cta: "https://www.heb.com/",
        },
        {
          id: "onlineOffer3",
          retailer: "instacart",
          stock: true,
          cta: "https://www.instacart.com/",
        },
        {
          id: "onlineOffer4",
          retailer: "heb",
          stock: false,
          cta: "https://www.heb.com/",
        },
      ],
    },
    {
      id: "child3",
      title: "This is the child 3 title",
      variant: "Size 3",
      offers: [
        {
          id: "onlineOffer1",
          retailer: "instacart",
          stock: true,
          cta: "https://www.instacart.com/",
        },
        {
          id: "onlineOffer2",
          retailer: "heb",
          stock: false,
          cta: "https://www.heb.com/",
        },
        {
          id: "onlineOffer3",
          retailer: "instacart",
          stock: true,
          cta: "https://www.instacart.com/",
        },
        {
          id: "onlineOffer4",
          retailer: "heb",
          stock: false,
          cta: "https://www.heb.com/",
        },
        {
          id: "onlineOffer5",
          retailer: "instacart",
          stock: true,
          cta: "https://www.instacart.com/",
        },
        {
          id: "onlineOffer6",
          retailer: "heb",
          stock: false,
          cta: "https://www.heb.com/",
        },
      ],
    },
  ],
};

const App = () => {
  // === Auxillary task ===
  // Will store all variant values in an array
  let variants = [];

  // Add all variant values to the variants array
  onlineResults.children.forEach((element) => variants.push(element.variant));

  // === State ===
  // Default state value is the 0 index of onlineResults.children[0]
  // - this refers to the first child product in the onlineResults.children array
  const [childProduct, setChildProduct] = useState(0);

  // === Handlers ===
  const changeProductOptionHandler = (selectedProductOption) => {
    // We want to return the index of the onlineResults.children[i] where the
    // newly selected child variant matches onlineResults.children[i].variant
    // - this will update the state
    setChildProduct(() => {
      return onlineResults.children.findIndex(
        (children) => children.variant === selectedProductOption
      );
    });
  };

  return (
    <Wrapper>
      <WidgetHeader />
      <Product
        parentTitle={onlineResults.title}
        childTitle={onlineResults.children[childProduct].title}
        variants={variants}
        onChangeProductOption={changeProductOptionHandler}
      />
      <MainNav />
      <Wrapper>
        {onlineResults.children[childProduct].offers.map((offer) => (
          <OnlineRetailerCard
            key={offer.id}
            retailer={offer.retailer}
            stock={offer.stock}
            cta={offer.cta}
          />
        ))}
      </Wrapper>
    </Wrapper>
  );
};

export default App;
