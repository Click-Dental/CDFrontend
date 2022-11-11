import { ArrayType } from "@angular/compiler";

export class Paciente{
    _id?: number;
    nhc: string;
    codigo: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    nombres: string;
    edad: number;
    sexo: string;
    lugarNacimiento: string;
    fechaNacimiento: string;
    ocupacion: string;
    direccion: string;
    celular: string;
    //
    antecedentesPatologicosFamiliares: string;
    antecedentesPatologicosPersonales: string[];
    atm: string;
    ganglioslinfaticos: string;
    respirador: string[];
    otrosExamenExtraOral: string;
    labios: string;
    lengua: string;
    paladar: string;
    pisoDeLaBoca: string;
    mucosaYugal: string;
    encias: string;
    fechaUltimaVisita: Date;
    habitos: string[];
    protesis: string;
    //
    cepillo: string;
    hilo: string;
    enjuague: string;
    frecuenciaCepillado: string;
    sangreEncias: string;
    higieneDental: string[];
    problemaTratamiento: string;
    //
    observaciones: string;
    motivoConsulta: string;
    examenClinico: string;
    diagnostico: string;


    constructor(nhc: string, codigo: string, apellidoPaterno: string, apellidoMaterno: string,
        nombres: string,
        edad: number,
        sexo: string,
        lugarNacimiento: string,
        fechaNacimiento: string,
        ocupacion: string,
        direccion: string,
        celular: string,
        fechaCreacion: Date,
        antecedentesPatologicosFamiliares: string,
        antecedentesPatologicosPersonales: string[],
        atm: string,
        ganglioslinfaticos: string,
        respirador: string[],
        otrosExamenExtraOral: string,
        labios: string,
        lengua: string,
        paladar: string,
        pisoDeLaBoca: string,
        mucosaYugal: string,
        encias: string,
        fechaUltimaVisita: Date,
        habitos: string[],
        protesis: string,
        cepillo: string,
        hilo: string,
        enjuague: string,
        frecuenciaCepillado: string,
        sangreEncias: string,
        higieneDental: string[],
        problemaTratamiento: string,
        observaciones: string,
        motivoConsulta: string,
        examenClinico: string,
        diagnostico: string,
        )
    {
        this.nhc = nhc;
        this.codigo = codigo;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.nombres = nombres;
        this.edad = edad;
        this.sexo = sexo;
        this.lugarNacimiento = lugarNacimiento;
        this.fechaNacimiento = fechaNacimiento;
        this.ocupacion = ocupacion;
        this.direccion = direccion;
        this.celular = celular;
        this.antecedentesPatologicosFamiliares = antecedentesPatologicosFamiliares;
        this.antecedentesPatologicosPersonales = antecedentesPatologicosPersonales;
        this.atm = atm;
        this.ganglioslinfaticos = ganglioslinfaticos;
        this.respirador = respirador;
        this.otrosExamenExtraOral = otrosExamenExtraOral;
        this.labios = labios;
        this.lengua = lengua;
        this.paladar = paladar;
        this.pisoDeLaBoca = pisoDeLaBoca;
        this.mucosaYugal = mucosaYugal;
        this.encias = encias;
        this.fechaUltimaVisita = fechaUltimaVisita;
        this.habitos = habitos;
        this.protesis = protesis;
        this.cepillo = cepillo;
        this.hilo = hilo;
        this.enjuague = enjuague;
        this.frecuenciaCepillado = frecuenciaCepillado;
        this.sangreEncias = sangreEncias;
        this.higieneDental = higieneDental;
        this.problemaTratamiento = problemaTratamiento;
        this.observaciones = observaciones;
        this.motivoConsulta = motivoConsulta;
        this.examenClinico = examenClinico;
        this.diagnostico = diagnostico;

    }
}