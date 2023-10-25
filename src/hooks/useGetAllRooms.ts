import { baseUrl } from "@/utils/baseUrl";
import { useQuery } from "@tanstack/react-query";

const getRooms = async () => {
  const data = await fetch(baseUrl + "rooms");
  return data.json();
};

const useGetAllRooms = () =>
  useQuery({
    queryKey: ["rooms"],
    queryFn: () => getRooms(),
  });
export default useGetAllRooms;
