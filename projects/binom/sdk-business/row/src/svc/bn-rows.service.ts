import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BnRowsService {

  constructor() { }

  validateEmail(email:string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  addRow(row:any,rowArr:any[]){
    if(rowArr.findIndex((obj:any) => obj.id === row.id) === -1)
      rowArr.push(this.createStoreObject(row));
  }

  removeRow(row:any,rowArr:any[]){
    return rowArr.filter((obj:any) => obj.id !== row.id);
  }

  createError(msgStart:string, msgMiddle:string='', msgEnd:string=''){
    return { msgStart:'validate.'+msgStart, msgMiddle: msgMiddle, msgEnd: msgEnd }
  }

  validateRow(row:any,columns:any){
    if(!row.errors) row.errors = {}
    row.error = true;
    Object.keys(row).forEach((key:any) => {
      if(key !== undefined){
        
        let index = columns.findIndex((obj:any) => obj.name === key);
        if(index !== -1){
          row.errors[key] = false;
          if(columns[index].config.validate){
            Object.keys(columns[index].config.validate).forEach((validate:any) => {

              if(row[key]){
                if(validate === 'min' && row[key].length < columns[index].config.validate[validate]){
                  row.errors[key] = this.createError(validate,columns[index].config.validate[validate],'validate.chars')
                }
                if(validate === 'max' && row[key].length > columns[index].config.validate[validate]){
                  row.errors[key] =  this.createError(validate,columns[index].config.validate[validate],'validate.chars')
                }
              }

              if(validate === 'noSpecialChars'){
                if(columns[index].config.validate.noSpecialChars.test(row[key]))
                  row.errors[key] =  this.createError(validate,
                    columns[index].config.validate.specialChars.repalce(/\/[gmi]{0,3}/gmi,'').replace(/\//gmi,''),
                    'validate.notAllowed');
              }
              if(validate === 'email' && !this.validateEmail(row[key])){
                row.errors[key] =  this.createError(validate)
              }
              if(validate === 'number' && row[key].isNaN()){
                row.errors[key] =  this.createError(validate)
              }
              if(validate === 'date' && Date.parse(row[key]).toString() == 'NaN'){
                row.errors[key] =  this.createError(validate)
              }
              if(validate === 'notEmpty' && row[key].trim() === ''){
                row.errors[key] =  this.createError(validate)
              }
              if(validate === 'startWith' && row[key].left(0,columns[index].config.validate.length) !== columns[index].config.validate.mustStartWith){
                row.errors[key] =  this.createError(validate)
              }
              if(validate === 'noNumbers' && (/[0-9]/gmi).test(row[key])){
                row.errors[key] =  this.createError(validate)
              }
              if(validate === 'mustContain' && columns[index].config.validate.mustContain.test(row[key])){
                row.errors[key] =  this.createError(validate, columns[index].config.validate.mustContain.repalce(/\/[gmi]{0,3}/gmi,'').replace(/\//gmi,''))
              }

            });
          }
        }
      }

    });
    let valid = false;
    //console.log(row.errors)
    if(JSON.stringify({}) === JSON.stringify(row.errors)){
      row.error = false;
      valid = true;
    }
    return valid
  }

  validateRows(useData:any, columns:any){
    let valid = false;
    for(let i = 0; i < useData.length; i++){
      valid = this.validateRow(useData[i], columns)
    }
    return valid
  }

  createStoreObject(row:any){
    return Object.assign({}, { id:row.id, row:JSON.stringify(row)})
  }

  createBulkEditObject(obj:any,columns:any){
    let row:any = {}
    Object.keys(JSON.parse(obj.row)).forEach((key:any) => {
      let index = columns.findIndex((obj:any) => obj.name === key);
      if(index !== -1){
        let rowConf = columns[index];
        if(rowConf.bulkEditable){
          row.use = {}
          if(rowConf.type === 'basic'){
            if(rowConf.config.type === 'string' || rowConf.config.type === 'text'
               || rowConf.config.type === 'number' || rowConf.config.type === 'date'
               || rowConf.config.type === 'id' || rowConf.config.type === 'uuid')
              row[key] = ''
            if(rowConf.config.type === 'boolean')
              row[key] = false
          }
          if(rowConf.type === 'switch')
            row[key] = false
          if(rowConf.type === 'tags' || rowConf.type === 'loop' || rowConf.type === 'iconloop'){
            row[key] = []
          }
          if(rowConf.type === 'select'){
            if(rowConf.config.type  === 'multiple'){
              row[key] = []
            }
            if(rowConf.config.type  === 'single'){
              row[key] = ''
            }
          }
        }
      }
    });
    row.edit = true
    return row
  }

  setSelectListValues(colList:any[], names:string[], list:any[]){
    for (let c=0; c <colList.length; c++){
      for (let i = 0; i< names.length;i++){
        if(colList[c].name == names[i]) {
          colList[c].config.selectList = list
        }
      }
    }
    return colList;
  }

  restoreValues(row:any,editRows:any[],displayedColumns:string[]){

    let old = editRows.find( (obj:any) => obj.id === row.id );

    if(editRows.length > 0 && old)
    for(let j=0;j < displayedColumns.length; j++){
      row[displayedColumns[j]] = JSON.parse(old.row)[displayedColumns[j]];
    }
    editRows = this.removeRow(row,editRows)
    row.errors = {};
    row.error = false;
    return editRows
  }

  restoreValuesFromRow(row:any,editRows:any[]){

    let old = editRows.find( (obj:any) => obj.id === row.id );
    let oldParsed = JSON.parse(old.row);

    if(editRows.length > 0 && old)
    Object.keys(row).forEach((key:string) => {
      if(row[key] && key !== 'edit'){
        row[key] = oldParsed[key]
      }
    });
    editRows = this.removeRow(row,editRows)
    row.errors = {};
    row.error = false;
    return editRows
  }


  restoreObject(row:any,editRows:any[]){
    let old = editRows.find( (obj:any) => obj.id === row.id );
    editRows = this.removeRow(row,editRows)
    let item = JSON.parse(old.row);
    Object.keys(item).forEach((key:any) => {
      row[key] = item[key];
    });
    return editRows
  }

  saveBulkEdit(useData:any, selectedRows:any, rowValues:any, config:any){
    for(let i = 0; i < selectedRows.length; i++){
      if(Array.isArray(useData)){
        let index = useData.findIndex( (obj:any) => obj.id === selectedRows[i].id );
        if(index !== -1){
          if(rowValues.use !== undefined ){
            Object.keys(rowValues.use).forEach((key:any) => {
              if(key !== 'edit' &&  key !== 'error' && key !== 'errors')
                useData[index][key] = rowValues[key]
            });
            selectedRows[i].row = JSON.stringify(useData[index])
          }

        }
      }

    }
    for(let i = 0; i < useData.length; i++){
      if(useData[i].selected == true){
        useData[i].selected = false;
        useData[i].state = 'editedself'
        useData[i].stateMsg = 'editedself'
      }

      selectedRows = this.removeRow(useData[i],selectedRows);

    }
    config.bulkMode = '';
    config.bulkEditForm = false;
  }

  setRowState(row:any){

  }

  unsetRowState(row:any){

  }

  editAllMode(useData:any, data:string, config:any, editRows:any[]) {

    let rowEdit = false;
    if(data === 'editAll'){
      rowEdit = true;
    }
    for(let i = 0; i < useData.length; i++){
      rowEdit? editRows.push(this.createStoreObject(useData[i])) :editRows = this.restoreValues(useData[i],editRows,config.displayedColumns);
      useData[i].edit = rowEdit;
    }
    return editRows
  }

  selectDeselectAllSimple(useData:any,selectedRows:any, asRef:boolean = false){

    for(let i = 0; i < useData.length; i++){
      //if(useData[i].selected)console.log(JSON.stringify(useData[i]))
      if(!asRef){
        if(useData[i].selected && !useData[i].disableSelect) this.addRow(useData[i],selectedRows)
        else selectedRows = this.removeRow(useData[i],selectedRows)
      }
      else {
        if(useData[i].selected ) {
          if(selectedRows.findIndex((obj:any) => obj.id === useData[i].id) === -1)
            selectedRows.push(useData[i])
        }
        else selectedRows = selectedRows.filter((obj:any) => obj.id !== useData[i].id);
      }


    }

    //console.log('selectDeselectAllSimple',useData,selectedRows, asRef)
    return selectedRows
  }

  selectDeselectAll(useData:any, data:string, config:any, selectedRows:any, bulkMode:string){
    let selected = false;
    selectedRows = [];
    if(data === 'selectAll' ){
      selected = true;
    } else {
      bulkMode = '';
    }
    for(let i = 0; i < useData.length; i++){
      useData[i].selected = useData[i].disableSelect? false: selected;
      if(selected) this.addRow(useData[i],selectedRows)
      else selectedRows = this.removeRow(useData[i],selectedRows)
    }
    return selectedRows
  }



}
