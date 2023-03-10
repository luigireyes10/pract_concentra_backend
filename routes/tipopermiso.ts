import { Router } from 'express';
import { getOneTipoPermiso, getTipoPermiso, postTipoPermiso, putTipoPermiso, deleteTipoPermiso } from '../controllers/tipopermiso';


const routerTipoPermisos: Router = Router();

routerTipoPermisos.post('/',      getTipoPermiso );
routerTipoPermisos.post('/onepermiso',      getOneTipoPermiso );
routerTipoPermisos.put('tipopermiso/:id',    putTipoPermiso );
routerTipoPermisos.delete('tipopermiso/:id', deleteTipoPermiso );



export default routerTipoPermisos;