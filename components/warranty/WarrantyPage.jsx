import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import WarrantyCard from "./card/WarrantyCard";

import styles from "./warrantypage.style";

const Warranty = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetch = async () => {
          try {
              const res = await axios.request({
                  method: "GET",
                  url: "http://192.168.0.164:8000/api/resource/Bike%20Warranty/W23000002",
                  headers: {
                      Authorization: "token 1aad98534bf1601:f2eedb44ceb16bb"
                  }
              });
              setData(res.data.data)
          } catch (error) {
              console.log(error)
          }
        }
    
        fetch();
      }, []);

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                <Text style={styles.userWelcome}>{data.model}</Text>
                <Text style={styles.userName}>Owner: {data.customer_name}</Text>
                <Text style={{fontSize: 11}}>customer: {data.customer}</Text>
            </View>

            <View style={styles.tabsContainer}>
                <Text style={styles.normText}>Color: {data.color}</Text>
                <Text style={styles.normText}>Serial Number: {data.frame_serial}</Text>
                <Text style={styles.normText}>Wheel Size: {data.size_of_wheel}</Text>
                <Text style={styles.normText}>Served by: {data.served_by}</Text>
            </View>
            <View style={styles.tabsContainer}>
                <Text style={styles.userWelcome}>Warranty Card</Text>
                <WarrantyCard />
            </View>
        </View>
    )
}

export default Warranty;