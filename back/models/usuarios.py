from datetime import date
from pydantic import BaseModel
from typing import Optional

class usuario(BaseModel):
    id: Optional[str]
    nombre: str 
    apellido: str
    login: str
    clave: str
    puesto: Optional[str] = None
    activo: bool = True

class activarUsuario(BaseModel):
    id: Optional[str]
    activo: bool