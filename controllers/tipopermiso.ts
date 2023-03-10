import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import TipoPermiso from '../entity/tipopermiso';


export const getTipoPermiso = async( req: Request , res: Response ) => {

    const usuarios = await TipoPermiso.findAll();

   return res.json({ usuarios });
}

export const getOneTipoPermiso = async( req: Request , res: Response ) => {

    const { ID_PERMISO: id } = req.body;

    const usuario = await TipoPermiso.findByPk( id );


    if( usuario ) {

      return  res.json({usuario});
    } else {
        res.status(404).json({
            msg: `No existe un permiso con el id ${ id }`
        });
    }


}

export const postTipoPermiso = async( req: Request , res: Response ) => {


    const { body } = req;

    try {
        
        const existeEmail = await TipoPermiso.findOne({
            where: {
                email: body.ID_PERMISO
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un permiso con el id ' + body.ID_PERMISO
            });
        }


        const usuario = new TipoPermiso(body);
        await usuario.save();

        res.json( usuario );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }



}

export const putTipoPermiso = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const usuario = await TipoPermiso.findByPk( id );
        if ( !usuario ) {
            return res.status(404).json({
                msg: 'No existe un permiso con el id ' + id
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


export const deleteTipoPermiso = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const usuario = await TipoPermiso.findByPk( id );
    if ( !usuario ) {
        return res.status(404).json({
            msg: 'No existe un permiso con el id ' + id
        });
    }

    await usuario.update({ estado: false });


    res.json(usuario);
}

