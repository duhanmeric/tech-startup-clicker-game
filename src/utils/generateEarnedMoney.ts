interface EarnedMoneyParams {
  complexity: number;
  clicks: number;
  timeTaken: number;
}

/**
 * Generates an earned money value for a completed project based on various factors.
 * The resulting value is calculated based on a formula that considers the project's
 * complexity, the number of clicks, the time taken to complete the project, and
 * any upgrades or bonuses the player has unlocked.
 *
 * @param {EarnedMoneyParams} params - An object containing the required parameters.
 * @param {number} params.complexity - Range -> 1-10. A numeric value representing the complexity of the project.
 * @param {number} params.clicks - The number of clicks the player made while completing the project.
 *                                  In a real-world scenario, this could represent the effort the
 *                                  player has put into the project, such as work hours, tasks completed,
 *                                  or features implemented.
 * @param {number} params.timeTaken - The time (in days) taken to complete the project.
 * @returns {number} The calculated earned money value as a rounded integer.
 */

export function generateEarnedMoney(params: EarnedMoneyParams): number {
  const { complexity, clicks, timeTaken } = params;

  const baseValue = complexity >= 10 ? 10 * 10 : complexity * 10;
  const clickBonus = (clicks / 100) * baseValue;
  const timeBonus = (timeTaken / 30) * baseValue;

  const earnedMoney = Math.round(baseValue + clickBonus + timeBonus);

  return earnedMoney;
}
