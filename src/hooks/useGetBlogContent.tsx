import { useQuery } from "@tanstack/react-query";
import { mockBlogContent } from "../mocks/mockBlogContent";
import { useState } from "react";

export const useGetBlogContent = () => {
    const [isLoading, setIsLoading] = useState(true);

    return useQuery({
        queryKey: ["blogContent"],
        queryFn: () => {
            return new Promise((resolve) => {
                setTimeout(() => { setIsLoading(false); resolve(mockBlogContent); }, 5000);
                return isLoading;
            });
        },
    });
};
