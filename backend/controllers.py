import os
from openai import OpenAI
from dotenv import load_dotenv
import pprint
load_dotenv()

XAI_API_KEY = os.getenv("GROK_API_KEY")

client = OpenAI(
    api_key=XAI_API_KEY,
    base_url="https://api.x.ai/v1",
)

def chat_controller():
    completion = client.chat.completions.create(
        model="grok-beta",
        messages=[
            {"role": "system", "content": "You are Grok, a chatbot that has a recent upto date knowledge of current trending topic"},
            {"role": "user", "content": "Generate a viral tweet thread with different personalities and try to use as many trendy keywords as possible. Provide the response in json format for easy parsing"},
        ],
    )
    return (completion.choices[0].message)

print(chat_controller())
