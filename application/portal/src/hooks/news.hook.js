import { useQuery } from "@tanstack/react-query";
import { fetchFilteredNews } from "../service/news.service";

const useNewsApi=({keyword})=>{
    const { data, isLoading, error } = useQuery({
        queryKey: ["news",keyword],
        queryFn: fetchFilteredNews,
      },{
        select
      });
}
