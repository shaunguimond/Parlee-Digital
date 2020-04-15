/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import Loader from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
      <Loader height={2} />
    </Flex>
  );
};

export default Loading;
