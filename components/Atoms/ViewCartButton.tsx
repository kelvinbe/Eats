import { View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import OrderItem from '../Molecules/restrauntDetails/OrderItems';
import {db, collection, addDoc, serverTimestamp} from '../../firebase.js';
import LottieView from "lottie-react-native";



const styles = StyleSheet.create({
    viewCartButtonHolder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 70,
        zIndex: 999
        
    },
    viewCartButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    viewCartButton: {
        marginTop: 20,
        backgroundColor: '#FE4A3D',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 15,
        borderRadius: 30,
        width: 300,
        position: 'relative'
    },
    viewCartButtonText: {
        color: 'white',
        fontSize: 20,
        marginRight: 30
    },
    totalUSDText: {
      color: 'white',
      fontSize: 20
    },
    checkoutModalContainer: {
      backgroundColor: '#FE4A3D',
      padding: 10,
      borderRadius: 30,
      width: 150,
      alignItems: 'center'
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
    loader: {
      backgroundColor: 'black',
      position: 'absolute',
      opacity: 0.6,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    }

  });

export default function ViewCartButton({navigation}) {

  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const items = useSelector((state) => state?.cartReducer?.selectedItems?.items)
  const total = items?.map((item) => Number(item.price)).reduce((prev, curr) => prev + curr, 0)
  const totalUSD = total?.toLocaleString('en', {
    style: 'currency',
    currency: 'USD'
  })



  const addOrderToFirebase = async () => {
    
    try {
      setLoading(true)
      const docRef = await addDoc(collection(db, "orders"), {
        items: items,
        restaurantName: 'restaurant',
        createdAt: serverTimestamp(),
      });
      setTimeout(() => {
        setLoading(false)
        setModalVisible(false)
        navigation.navigate("OrderCompleted");
      }, 2500);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };



  const checkoutModalContent = () => {
    return (
      <>
            <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>

            <Text style={styles.restaurantName}>Checkout</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "#FE4A3D",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  addOrderToFirebase()
                  setModalVisible(false)}}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };


  return (
    <>
    <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>


      {checkoutModalContent()}
    </Modal>
    { total ? (
    <View style={styles.viewCartButtonHolder}>
    <View style={styles.viewCartButtonContainer}>
        <TouchableOpacity  style={styles.viewCartButton}>
      <Text style={styles.viewCartButtonText} onPress={() => setModalVisible(true)}>Check Out Cart</Text>
      <Text style={styles.totalUSDText}>{totalUSD}</Text>
      </TouchableOpacity>
    </View>
    </View>
    
    
    ):null
}

{loading ? <View style={styles.loader}>

  <LottieView
  style={{height: 200}}
  source={require('../../assets/animations/scanner.json')}
  autoPlay
  speed={3}
  
  
  />

</View> : <></>}
    </>
)
}