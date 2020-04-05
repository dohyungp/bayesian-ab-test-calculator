import jStat from "jstat";

export function getWinProb(armA, armB) {
  let prob = 0.0;
  const { betaln } = jStat;
  const { log, exp } = Math;
  const [totalA, successA] = armA;
  const [totalB, successB] = armB;

  const alphaA = successA + 1;
  const betaA = totalA - successA + 1;
  const alphaB = successB + 1;
  const betaB = totalB - successB + 1;

  for (let i = 0; i < alphaB - 1; i++)
    prob += exp(
      betaln(alphaA + i, betaB + betaA) -
        log(betaB + i) -
        betaln(1 + i, betaB) -
        betaln(alphaA, betaA)
    );

  return prob * 100;
}
