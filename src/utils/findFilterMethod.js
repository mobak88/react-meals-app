import API_ENDPOINTS from "../endpoints/endpoints";

const findFilterMethod = (methodName) => {
    return Object.keys(API_ENDPOINTS).find(
        (key) => key.toLowerCase() === methodName.toLowerCase()
    );
};

export default findFilterMethod;