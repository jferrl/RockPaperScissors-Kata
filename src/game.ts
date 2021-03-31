import { Gestures } from './gestures';
import { Rules } from './rules';

export class Game {
    private readonly rules: Rules;

    constructor() {
        this.rules = new Rules();
    }

    play(playerOneGesture: Gestures, playerTwoGesture: Gestures): Gestures {
        return this.rules.winner(playerOneGesture, playerTwoGesture);
    }
}
