/// <reference types="node" />
import { EventEmitter } from 'events';
import { Readable } from 'stream';
declare class GPS extends EventEmitter {
    device: Readable;
    constructor(device: string);
    processData(buffer: Buffer): void;
    processError(buffer: Buffer): void;
}
export { GPS };
