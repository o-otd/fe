export default function useGetVotePercentage(
  positiveValue: number,
  negativeValue: number,
) {
  const totalVotes = positiveValue + negativeValue;

  const positiveVotePercentage =
    totalVotes > 0 ? (positiveValue / totalVotes) * 100 : 0;
  const negativeVotePercentage =
    totalVotes > 0 ? (negativeValue / totalVotes) * 100 : 0;

  return [positiveVotePercentage, negativeVotePercentage];
}
