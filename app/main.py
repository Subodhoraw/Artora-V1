from fastapi import FastAPI
app = FastAPI()

@app.get("/")

def home():
    return{"message": "Artora backend is running"}