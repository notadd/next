/**
 * Mocking client-server processing
 */
import _sides from "./side.json";

const TIMEOUT = 100;

export default {
    getSides: (cb, timeout) => setTimeout(() => cb(_sides), timeout || TIMEOUT),
};
