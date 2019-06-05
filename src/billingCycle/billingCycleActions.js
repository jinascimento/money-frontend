import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLYNG_CYCLES_FETCHED',
        payload: request
    }
}