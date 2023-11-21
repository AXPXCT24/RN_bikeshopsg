import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "../card/warrantycard.style"


const WarrantyCard = ({tube}) => {
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

      const tube_replacement = data.tube_replacements;
      const m = 12;
      const v = typeof tube_replacement === 'undefined' ? 0 : tube_replacement.length;
      const stamps = Array(v).fill('X').concat(new Array(m - v).fill(''));

    return (
      <View style={styles.container}>
        <View style={styles.tucard}>
          <View style={styles.tucardHeader}>
           <Text style={styles.tucardTitle}>Tune-Up</Text>
           <Text style={styles.tucardText}>12 free inner-tube replacements.</Text>
          </View>

          <View style={styles.tucardBody}>
            {stamps.map((value, index) => (
              <View key={index} style={styles.stampUsed}>
                <Text style={styles.stampText}>{value}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.tucardFooter}>mybikeshopsg.com</Text>
        </View>
      </View>
    )
}

export default WarrantyCard;