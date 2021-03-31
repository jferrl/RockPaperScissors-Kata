import { Gestures } from './gestures';

export class Game {
    play(_playerOneGesture: Gestures, _playerTwoGesture: Gestures): Gestures {
        return Gestures.Rock;
    }
}
