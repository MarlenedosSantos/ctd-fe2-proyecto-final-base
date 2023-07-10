export interface INoticiasNormalizadas {
    id: number;
    titulo: string; 
    imagen: string;
    esPremium: boolean;
    descripcion: string;
    fecha: number | string;
    descripcionCorta?: string;
}


export type PropsModal = {
    showModal: INoticiasNormalizadas | null;
    suscribir: () => void;
    cerrar: () => void;
    
};