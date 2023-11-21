import axios from "axios";

export const fetchWarranty = async () => {
    try {
        const res = await axios.request({
            method: "GET",
            url: `http://192.168.0.164:8000/api/resource/Bike%20Warranty/W23000002`,
            headers: {
                Authorization: "token 1aad98534bf1601:f2eedb44ceb16bb"
            }
        })
        return res
    } catch (error) {
        console.log(error)
    }
}