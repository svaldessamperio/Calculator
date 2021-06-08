export interface rowParameters {
    buttons: buttonParameters[];
}

export interface buttonParameters {
    label: string;
    type: number;
    accion: (numero?:string)=>void;
}