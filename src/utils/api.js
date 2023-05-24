import axios from 'axios';
const params = {
    headers: {
        Authorization: "bearer " + "15e83cbd8076c7df8c663d51da77de5501414dd2310e7e6a2743ad431bc5315d24c5f9a4340c45c536ac3d08df934d7b4c4c64ec45be8242905facbd71f7111c1949c78fb23066845fed862a9caec57466e944ee5be3bb1aae4542ebbb0e0638853f2fc481411674623183dc477752cec4acf2e84d51ecd0ac0a53f01be76797",
    },

};

export const fetchDataFromApi = async (url) => {
    try{
        const {data} = await axios.get("http://localhost:1337" + url, params);
        return data;
    }
    catch (err ) {
        console.log(err);
        return err;
    }
}

export const makePaymentRequest = axios.create({
    baseURL: 'http://localhost:1337',
    headers: {
        Authorization: "bearer " + "15e83cbd8076c7df8c663d51da77de5501414dd2310e7e6a2743ad431bc5315d24c5f9a4340c45c536ac3d08df934d7b4c4c64ec45be8242905facbd71f7111c1949c78fb23066845fed862a9caec57466e944ee5be3bb1aae4542ebbb0e0638853f2fc481411674623183dc477752cec4acf2e84d51ecd0ac0a53f01be76797",
    },

});