import { baseUrl } from "@/utils/baseUrl";
import { useQuery } from "@tanstack/react-query";

const getRoom = async (id: number) => {
  const data = await fetch(`${baseUrl}/rooms/${id}`);
  return data.json();
};

const useGetRoom = (id: number) =>
  useQuery({
    queryKey: ["room"],
    queryFn: () => getRoom(id),
  });
export default useGetRoom;
