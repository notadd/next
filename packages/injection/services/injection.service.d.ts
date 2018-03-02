import { Injection } from "../types";
export declare class InjectionService {
    private injections;
    loadInjections(): Injection[];
    refreshInjections(): void;
}
