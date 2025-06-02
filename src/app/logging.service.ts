import { Injectable } from '@angular/core';

// IMPORTANT NOTE: Services will NOT reach out to ElementInjector because they are not part
// of the DOM. They only have access to the EnvironmentInjector

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message: string) {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`[${timeStamp}]: ${message}`);
  }
}
