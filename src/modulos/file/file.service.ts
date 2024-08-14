import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {File} from 'src/entity/file.entity';

@Injectable()
export class FileService {
    
    //Obtenemos los datos mediante el constructor
    constructor(
        @InjectRepository(File)
        private FileRepository: Repository<File>,
      ) {}

      //Obtemos todos los datos del arreglo
      findAll(): Promise<File[]> {
        return this.FileRepository.find();
      }

    //Obtenemos los datos mediante el ID   
    findOne(id: number): Promise<File> {
        return this.FileRepository.findOne({ where: { id } });
    }
}
