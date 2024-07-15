from fastapi import APIRouter
# ----------------------------------------------------
from models.usuarios import usuario
from schemas.usuario import usuariosSh
# ----------------------------------------------------
from querys.usuario import get_usuarios
usuarios= APIRouter()

@usuarios.get('/usuarios/', response_model=list[usuario])
async def get_todos_usuarios():
    items = await get_usuarios()
    datos = usuariosSh(items)
    return datos


