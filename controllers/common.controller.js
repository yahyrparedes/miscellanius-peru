const commonRepository = require('./../repositories/common.repository')
const responseResult = require('../utils/response.util');
const httpStatusCodes = require('http-status-codes');
const {url} = require('../utils/constant')

const CommonController = {

    async reniec(req, res, next) {
        const {dni} = req.params

        if (dni.length > 8 || dni.length < 8)
            return responseResult.error(res, httpStatusCodes.BAD_REQUEST,
                'Bad request, check the data sent');

        try {
            let response = await commonRepository.getEndpoint(url.reniec, dni)
            let data = {
                name: response.nombres,
                fatherName: response.apellido_paterno,
                motherName: response.apellido_materno,
                cui: response.cui,
                dni: response.dni
            }

            return responseResult.general(res, httpStatusCodes.OK, data);
        } catch (e) {
            return responseResult.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR,
                'Internal server error, we are unable to process your request at this time', e);
        }
    },

    async sunat(req, res, next) {
        const {ruc} = req.params

        if (ruc.length > 11 || ruc.length < 11)
            return responseResult.error(res, httpStatusCodes.BAD_REQUEST,
                'Bad request, check the data sent');
        try {
            const response = await commonRepository.getEndpoint(url.sunat, ruc)
            let data = {
                ruc: response.ruc,
                razonSocial: response.razon_social,
                condicion: response.condicion,
                estado: response.estado,
                nombreComercial: response.nombre_comercial,
                tipo: response.tipo,
                fechaInscripcion: response.fecha_inscripcion,
                direccion: response.direccion,
                sistemaEmision: response.sistema_emision,
                actividadExterior: response.actividad_exterior,
                sistemaContabilidad: response.sistema_contabilidad,
                emisionElectronica: response.emision_electronica,
                comprobantes: response.comprobantes,
                fechaInscripcionPle: response.fecha_inscripcion_ple,
                fechaActividad: response.fecha_actividad,
                fechaBaja: response.fecha_baja,
                sucursales: response.sucursales,
                representantesLegales: response.representantes_legales,
                empleados: response.empleados
            }
            return responseResult.general(res, httpStatusCodes.OK, data);
        } catch (e) {
            return responseResult.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR,
                'Internal server error, we are unable to process your request at this time', e);
        }
    },

}

module.exports = CommonController;
