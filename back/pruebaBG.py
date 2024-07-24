from pymongo import MongoClient
import bson

conn = MongoClient('mongodb+srv://dpisubuselo:dpimongo@clusterdpi.fyfnnlv.mongodb.net/?retryWrites=true&w=majority&appName=Clusterdpi')
db = conn['pruebaBg']
name_colection = 'Escuelas'
colection = db[name_colection]

nombreEscuela= "Escuela 1"
centro= "Centro 1"
radio= "Radio 1"
sector= "Sector 1"
departamento= "Departamento 1"

escuelas = {
    'nombreEscuela': nombreEscuela,
    'centro': centro,
    'radio': radio,
    'sector': sector,
    'departamento': departamento,
    }
findEscuelas = colection.find_one(escuelas)
if findEscuelas:
	print('existe la escuela')
else:
	print('No existe la escuela')
	colection.insert_one(escuelas)

month = "Abril"
year = 2025

planillas = {
    'month': month,
    'year': year,
	'planilla_mensual': []
    }

criterioBusquedaEscuela = {'nombreEscuela': nombreEscuela, 'centro': centro, 'radio': radio, 'sector': sector, 'departamento': departamento}

findPlanillas = colection.find_one({'planillas': {'$elemMatch': {'month': month, 'year': year}}})

if findPlanillas:
	print('existe las planillas')
# 	colection.update_one(
#     {"_id": bson.ObjectId("669fc1fe8fee01f51bfdea44")},
#     {"$set": {"planillas.0.month": month, "planillas.0.year": year}}
# )
	# colection.update_one( criterioBusquedaEscuela, { "$set": { "planillas.month": month, "planillas.year":year}} )
else:
	print('No existe las planillas')
	colection.update_one( criterioBusquedaEscuela, { "$push": { "planillas": planillas}} )

planillaMensual = { 
		"nombre": "Pedro",
		"apellido": "Perezz",
		"cargoHsCatedras": "Profesor",
		"padron": "123456",
		"espacio_curricular": "Matematica",
		"fecha_nacio": "1980/01/01",
		"cuil": "20-12345678-5",
		"alta": "2021/01/01",
		"baja": "2021/12/31",
		"dias_oblig_descontar": "10",
		"causal_reemplazo": "Licencia",
		"lic_con_goce_haberes": {
			"desde": "2021/02/01",
			"hasta": "2021/02/28"
		},
		"lic_sin_goce_haberes": {
			"desde": "2021/03/01",
			"hasta": "2021/03/31"
		},
		"baja_salario": "2021/04/01",
		"observacion": "Licencia por enfermedad"
	}

criterioBusquedaDeMonthYear = {'nombreEscuela': nombreEscuela, 'centro': centro, 'radio': radio, 'sector': sector, 'departamento': departamento, 'planillas': {'$elemMatch': {'month': month, 'year': year}}}

findPlanillasMensuales = colection.find_one({'nombreEscuela': nombreEscuela, 'centro': centro, 'radio': radio, 'sector': sector, 'departamento': departamento,'planillas': {'$elemMatch': {'month': month, 'year': year, 'planilla_mensual': {'$elemMatch': {'nombre': "Juan"}}}}})
if findPlanillasMensuales:
	print('existe la planilla mensual')
	colection.update_one( criterioBusquedaDeMonthYear, { "$set": { "planillas.$.planilla_mensual": planillaMensual}} )
else:
	print('No existe la planilla mensual')
	colection.update_one( criterioBusquedaDeMonthYear, { "$push": { "planillas.$.planilla_mensual": planillaMensual}} )


datos = colection.find({})

for dato in datos:
    print(dato)