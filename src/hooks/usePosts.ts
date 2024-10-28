import useSWR from 'swr';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<Post | null>);
}
  
export const usePosts = (id: number) => {
  const { data, error, isLoading, mutate } = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher);

  return {
    post: data,
    isLoading,
    isError: error,
    mutate,
  }
}