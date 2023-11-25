import {PlayerDTO} from "../players/player.dto";

export interface TeamDTO {
    id: number;
    name: string;
    captain: PlayerDTO;
    players: PlayerDTO[];
}
