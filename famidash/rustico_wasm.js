let wasm_bindgen;
(function() {
    const __exports = {};
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }
    let wasm = undefined;

    let cachedUint8ArrayMemory0 = null;

    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function getArrayU8FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
    }

    let WASM_VECTOR_LEN = 0;

    function passArray8ToWasm0(arg, malloc) {
        const ptr = malloc(arg.length * 1, 1) >>> 0;
        getUint8ArrayMemory0().set(arg, ptr / 1);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }
    /**
     * @param {Uint8Array} pixels
     */
    __exports.draw_screen_pixels = function(pixels) {
        var ptr0 = passArray8ToWasm0(pixels, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.draw_screen_pixels(ptr0, len0, pixels);
    };

    /**
     * @param {number} keystate
     */
    __exports.set_p2_input = function(keystate) {
        wasm.set_p2_input(keystate);
    };

    __exports.update_windows = function() {
        wasm.update_windows();
    };

    __exports.wasm_init = function() {
        wasm.wasm_init();
    };

    /**
     * @param {Uint8Array} sram
     */
    __exports.set_sram = function(sram) {
        const ptr0 = passArray8ToWasm0(sram, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.set_sram(ptr0, len0);
    };

    /**
     * @param {number} keystate
     */
    __exports.set_p1_input = function(keystate) {
        wasm.set_p1_input(keystate);
    };

    /**
     * @returns {boolean}
     */
    __exports.has_sram = function() {
        const ret = wasm.has_sram();
        return ret !== 0;
    };

    /**
     * @returns {boolean}
     */
    __exports.audio_buffer_full = function() {
        const ret = wasm.audio_buffer_full();
        return ret !== 0;
    };

    /**
     * @param {Uint8Array} dest
     */
    __exports.draw_apu_window = function(dest) {
        var ptr0 = passArray8ToWasm0(dest, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.draw_apu_window(ptr0, len0, dest);
    };

    /**
     * @param {number} buffer_size
     */
    __exports.set_audio_buffersize = function(buffer_size) {
        wasm.set_audio_buffersize(buffer_size);
    };

    /**
     * @returns {Uint8Array}
     */
    __exports.get_sram = function() {
        const ret = wasm.get_sram();
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    };

    __exports.run_until_vblank = function() {
        wasm.run_until_vblank();
    };

    /**
     * @param {number} sample_rate
     */
    __exports.set_audio_samplerate = function(sample_rate) {
        wasm.set_audio_samplerate(sample_rate);
    };

    /**
     * @param {Uint8Array} dest
     */
    __exports.draw_piano_roll_window = function(dest) {
        var ptr0 = passArray8ToWasm0(dest, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.draw_piano_roll_window(ptr0, len0, dest);
    };

    /**
     * @param {Uint8Array} cart_data
     */
    __exports.load_rom = function(cart_data) {
        const ptr0 = passArray8ToWasm0(cart_data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.load_rom(ptr0, len0);
    };

    let cachedInt16ArrayMemory0 = null;

    function getInt16ArrayMemory0() {
        if (cachedInt16ArrayMemory0 === null || cachedInt16ArrayMemory0.byteLength === 0) {
            cachedInt16ArrayMemory0 = new Int16Array(wasm.memory.buffer);
        }
        return cachedInt16ArrayMemory0;
    }

    function getArrayI16FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getInt16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
    }
    /**
     * @returns {Int16Array}
     */
    __exports.get_audio_buffer = function() {
        const ret = wasm.get_audio_buffer();
        var v1 = getArrayI16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    };

    /**
     * @param {number} mx
     * @param {number} my
     */
    __exports.piano_roll_window_click = function(mx, my) {
        wasm.piano_roll_window_click(mx, my);
    };

    /**
     * @returns {Int16Array}
     */
    __exports.consume_audio_samples = function() {
        const ret = wasm.consume_audio_samples();
        var v1 = getArrayI16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    };

    const EXPECTED_RESPONSE_TYPES = new Set(['basic', 'cors', 'default']);

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);

                } catch (e) {
                    const validResponse = module.ok && EXPECTED_RESPONSE_TYPES.has(module.type);

                    if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else {
                        throw e;
                    }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);

        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };

            } else {
                return instance;
            }
        }
    }

    function __wbg_get_imports() {
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbg___wbindgen_copy_to_typed_array_33fbd71146904370 = function(arg0, arg1, arg2) {
            new Uint8Array(arg2.buffer, arg2.byteOffset, arg2.byteLength).set(getArrayU8FromWasm0(arg0, arg1));
        };
        imports.wbg.__wbindgen_init_externref_table = function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
            ;
        };

        return imports;
    }

    function __wbg_finalize_init(instance, module) {
        wasm = instance.exports;
        __wbg_init.__wbindgen_wasm_module = module;
        cachedInt16ArrayMemory0 = null;
        cachedUint8ArrayMemory0 = null;


        wasm.__wbindgen_start();
        return wasm;
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;


        if (typeof module !== 'undefined') {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports();

        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }

        const instance = new WebAssembly.Instance(module, imports);

        return __wbg_finalize_init(instance, module);
    }

    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;


        if (typeof module_or_path !== 'undefined') {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }

        if (typeof module_or_path === 'undefined' && typeof script_src !== 'undefined') {
            module_or_path = script_src.replace(/\.js$/, '_bg.wasm');
        }
        const imports = __wbg_get_imports();

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module);
    }

    wasm_bindgen = Object.assign(__wbg_init, { initSync }, __exports);

})();
