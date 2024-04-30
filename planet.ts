
export enum ResourceType {
    Water = 0,
    Oxygen = 1,
    Minerals = 2,
    Vegetation = 3,
    Fauna = 4,
    Rocks = 5,
    Desert = 6
}

export enum DangerLevel {
    Low = 0,
    Medium = 1,
    High = 2
}

export class Planet {
    constructor(public name: string, public resourceName: ResourceType, public dangerLevel: DangerLevel) {}

    static generateRandomName(): string {
        const names = ['Alderaan', 'Tatooine', 'Endor', 'Hoth', 'Naboo', 'Coruscant', 'Dagobah', 'Kashyyyk'];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }
   
}
