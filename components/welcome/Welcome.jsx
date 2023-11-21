import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import Warranty from "../warranty/WarrantyPage";

import styles from "./welcome.style";
import { SIZES } from "../../constants";

const tabs = ["Bike Warranty"];
//set new items for new tabs

const Welcome = () => {
  const [activeTab, setActiveTab] = useState("Bike Warranty");
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchWarranty = async () => {
      try {
          const res = await axios.request({
              method: "GET",
              url: `http://192.168.0.164:8000/api/resource/Bike%20Warranty/W23000002`,
              headers: {
                  Authorization: "token 1aad98534bf1601:f2eedb44ceb16bb"
              }
          })  
          setData(res.data.data)
      } catch (error) {
          console.log(error)
      }
    }
    fetchWarranty();
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Hello {data.customer_name}</Text>
        <Text style={styles.userWelcome}>Here is your warranty details: </Text>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={tabs}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeTab, item)}
              onPress={() => setActiveTab(item)}
            >
              <Text style={styles.tabText(activeTab, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
        <View>
          {activeTab === "Bike Warranty" && <Warranty />}
        </View>
      </View>
    </View>
  );
};

export default Welcome;
