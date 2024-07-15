def PlanillaMensualSh(item) -> dict:
    return { 
    "id":str(item["_id"]),
    "nombre": item["nombre"],
    "apellido": item["apellido"],
    "cargoHsCatedras": item["cargoHsCatedras"],
    "padron": item['padron'],
    "espacio_curricular": item['espacio_curricular'],
    "fecha_nacio": item['fecha_nacio'],
    "cuil": item['cuil'],
    "alta": item['alta'],
    "baja":item['baja'],
    "dias_oblig_descontar":item['dias_oblig_descontar'],
    "causal_reemplazo": item["causal_reemplazo"],
    "lic_con_goce_haberes": item["lic_con_goce_haberes"],
    "lic_sin_goce_haberes": item["lic_sin_goce_haberes"],
    "baja_salario": item["baja_salario"],
    "observacion": item["observacion"],
    }

def PlanillasMensualesSh(items) -> list:
    return [PlanillaMensualSh(item) for item in items] 
