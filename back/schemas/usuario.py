def usuarioSh(item) -> dict:
    return {
        "id": str(item["_id"]),
        "nombre": item['nombre'],
        "apellido": item['apellido'],
        "login": item['login'],
        "clave": item['clave'],
        "puesto": item['puesto'],
        "activo": item['activo']
    }


def usuariosSh(items) -> list:
    return [usuarioSh(item) for item in items]

