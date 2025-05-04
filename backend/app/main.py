import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import name
from dotenv import load_dotenv

load_dotenv()

frontend_origin = os.getenv("FRONTEND_ORIGIN", "*")
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(name.router)
