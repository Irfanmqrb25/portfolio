import { Guestbook } from "@prisma/client";
import useSWR from "swr";

export const useGuestbook = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, mutate, isLoading } = useSWR<Guestbook[]>(
    "/api/guestbook",
    fetcher
  );
  return {
    data,
    mutate,
    isLoading,
  };
};
