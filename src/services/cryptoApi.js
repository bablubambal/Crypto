import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
   'x-rapidapi-key': '2622036edemsh65dae8011d295f3p106a09jsnc6c27b20df4b'


}
const baseUrl = "https://coinranking1.p.rapidapi.com/"
 
// Creating the request with url and headers
const createRequest = (url)=> ({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        })
    })

})
export const { useGetCryptosQuery } = cryptoApi

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '2622036edemsh65dae8011d295f3p106a09jsnc6c27b20df4b'
//     }
//   };