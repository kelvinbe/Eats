import React, { useEffect, useRef, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/Molecules/restrauntDetails/MenuItems";
import {
  db,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "../firebase.js";

export default function OrderCompleted() {
  const animation = useRef(null);

  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const items = useSelector(
    (state) => state?.cartReducer?.selectedItems?.items
  );

  const total = items
    ?.map((item) => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total?.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        return setLastOrder(doc.data());
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          ref={animation}
          style={{ height: 100, alignSelf: "center", marginBottom: 20, marginTop: 20 }}
          source={require("../assets/animations/check.json")}
          autoPlay
          speed={0.5}
          loop={true}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at Our Dishes has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
