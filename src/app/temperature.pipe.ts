import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "temp"
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number, inputType: "cel" | "fah", outputType?: "cel" | "fah") {
    let val: number;

    if (typeof value === "string") {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;

    if (inputType === "cel" && outputType === "fah") {
      outputTemp = val * (9 / 5) + 32; // From Celsius to Fahrenheit
    } else if (inputType === "fah" && outputType === "cel") {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    let symbol: "°C" | "°F";

    if (!outputType) {
      symbol = inputType === "cel" ? "°C" : "°F";
    } else {
      symbol = outputType === "cel" ? "°C" : "°F";
    }


    return `${outputTemp} ${symbol}`;
  }

}
