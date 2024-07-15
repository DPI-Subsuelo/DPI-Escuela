import json
from bson.objectid import ObjectId
# ----------------------------------------------------
from models.usuarios import usuario
# -----------------------------------------------------
from config.motor_DB_escuelas import database

coleccion = database.usuarios


async def get_usuarios() -> list[usuario]:
    usrs = []
    cursor = coleccion.find()
    async for document in cursor:
        document["_id"] = str(document["_id"])
        usrs.append(document)
    return usrs



