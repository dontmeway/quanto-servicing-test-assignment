import { Grid, GridItem } from "@chakra-ui/react";
import { memo } from "react";
import { Filter, filterList } from "./config";

type TicketFilterProps = {
  filterConfig: string;
  setFilterConfig: (arg: Filter) => void;
};

export const TicketFilter = memo(
  ({ filterConfig, setFilterConfig }: TicketFilterProps) => {
    return (
      <Grid gridTemplateColumns={"repeat(3, 1fr)"} mb="20px" w="100%">
        {filterList.map((filter) => (
          <GridItem
            transition={"200ms all"}
            textAlign={"center"}
            bg={filterConfig === filter.value ? "#2196F3" : "#fff"}
            cursor={"pointer"}
            color={filterConfig === filter.value ? "#fff" : "#4A4A4A"}
            border="1px solid #DFE5EC"
            padding={"15px"}
            onClick={() => setFilterConfig(filter.value as Filter)}
            key={filter.id}
          >
            {filter.label}
          </GridItem>
        ))}
      </Grid>
    );
  }
);
