import axios from 'axios';

const obj = {
    "companyName": "GLA University",
    "clientID": "5681c8eb-20a5-4b46-ae6d-291bf7d35c77",
    "clientSecret": "xWwgpRDHBvtdFdLp",
    "ownerName": "Ankit Kumar Dwivedi",
    "ownerEmail": "ankit.dwivedi_cs21@gla.ac.in",
    "rollNo": "2115000157"
}
;

export const getToken = async () => {
    try {
        const response = await axios.post("http://20.244.56.144/test/auth", obj);
        return response.data.access_token; 
    } catch (error) {
        console.error('Error fetching token:', error.message || error);
        throw error;
    }
};