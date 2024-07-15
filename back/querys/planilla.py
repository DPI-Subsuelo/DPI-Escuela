import json
from bson.objectid import ObjectId
# ----------------------------------------------------
from models.planilla import PlanillaMensual
# -----------------------------------------------------
from config.motor_DB_escuelas import database

coleccion = database.planillaMensual


async def get_planillasMensuales() -> list[PlanillaMensual]:
    usrs = []
    cursor = coleccion.find()
    async for document in cursor:
        document["_id"] = str(document["_id"])
        usrs.append(document)
    print('QUERY: ', usrs)
    return usrs


async def put_planillaMensual(docente: PlanillaMensual):
    objecto = docente
    filtro = {"_id": ObjectId(docente['id'])}
    docente.pop('id')
    set = {"$set": docente}
    coleccion.update_one(filtro, set)
    return 'ok'
