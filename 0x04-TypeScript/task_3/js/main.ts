/// <reference path="./crud.d.ts"/>

import { rowID, rowElement } from './interface.ts';
import * as crud from './crud.js';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
}

const newRowID: RowID = crud.insertRow(row);

const updatedRow: RowElement = {...row, age: 23};

crud.updateRow(newRowID, updateedRow);
crud.deleteRow(newRowID);
