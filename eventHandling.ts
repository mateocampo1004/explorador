// eventHandling.ts

import { Spaceship } from './spaceship';
import { DangerLevel } from './planet';

export class Event {
    constructor(public name: string, public effect: (ship: Spaceship) => void) {}
}

export function generateRandomEvent(dangerLevel: DangerLevel): Event {
    const events: Event[] = [];

    switch (dangerLevel) {
        case DangerLevel.Low:
            events.push(
                new Event('Tormenta de polvo', (ship: Spaceship) => {
                    console.log('Efecto del evento: Tormenta de polvo. La visibilidad se reduce.');
                }),
                new Event('Caída de meteoritos', (ship: Spaceship) => {
                    ship.salud -= 10; // Reducir la salud de la nave en 10 por la caída de meteoritos
                    console.log('Efecto del evento: Caída de meteoritos. Se redujo la salud de la nave.');
                    console.log(`Estado actual de la nave: ${JSON.stringify(ship)}`);
                }),
                new Event('Aterrizaje forzoso', (ship: Spaceship) => {
                    console.log('Efecto del evento: Aterrizaje forzoso. La nave sufre daños.');
                })
            );
            break;
        case DangerLevel.Medium:
            events.push(
                new Event('Ataque de piratas espaciales', (ship: Spaceship) => {
                    ship.salud -= 30; // Reducir la salud de la nave en 30 por el ataque de piratas
                    console.log('Efecto del evento: Ataque de piratas espaciales. Se redujo la salud de la nave.');
                    console.log(`Estado actual de la nave: ${JSON.stringify(ship)}`);
                }),
                new Event('Radiación cósmica', (ship: Spaceship) => {
                    ship.salud -= 15; // Reducir la salud de la nave en 15 por la exposición a la radiación
                    console.log('Efecto del evento: Radiación cósmica. Se redujo la salud de la nave.');
                    console.log(`Estado actual de la nave: ${JSON.stringify(ship)}`);
                }),
                new Event('Fuga de aire en la nave', (ship: Spaceship) => {
                    console.log('Efecto del evento: Fuga de aire en la nave. Se pierden recursos.');
                })
            );
            break;
        case DangerLevel.High:
            events.push(
                new Event('Infección por virus espacial', (ship: Spaceship) => {
                    ship.salud -= 50; // Reducir drásticamente la salud de la nave por la infección
                    console.log('Efecto del evento: Infección por virus espacial. Se redujo drásticamente la salud de la nave.');
                    console.log(`Estado actual de la nave: ${JSON.stringify(ship)}`);
                }),
                new Event('Campo de asteroides peligroso', (ship: Spaceship) => {
                    ship.velocidad = 0; // Detener la nave al quedar atrapados en un campo de asteroides
                    console.log('Efecto del evento: Campo de asteroides peligroso. La nave se detuvo.');
                }),
                new Event('Pérdida de comunicaciones', (ship: Spaceship) => {
                    console.log('Efecto del evento: Pérdida de comunicaciones. La nave queda incomunicada.');
                })
            );
            break;
        default:
            break;
    }

    // Devolvemos un evento aleatorio
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
}

export function handleEvent(event: Event, ship: Spaceship) {
    event.effect(ship);
}
