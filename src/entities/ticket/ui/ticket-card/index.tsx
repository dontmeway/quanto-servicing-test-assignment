import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { ticketModel } from "entities/ticket";
import { Fragment } from "react";
import styles from "./styles.module.scss";
var a = require("dayjs/plugin/duration");

type TickedCardProps = {
  ticket: import("shared/api").Ticket;
};

export const TicketCard = ({ ticket }: TickedCardProps) => {
  return (
    <Box p="20px" borderRadius="5px" bg="#fff" w="500px" mb="20px">
      <div className={styles.header}>
        <Heading color={"#2196F3"} fontSize={"24px"} fontWeight={600}>
          {ticket.price} P
        </Heading>
        <img
          src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
          alt="ticketImg"
        />
      </div>
      {ticket.segments.map((segment) => (
        <Grid mb={"10px"} gridTemplateColumns={"repeat(3, 140px)"} gap={"20px"}>
          <GridItem>
            <Text
              fontSize={"12px"}
              mb={"5px"}
              color={"#A0B0B9"}
              fontWeight={600}
            >
              {segment.origin} - {segment.destination}
            </Text>
            <Text>
              {dayjs(segment.date).format("HH:MM")} -{" "}
              {dayjs(segment.date)
                .add(segment.duration, "minute")
                .format("HH:MM")}
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontSize={"12px"}
              mb={"5px"}
              color={"#A0B0B9"}
              fontWeight={600}
            >
              В ПУТИ
            </Text>
            <Text>{ticketModel.formatMinutes(segment.duration)}</Text>
          </GridItem>
          <GridItem>
            <Text
              fontSize={"12px"}
              mb={"5px"}
              color={"#A0B0B9"}
              fontWeight={600}
            >
              {segment.stops.length !== 0 && segment.stops.length}{" "}
              {segment.stops.length === 0
                ? "БЕЗ ПЕРЕСАДОК"
                : segment.stops.length === 1
                ? "ПЕРЕСАДКА"
                : "ПЕРЕСАДКИ"}
            </Text>
            <Text>
              {segment.stops.map((stop, index) => (
                <Fragment key={stop + index}>
                  <span>{stop}</span>
                  {index === 0 && segment.stops.length > 1 && ", "}
                </Fragment>
              ))}
            </Text>
          </GridItem>
        </Grid>
      ))}
    </Box>
  );
};
