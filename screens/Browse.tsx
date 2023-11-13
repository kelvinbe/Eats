import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  ActivityIndicator,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BrowseCard from "../components/Molecules/Browse/BrowseCard";
import BottomTabs from "../components/Organisms/BottomTabs";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Browse({ navigation }) {
  const [FoodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [nutrients, setNutrients] = useState(null)

  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
    params: {
      "nutrition-type": "cooking",
      "category[0]": "generic-foods",
      "health[0]": "alcohol-free",
    },
    headers: {
      "X-RapidAPI-Key": "bcb659df96msh1d61b442ebc1883p1f566ejsn56992c7d7f79",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

  const FetchFoodData = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      const food = response.data.hints;
      return food;
    } catch (error) {
      console.log(error);
    }
  };


  const handleOnPress = (nutrients: {ENERC_KCAL: number, PROCNT: number,FAT: number,CHOCDF: number, FIBTG: number}) => {
      setModalVisible(true)
      setNutrients(nutrients)

  }

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      const data = await FetchFoodData();
      setFoodData(data);
      setLoading(false);
    };
    fetchDataAndUpdateState();
  }, []);


  

  return (
    <View style={styles.homeContainer}>
      <View>
        <Text style={styles.headerStyling}>All Categories</Text>
      </View>
      {loading ? (
        <ActivityIndicator size={"large"} color={"#FE4A3D"} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.food.foodId}
          numColumns={2}
          data={FoodData}
          renderItem={({ item }) => (
            <BrowseCard
              onPress={() => handleOnPress(item.food.nutrients)}
              image={item.food.image}
              category={item.food.category}
              nutrients={item.food.nutrients}
            />
          )}
        />
      )}

      {loading ? null : <BottomTabs navigation={navigation} />}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={styles.modalText}>
             <View><Text>CHOCDF : {nutrients?.CHOCDF}</Text></View> 
             <View><Text>ENERC_KCAL: {nutrients?.ENERC_KCAL}</Text></View> 
             <View><Text>FAT: {nutrients?.FAT}</Text></View> 
             <View><Text>FIBTG: {nutrients?.FIBTG}</Text></View> 
             <View><Text>PROCNT: {nutrients?.PROCNT}</Text></View> 
              </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
    backgroundColor: "#eee",
  },
  interiorContainer: {
    backgroundColor: "white",
    padding: 15,
  },
  headerStyling: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 10,
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    height: 200
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
