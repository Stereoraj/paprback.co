import useSWR, { mutate } from 'swr';
import fetcher from '@/utils/fetcher';
import { apifetch } from '@/utils/fetch';

export default function useUser(user) {
    
    // const { data: id } = useSWR(user ? `${apifetch}/user/${user.username}` : null, fetcher)
    const { data, error, mutate } = useSWR(user ? `${apifetch}/${user.user_id}/profile` : null, fetcher, {
        revalidateOnFocus: false,
    });

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
        mutate,
    }
}