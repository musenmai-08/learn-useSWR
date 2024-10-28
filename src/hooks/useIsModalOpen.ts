import useSWR from "swr";

export const useIsModalOpen = (bool: boolean) => {
	const { data, error, isLoading, mutate } = useSWR("isModalOpen", () => ({
		isModalOpen: bool,
	}));

	return {
		data: data,
		isLoading,
		isError: error,
		mutate,
	};
};
