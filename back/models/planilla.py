from bson import ObjectId
from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List

class LicenciaConGoce(BaseModel):
    desde: Optional[datetime] = None
    hasta: Optional[datetime] = None

class LicenciaSinGoce(BaseModel):
    desde: Optional[datetime] = None
    hasta: Optional[datetime] = None

class PlanillaMensual(BaseModel):
    id: Optional[str]
    nombre: Optional[str] = None
    apellido: Optional[str] = None
    cargoHsCatedras: Optional[str] = None
    padron: Optional[str] = None
    espacio_curricular: Optional[str] = None
    fecha_nacio: Optional[datetime] = None
    cuil: Optional[str] = None
    alta: Optional[datetime] = None
    baja: Optional[datetime] = None
    dias_oblig_descontar: Optional[str] = None
    causal_reemplazo: Optional[str] = None
    lic_con_goce_haberes: Optional[LicenciaConGoce] = None
    lic_sin_goce_haberes: Optional[LicenciaSinGoce] = None
    baja_salario: Optional[str] = None
    observacion: Optional[str] = None


