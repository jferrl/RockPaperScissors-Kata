import { Game } from '../src/game';
import { Gestures } from '../src/gestures';

describe('RockPaperScissors Game', (): void => {
    let sut: Game;

    beforeEach((): void => {
        sut = new Game();
    });

    it('when the first user chose rock and the second chose scissors then the first player should win', (): void => {
        expect(sut.play(Gestures.Rock, Gestures.Scissors)).toEqual(Gestures.Rock);
    });
    it('when the first user chose scissors and the second chose rock then the second player should win', (): void => {
        expect(sut.play(Gestures.Scissors, Gestures.Rock)).toEqual(Gestures.Rock);
    });
    it('when the first user chose scissors and the second chose paper then the first player should win', (): void => {
        expect(sut.play(Gestures.Scissors, Gestures.Paper)).toEqual(Gestures.Scissors);
    });
});
