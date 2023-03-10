import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Permiso from '../entity/permiso';


export const getPermisos = async( req: Request , res: Response ) => {

    const usuarios = await Permiso.findAll();

    res.json({ usuarios });
}

export const getOnePermiso = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const usuario = await Permiso.findByPk( id );

    if( usuario ) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${ id }`
        });
    }


}

export const postPermiso = async( req: Request , res: Response ) => {

    const { body } = req;

    try {
        
        const existeEmail = await Permiso.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un permiso con el ' + body.email
            });
        }


        const usuario = new Permiso(body);
        await usuario.save();

        res.json( usuario );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }



}

export const putPermiso = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const usuario = await Permiso.findByPk( id );
        if ( !usuario ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        await usuario.update( body );

        res.json( usuario );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}


export const deletePermiso = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const usuario = await Permiso.findByPk( id );
    if ( !usuario ) {
        return res.status(404).json({
            msg: 'No existe un permiso con el id ' + id
        });
    }

    await usuario.update({ estado: false });

    res.json(usuario);
}

