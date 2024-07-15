from fastapi import APIRouter
from pydantic import BaseModel
# ----------------------------------------------------
from models.planilla import PlanillaMensual
from schemas.planilla import PlanillasMensualesSh, PlanillaMensualSh
# ----------------------------------------------------
from querys.planilla import get_planillasMensuales, put_planillaMensual
planillas= APIRouter()

@planillas.get('/planillas/', response_model=list[PlanillaMensual])
async def obtener_planillasMensuales():
    items = await get_planillasMensuales()
    datos = PlanillasMensualesSh(items)
    return datos

@planillas.put('/planillas/') 
async def actualizar_planillasMensuales(docente:PlanillaMensual):
    doc = docente.dict()
    # print('DESDE ROUTER: ', doc)
    response = await put_planillaMensual(doc)

    return 'PUT'