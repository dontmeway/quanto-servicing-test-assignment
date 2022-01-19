import { Button, Container, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { TicketCard, ticketModel } from "entities/ticket";
import { TicketFilter } from "features/tickets-filter";
import type { Filter } from "features/tickets-filter/config";
import { TicketsSort } from "features/tickets-sort";
import { useState } from "react";
import { Header } from "widgets/header";
import styles from "./styles.module.scss";

const TicketsPage = () => {
  const [sortConfig, setSortConfig] = useState<number[]>([]);
  const [filterConfig, setFilterConfig] = useState<Filter>("price");

  const { loading, incrementLength, tickets, length } = ticketModel.useTickets({
    sortConfig,
    filterConfig,
  });

  return (
    <div className={styles.root}>
      <Container maxW="780px">
        <Header />
        <Grid templateColumns="repeat(2, 1fr)" gap={"20px"}>
          <GridItem>
            <TicketsSort
              sortConfig={sortConfig}
              setSortConfig={setSortConfig}
            />
          </GridItem>
          {loading ? (
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Spinner color="#2196F3" />
            </GridItem>
          ) : (
            <GridItem>
              <TicketFilter
                filterConfig={filterConfig}
                setFilterConfig={setFilterConfig}
              />
              {tickets?.map((ticket, index) => (
                <TicketCard key={index} ticket={ticket} />
              ))}
              <Button
                disabled={tickets.length + 5 > length}
                _hover={{ bg: "#2196F3", opacity: 0.4 }}
                bg="#2196F3"
                color={"#fff"}
                width={"100%"}
                onClick={incrementLength}
              >
                Показать еще 5 билетов!
              </Button>
            </GridItem>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default TicketsPage;
