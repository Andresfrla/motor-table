import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { calculoMotor } from '@/utils/motor';


function createData(
  tipoDeNomina,
  fechaPrimerEmpleo,
  genero,
  montoMinimo,
  montoMaximo,
  lineaOptima
) {
  return { tipoDeNomina, fechaPrimerEmpleo, genero, montoMinimo, montoMaximo, lineaOptima };
}

export default function TableResult() {
  // Ejecuta las funciones de motor.js con los datos proporcionados
  const resultado1 = calculoMotor('A', new Date('2022-06-12'), 'f');
  const resultado2 = calculoMotor('B', new Date('1993-12-30'), 'f');
  const resultado3 = calculoMotor('C', new Date('2020-09-19'), 'm');
  const resultado4 = calculoMotor('D', new Date('2019-01-15'), 'm');

  // Crea las filas de datos para la tabla
  const rows = [
    createData('A', '12/06/2022', 'f', resultado1.montoMinimo, resultado1.montoMaximo, resultado1.recomendacionLinea),
    createData('B', '30/12/1993', 'f', resultado2.montoMinimo, resultado2.montoMaximo, resultado2.recomendacionLinea),
    createData('C', '19/09/2020', 'm', resultado3.montoMinimo, resultado3.montoMaximo, resultado3.recomendacionLinea),
    createData('D', '15/01/2019', 'm', resultado4.montoMinimo, resultado4.montoMaximo, resultado4.recomendacionLinea),
  ];

  return (
    <TableContainer component={Paper} className='rounded-xl'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='text-center'>
          <TableRow className='bg-black'>
            <TableCell className='text-white text-center'>Tipo de Nomina </TableCell>
            <TableCell className='text-white text-center' align="right">Fecha desde el primer empleo</TableCell>
            <TableCell className='text-white text-center' align="right">Género</TableCell>
            <TableCell className='text-white text-center' align="right">Monto Mínimo de Crédito</TableCell>
            <TableCell className='text-white text-center' align="right">Monto Máximo de Crédito</TableCell>
            <TableCell className='text-white text-center' align="right">Línea Óptima de Crédito</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.tipoDeNomina}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='bg-zinc-400/80'
            >
              <TableCell component="th" scope="row">
                {row.tipoDeNomina}
              </TableCell>
              <TableCell align="right" className='text-center'>{row.fechaPrimerEmpleo}</TableCell>
              <TableCell align="right" className='text-center'>{row.genero}</TableCell>
              <TableCell align="right" className='text-center'>{row.montoMinimo}</TableCell>
              <TableCell align="right" className='text-center'>{row.montoMaximo}</TableCell>
              <TableCell align="right" className='text-center'>{row.lineaOptima.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
