
export interface Spaceship {
    salud: number;
    capacidad: number;
    velocidad: number;
    position: { x: number; y: number }; 
}


export enum Direction {
    North,
    South,
    East,
    West
}

