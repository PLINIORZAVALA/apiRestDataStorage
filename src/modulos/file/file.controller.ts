import { Controller, Get, Param } from '@nestjs/common';
import {FileService} from './file.service';
@Controller('file')
export class FileController {

    //Contructor para hallar los datos del service
    constructor(private readonly fileService: FileService) {}

    //Método para obtener los valores del servicio
    @Get()
    findAll() {
    return this.fileService.findAll();
    }
    
    //Obtener los datos mediante el ID
    @Get(':id')
    findOne(@Param('id') IdUser: number) {
      return this.fileService.findOne(IdUser);
    }
}
