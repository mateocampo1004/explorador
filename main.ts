// main.ts

import { getUserInput } from './userInput';
import { navigate, Direction } from './navigation';
import { collectResources } from './resourceCollection';
import { Spaceship } from './spaceship';
import { Planet, ResourceType, DangerLevel } from './planet';
import { generateRandomEvent, handleEvent } from './eventHandling';

async function main() {
    // Simulación del juego

    // Crear un planeta con un nombre aleatorio y nivel de peligro aleatorio
    const planetName = Planet.generateRandomName();
    const randomResourceType = Math.floor(Math.random() * Object.keys(ResourceType).length / 2);
    const planetResourceType = randomResourceType as ResourceType;
    const randomDangerLevel = Math.floor(Math.random() * Object.keys(DangerLevel).length / 2);
    const planetDangerLevel = randomDangerLevel as DangerLevel;
    const planet = new Planet(planetName, planetResourceType, planetDangerLevel);

    // Imprimir los atributos del planeta
    console.log("Planeta explorado:");
    console.log(`- Nombre: ${planet.name}`);
    console.log(`- Tipo de recurso: ${ResourceType[planet.resourceName]}`);
    console.log(`- Nivel de peligro: ${DangerLevel[planet.dangerLevel]}`);

    // Crear una nave espacial para la simulación
    const ship: Spaceship = { salud: 100, capacidad: 100, velocidad: 10, position: { x: 0, y: 0 } };

    // Capturar entrada del usuario para la dirección de navegación
    const userInput = await getUserInput('¿Hacia qué dirección quieres explorar? (norte, sur, este, oeste): ');

    // Mapear la entrada del usuario a la dirección correspondiente
    let direction: Direction;
    switch (userInput) {
        case 'norte':
            direction = Direction.North;
            break;
        case 'sur':
            direction = Direction.South;
            break;
        case 'este':
            direction = Direction.East;
            break;
        case 'oeste':
            direction = Direction.West;
            break;
        default:
            // Si la entrada no coincide con ninguna dirección válida, lanzar un error o manejar el caso según tus necesidades
            throw new Error('Dirección no válida.');
    }

    // Navegar en la dirección indicada
    const distance = navigate(ship, direction);
    simulateTravel(ship, distance);

    // Recolectar recursos del planeta
    collectResources<string>(planet, 10); // Recolectar recursos de tipo string

    const randomEvent = generateRandomEvent(planet.dangerLevel);
    handleEvent(randomEvent, ship);

    function simulateTravel(ship: Spaceship, distance: number) {
        // Simular el paso del tiempo y la distancia
        console.log(`Viajando ${distance} unidades en la dirección indicada...`);

        // Actualizar la posición de la nave
        switch (direction) {
            case Direction.North:
                ship.position.y += distance;
                break;
            case Direction.South:
                ship.position.y -= distance;
                break;
            case Direction.East:
                ship.position.x += distance;
                break;
            case Direction.West:
                ship.position.x -= distance;
                break;
        }

        console.log(`Nueva posición de la nave: (${ship.position.x}, ${ship.position.y})`);
    }
}

main();
