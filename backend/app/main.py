from fastapi import FastAPI
from app.routes import name

app = FastAPI()

app.include_router(name.router)
