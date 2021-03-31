import { Gestures } from './gestures';

export class Rules {
    private readonly rules: Gestures[];

    constructor() {
        this.rules = [];

        this.rules[`${Gestures.Rock + Gestures.Scissors}`] = Gestures.Rock;
        this.rules[`${Gestures.Scissors + Gestures.Rock}`] = Gestures.Rock;
        this.rules[`${Gestures.Scissors + Gestures.Paper}`] = Gestures.Scissors;
    }

    winner(playerOneGesture: Gestures, playerTwoGesture: Gestures): Gestures {
        return this.rules[`${playerOneGesture + playerTwoGesture}`];
    }
}
