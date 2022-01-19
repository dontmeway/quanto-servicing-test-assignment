import { Box, Checkbox, Heading } from "@chakra-ui/react";
import { memo } from "react";
import { useCallback } from "react";
import { sortList } from "./config";

type TicketSortProps = {
  sortConfig: number[];
  setSortConfig: (arg: number[] | []) => void;
};

export const TicketsSort = memo(
  ({ sortConfig, setSortConfig }: TicketSortProps) => {
    const handleChange = useCallback(
      (value: number) => {
        if (sortConfig.includes(value)) {
          setSortConfig(sortConfig.filter((f) => f !== value));
        } else {
          setSortConfig(sortConfig.concat(value));
        }
      },
      [setSortConfig, sortConfig]
    );

    return (
      <Box
        bg={"#fff"}
        borderRadius={"5px"}
        height={"250px"}
        p="20px"
        width={"250px"}
      >
        <Heading
          fontSize={"14px"}
          fontWeight={"600"}
          color={"#4A4A4A"}
          mb="20px"
        >
          Количество пересадок
        </Heading>
        <Box display={"flex"} flexDirection={"column"}>
          <Checkbox
            isChecked={sortConfig.length === 0}
            onChange={() => setSortConfig([])}
          >
            Все
          </Checkbox>
          {sortList.map((element) => (
            <Checkbox
              isChecked={sortConfig.includes(element.value)}
              onChange={() => handleChange(element.value)}
              key={element.id}
            >
              {element.label}
            </Checkbox>
          ))}
        </Box>
      </Box>
    );
  }
);
