import { Injection } from "../types/injection.type";
export declare class InjectionService {
    private injections;
    loadInjections(): Injection[];
    refreshInjections(): void;
}
