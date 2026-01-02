from sqlalchemy import Column, String, Text
from .database import Base

class Artwork(Base):
    __tablename__ = "artworks"

    id = Column(String, primary_key=True)
    name = Column(String)
    slug = Column(String, unique=True)
    meaning = Column(Text)
    image_url = Column(String)
    sound_url = Column(String)
