from fastapi import FastAPI
from backend.database import engine
from backend.models import Base
app = FastAPI()
Base.metadata.create_all(bind=engine)


@app.get("/")

def home():
    return{"message": "Artora backend is running"}