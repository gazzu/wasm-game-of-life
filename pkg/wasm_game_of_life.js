/* tslint:disable */
import * as wasm from './wasm_game_of_life_bg';

/**
*/
export const Cell = Object.freeze({ Dead:0,Alive:1, });

const __wbg_error_cc95a3d302735ca3_target = console.error;

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbg_error_cc95a3d302735ca3(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);

    varg0 = varg0.slice();
    wasm.__wbindgen_free(arg0, arg1 * 1);

    __wbg_error_cc95a3d302735ca3_target(varg0);
}

function freeUniverse(ptr) {

    wasm.__wbg_universe_free(ptr);
}
/**
*/
export class Universe {

    static __wrap(ptr) {
        const obj = Object.create(Universe.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeUniverse(ptr);
    }

    /**
    * @returns {void}
    */
    tick() {
        return wasm.universe_tick(this.ptr);
    }
    /**
    * @returns {Universe}
    */
    static new() {
        return Universe.__wrap(wasm.universe_new());
    }
    /**
    * @returns {number}
    */
    width() {
        return wasm.universe_width(this.ptr);
    }
    /**
    * @returns {number}
    */
    height() {
        return wasm.universe_height(this.ptr);
    }
    /**
    * @returns {number}
    */
    cells() {
        return wasm.universe_cells(this.ptr);
    }
    /**
    * @param {number} arg0
    * @param {number} arg1
    * @returns {void}
    */
    toggle_cell(arg0, arg1) {
        return wasm.universe_toggle_cell(this.ptr, arg0, arg1);
    }
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

