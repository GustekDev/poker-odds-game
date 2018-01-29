import * as React from 'react';
import * as Game from '../../lib/poker/game';

export default class SettingsForm extends React.Component<any, Game.GameSettings> {

    constructor(props: any) {
        super(props);
        this.state = {
            turn: 'Flop',
            rounds: 10,
            game: 'hand-reading'
        };
    }

    render() {
        return (
            <form>
                <div>
                <label>
                    <input type="radio" name="turn" value="Flop" checked={this.state.turn === 'Flop'} />
                    Flop
                </label>
                <label>
                    <input type="radio" name="turn" value="Turn" checked={this.state.turn === 'Turn'} />
                    Turn
                </label>
                <label>
                    <input type="radio" name="turn" value="River" checked={this.state.turn === 'River'} />
                    River
                </label>
                </div>
                <div>
                    <label>
                        Number of rounds
                    <input type="number" name="rounds" value={this.state.rounds} />
                    </label>
                </div>
            </form>
        );
    }

}
