import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_CRYPTOPRO_API_KEY,
	'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = url => ({url, headers: cryptoApiHeaders});

export const cryptoAPi = createApi({
	reducerPath: "cryptoAPi",
	baseQuery: fetchBaseQuery({baseUrl}),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
		getCoinHistory: builder.query({
			query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
		}),
	})
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetCoinHistoryQuery,
} = cryptoAPi;