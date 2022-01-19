import { useCallback, useMemo, useState } from "react"
import { useQuery } from "react-query"
import { ticketsApi } from "shared/api"
import { getOverallDuration } from "./lib"


enum QUERY_KEYS {
    GET_SEARCH_ID = 'getSeacrchId',
    GET_TICKETS = 'getTickets'
}

type UseTicketsParams = {
    sortConfig: number[],
    filterConfig: import('features/tickets-filter/config').Filter
}

export const useTickets = ({ sortConfig, filterConfig }: UseTicketsParams) => {
    const [length, setLength] = useState(5)

    const incrementLength = useCallback(() => {
        setLength(prev => prev + 5)
    }, [])
    
    const { data: searchIdResponse, isLoading } = useQuery(QUERY_KEYS.GET_SEARCH_ID, () => ticketsApi.getSearchId())

    const searchId = searchIdResponse?.data.searchId

    const { data: ticketsResponse, refetch, isFetching } = useQuery([QUERY_KEYS.GET_TICKETS, searchId], () => ticketsApi.getTickets({ searchId: searchId! }), {
        enabled: Boolean(searchId),
        retry: 2,
        retryDelay: 100,
        onSuccess: (data) => {
            if (!data.data.stop) {
                refetch()
            }
        }
    })

    const loading = isFetching || isLoading
    const tickets = ticketsResponse?.data.tickets

    const sortedTickets = useMemo(() => {
        if (!tickets) return []

        return tickets.filter(ticket => !sortConfig.length || ticket.segments.every(segment => sortConfig.includes(segment.stops.length)))
    }, [tickets, sortConfig])

    const filteredTickets = useMemo(() => {
        if (filterConfig === 'price') {
            return sortedTickets.sort((a, b) => a.price - b.price)
        } 
        else if (filterConfig === 'duration') {
            return sortedTickets.sort((a, b) => getOverallDuration(a.segments) - getOverallDuration(b.segments))
        }
        else {
            return sortedTickets.sort((a, b) => (a.price + getOverallDuration(a.segments)) - (b.price + getOverallDuration(b.segments)))
        }
    }, [sortedTickets, filterConfig])

    return {
        incrementLength,
        loading,
        tickets: filteredTickets.slice(0, length),
        length: ticketsResponse?.data.tickets.length || 0
    }

}
