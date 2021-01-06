# MISCELLANEOUS API

- Consulta RUC
- Consulta DNI

## Requirements

1. [Node](https://nodejs.org)

## Add custom values

```bash
$ cp .env.develop .env
 ```

- NODE_ENV=development
- PORT=3002

## How to run it?

1. Clone the repository:

```bash
$ git clone https://github.com/yahyrparedes/miscellanius-peru
```

2. Go to the cloned directory:

```bash
$ cd miscellanius-peru
```

3. Run the application:

```bash
$ npm run dev
```

## Where is the application running?

- http://localhost:3002

## What is end point

#### Example Response SUNAT - RUC
 http://localhost:3002/api/common/sunat/00000000000
* Replace 00000000 for value
```json
 {
  "status": 200,
  "results": {
    "ruc": "00000000000",
    "razonSocial": "",
    "condicion": "",
    "estado": "",
    "nombreComercial": "",
    "tipo": "",
    "fechaInscripcion": "",
    "direccion": "",
    "sistemaEmision": "",
    "actividadExterior": "",
    "sistemaContabilidad": "",
    "emisionElectronica": "",
    "comprobantes": "",
    "fechaInscripcionPle": "",
    "fechaActividad": "",
    "fechaBaja": "",
    "sucursales": {
      "0000": {
        "tipo": "",
        "Direccion": "",
        "activida_economica": ""
      }
    },
    "representantesLegales": {
      "DNI:00000000": {
        "nombre": "",
        "cargo": "",
        "desde": ""
      }
    },
    "empleados": {
      "0000-00": {
        "empleados": "",
        "pensionista": "",
        "proveedores": ""
      }
    }
  }
}
```

#### Example Response RENIEC - DNI
http://localhost:3002/api/common/reniec/00000000
* Replace 00000000 for value

```json
{
    "status": 200,
    "results": {
        "name": "",
        "fatherName": "",
        "motherName": "",
        "cui": 0,
        "dni": "00000000"
    }
}
``` 

Author : [@yahyrparedes](https://www.linkedin.com/in/yahyrparedesarteaga/)
