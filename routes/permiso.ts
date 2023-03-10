import { Router } from 'express';
import { getOnePermiso, getPermisos, postPermiso, putPermiso, deletePermiso } from '../controllers/permiso';


const routerPermisos: Router = Router();


routerPermisos.get('/',       getPermisos );
routerPermisos.get('/:id',    getOnePermiso );
routerPermisos.post('/',      postPermiso );
routerPermisos.put('/:id',    putPermiso );
routerPermisos.delete('/:id', deletePermiso );



export default routerPermisos;