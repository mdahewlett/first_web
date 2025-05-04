from fastapi import APIRouter, Request
from pydantic import BaseModel

router = APIRouter(prefix="/name")

class NameIn(BaseModel):
    name: str

@router.get("/")
async def get_name():
    return {"name": "Michael Hewlett"}