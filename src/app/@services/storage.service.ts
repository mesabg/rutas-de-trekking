import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    constructor(public storage: Storage) {}
}