import useSWR from 'swr';

type User = {
  id: string;
  name: string;
  email: string;
}

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<User | null>);
}

export const useUsers = (id: number | undefined) => {
  const { data, error, isLoading } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/users/${id}` : null,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  }
}
