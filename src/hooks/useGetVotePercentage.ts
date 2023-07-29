export default function useGetVotePercentage(
  firstValue: number,
  secondValue: number,
) {
  const totalVotes = firstValue + secondValue;

  const positiveVotePercentage =
    totalVotes > 0 ? (firstValue / totalVotes) * 100 : 0;
  const negativeVotePercentage =
    totalVotes > 0 ? (secondValue / totalVotes) * 100 : 0;

  const firstVotePercentage = {
    order: 0,
    percentage: positiveVotePercentage,
  };

  const secondVotePercentage = {
    order: 1,
    percentage: negativeVotePercentage,
  };

  const result = [firstVotePercentage, secondVotePercentage];

  return result;
}
