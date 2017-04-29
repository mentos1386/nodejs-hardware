/// <reference types="node" />
import { EventEmitter } from 'events';
import { ReadStream } from 'tty';
declare class GPS extends EventEmitter {
    path: string;
    read: ReadStream;
    constructor(device: string);
    private processData(data);
}
export { GPS };
