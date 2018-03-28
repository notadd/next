import { Injection } from "../interfaces";
export declare class InjectionService {
    private injections;
    loadInjections(): Injection[];
    refreshInjections(): void;
}
