from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.planilla import planillas
from routers.usuarios import usuarios
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(planillas)
app.include_router(usuarios)