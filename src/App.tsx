import { useIsModalOpen } from "./hooks/useIsModalOpen";

export const App = () => {
	const { data, isLoading, isError, mutate } = useIsModalOpen(true);

	const onClick = async () => {
		const newValue = {
			isModalOpen: data?.isModalOpen ? false : true,
		};
		mutate(newValue, false);
	};

	if (isError) return <div>エラーです</div>;
	if (isLoading) return <div>読み込み中...</div>;

	return (
		<div>
			<h1>状態：{data?.isModalOpen ? "モーダル開いてます" : "閉じてます"}</h1>
			<button onClick={onClick}>stateの変更</button>
		</div>
	);
};
