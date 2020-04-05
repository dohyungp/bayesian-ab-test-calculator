import jStat from "jstat";

export function getWinProb(alphaA, betaA, alphaB, betaB) {
  let prob = 0.0;
  const { betaln } = jStat;
  const { log, exp } = Math;

  for (let i = 0; i < alphaB - 1; i++)
    prob += exp(
      betaln(alphaA + i, betaB + betaA) -
        log(betaB + i) -
        betaln(1 + i, betaB) -
        betaln(alphaA, betaA)
    );

  return prob;
}
