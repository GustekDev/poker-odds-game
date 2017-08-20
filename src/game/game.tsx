// import * as R from "ramda"
// import handGetRound from "./hand-reading/Game"

// export class Game {
//     private settings: GameSettings;
//     private rounds: Round[];

//     public constructor(settings: GameSettings) {
//         this.settings = settings;
//         for (var i = 0; i < settings.rounds; i++) {
//             this.rounds.push(this.getNewRound())
//         }
//     }

//     public isFinished() {
//         return !R.any(R.isNil, R.map(R.prop("userAnswer"), this.rounds))
//     }

//     private getNewRound(): Round {
//         switch(this.settings.game) {
//             case "hand-reading": return handGetRound(this.settings.turn)
//             case "outs-counting": return handGetRound(this.settings.turn)
//         }
//     }

//     public getRound(n: number) {
//         return this.rounds[n];
//     }

//     public answer(round: number, answer: any) {
//         this.rounds = R.update(
//             round, R.merge(this.rounds[round], { answer }), this.rounds
//         )
//     }
// }