export default function getProjectDate(date: string): string {
	const [year, month, _] = date.split(".");
	return `${year}.${month}`;
}
