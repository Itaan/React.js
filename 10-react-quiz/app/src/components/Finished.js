function Finished({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p>
      You scored <scrong>{points}</scrong> out of {maxPossiblePoints}{" "}
      {Math.ceil(percentage)}
    </p>
  );
}

export default Finished;
