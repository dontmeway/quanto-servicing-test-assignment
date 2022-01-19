export type SearchIdResponse = {
    searchId: string
}



export type Ticket = {
    carrier: string,
    price: number,
    segments: {
      origin: string,
      destination: string,
      date: string,
      stops: string[],
      duration: number
    }[]
}

export type TicketsResponse = {
    tickets: Ticket[]
    stop: boolean
}