import { componentFactoryName } from "@angular/compiler";
import { Component } from "@angular/core";

@Component ({

    selector: 'app-heroe',
    templateUrl: 'heroe.component.html' 

}) 


export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 48

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerEdad(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarHeroe(): void {
        this.nombre = 'Spaiderman';
    }

    cambiarEdad(): void {
        this.edad = 25;
    }
}