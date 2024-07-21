export default function getDateRange({
	start,
	end,
}: {
	start: string;
	end: string;
}): string {
	const startTime = Date.parse(start);
	const endTime = Date.parse(end);
	// second: n/1000, minute: n/1000/60, hour: n/1000/60/60, day: n/1000/60/60/24 ...
	const diff = (endTime - startTime) / 1000;
	const times: Array<{
		unit: "년" | "개월" | "주";
		milliSeconds: number;
	}> = [
		{ unit: "주", milliSeconds: 60 * 60 * 24 * 7 },
		{ unit: "개월", milliSeconds: 60 * 60 * 24 * 30 },
		{ unit: "년", milliSeconds: 60 * 60 * 24 * 365 },
	];
	let result: { unit: string; value: number } = { unit: "", value: 0 };

	// 년 단위부터 알맞는 단위 찾기
	for (const value of times) {
		const betweenTime = diff / value.milliSeconds;

		// 큰 단위는 0보다 작은 소수 단위 나옴
		if (betweenTime < 10) {
			result = { unit: value.unit, value: betweenTime };
			break;
		}
	}

	if (result.unit === "주") {
		return Math.round(result.value).toString() + result.unit;
	}

	if (result.unit == "년") {
		const restMonth = result.value - Math.floor(result.value);
		const month: string = `${Math.round(restMonth * 10)}개월`;
		const year: string = `${Math.floor(result.value).toString()}${result.unit}`;
		return `${year} ${month}`;
	}

	return Math.round(result.value).toString() + result.unit;
}
