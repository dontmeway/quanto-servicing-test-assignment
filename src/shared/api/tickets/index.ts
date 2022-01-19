import { AxiosPromise } from "axios";
import { SearchIdResponse, TicketsResponse } from "./models";
import { instance } from "./base";

const SEACRH_ID_URL = '/search'
const BASE_URL = '/tickets'

export const getSearchId = (): AxiosPromise<SearchIdResponse> => {
    return instance.get(SEACRH_ID_URL)
}

export type GetTicketsParams = {
    searchId: string
}

export const getTickets = (params: GetTicketsParams): AxiosPromise<TicketsResponse> => {
    return instance.get(BASE_URL, { params })
}