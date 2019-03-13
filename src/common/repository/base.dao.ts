/**
 * 基类 DAO
 * Created by lizizhen on 2018/7/10.
 * Update: 2018-07-10 15:55
 * get
 * listAll
 * save
 * update
 * delete
 */

import mongoose = require('mongoose');
import { autobind } from 'core-decorators';
import IDao from './base.dao.imp';

export enum method {
    FINDBYID = 'findById',
    FINDALL = 'findAll',
    CREATE = 'create',
    DELETE = 'delete',
    UPDATEBYID = 'updateById'
}

export default class BaseDao<T extends mongoose.Document> implements IDao<T> {
    public _model: mongoose.Model<T>;

    constructor(schemaModel: mongoose.Model<T>) {
        this._model = schemaModel;
    }

    @autobind
    async create(item: T) {
        return await this._model.create(item);
    }

    @autobind
    async findAll() {
        return await this._model.find({});
    }

    @autobind
    async updateById(_id: string, item: T) {
        return await this._model.update({ _id: this.toObjectId(_id) }, item);
    }

    async delete(_id: string) {
        return await this._model.remove({ _id: this.toObjectId(_id) });
    }

    @autobind
    async findById(_id: string) {
        return await this._model.findById(_id);
    }

    @autobind
    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
