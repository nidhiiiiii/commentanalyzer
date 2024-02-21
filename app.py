##LESSGO FASTAPI
from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from fastapi.responses import  StreamingResponse
from ws3 import scrape_and_analyze_comments
import io
import csv
from pydantic import BaseModel


app = FastAPI()
templates = Jinja2Templates(directory="templates")
origins = ["http://localhost:3000", "localhost:3000"]

@app.get("/")
async def root():
    return {"message": "Hello World"}


# @app.get("/api/{name}")
# async def root(name: str):
#     return {"message": "Hello " + name}


comment_db = {}
class CommentModel(BaseModel):
    url: str
    download: bool


# @app.get("/api/result")
# def get_result():
#     return comment_db


# @app.post("/item")
# def create(item: CommentModel):
#     comment_db[item.url] = item.download
#     return {"item": item}

result_db = {}
class ResultModel(BaseModel):
    comment: str
    sentiment: str

@app.post("/api/analyze")
def analyze_comment(item: CommentModel):
    result_db[item.url] = scrape_and_analyze_comments(item.url)
    if item.download:
        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow(["Comment", "Sentiment"])
        for comment, sentiment in result_db[item.url].items():
            writer.writerow([comment, sentiment])
        output.seek(0)
        return StreamingResponse(
            iter([output.getvalue()]),
            media_type="text/csv",
            headers={
                "Content-Disposition": "attachment; filename=analysis_results.csv"
            },
        )
    else:
        return {"result": result_db[item.url]}

