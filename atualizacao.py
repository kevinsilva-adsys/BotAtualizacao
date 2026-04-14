import pandas as pd
import schedule
import time
import asyncio
import re
from telegram import Bot

# ===== CONFIGURAÇÕES =====
BOTS = [
    {
        "token": "7560009900:AAFybrI4nhJh9G--BKkij2ubCH-owOtxpTE",
        "chat_id": "5334901770"
    },
    {
        "token": "8322506775:AAExfeXuWxxLoFR7f6qaDGcDQJzDmdC2xsY",
        "chat_id": "7195267585"
    }
]

SHEET_ID = "1D_UVp1gOoAnmUkXumh_4IT6RZ1_gN08OFRQU4ajePMU"
GID = "1837889442"
CSV_URL = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={GID}"

# ===== MARCA D'ÁGUA =====
MARCA_DAGUA = """

<pre>
Bot Feito por:

Kevin L. Silva
Consulting, Analysis and Development in Systems

www.linkedin.com/in/kevinsilva-adsys
kevinsilva.adsys@gmail.com
github.com/kevinsilva-adsys
</pre>
"""

# ===== FUNÇÕES =====
def aplicar_negrito(texto: str) -> str:
    return re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", texto)

async def enviar_para_todos(mensagem):
    for item in BOTS:
        bot = Bot(token=item["token"])
        try:
            await bot.send_message(
                chat_id=item["chat_id"],
                text=mensagem,
                parse_mode="HTML"
            )
            print(f"Mensagem enviada para chat {item['chat_id']}")
        except Exception as e:
            print(f"Erro ao enviar para {item['chat_id']}: {e}")

async def enviar_dados():
    try:
        df = pd.read_csv(
            CSV_URL,
            header=None,
            dtype=str,
            keep_default_na=False
        )

        data_str = df.iloc[0, 0].strip()
        df = df.drop(0).reset_index(drop=True)

        mensagem = f"<b>{data_str}</b>\nAgenda de Atualizações:\n\n"

        for _, linha in df.iterrows():
            linha_formatada = " ".join(
                linha.dropna().astype(str).tolist()
            ).strip()

            if linha_formatada:
                mensagem += aplicar_negrito(linha_formatada) + "\n"

        # ===== AQUI ENTRA A MARCA D'ÁGUA =====
        mensagem_final = mensagem + MARCA_DAGUA

        await enviar_para_todos(mensagem_final)

    except Exception as e:
        print("Erro ao enviar mensagem:", e)

# ===== EVENT LOOP =====
loop = asyncio.new_event_loop()
asyncio.set_event_loop(loop)

def tarefa():
    loop.create_task(enviar_dados())

# ===== HORÁRIOS =====
schedule.every().day.at("09:00").do(tarefa)
schedule.every().day.at("16:30").do(tarefa)

print("Bot iniciado. Aguardando horários...")

while True:
    schedule.run_pending()
    loop.run_until_complete(asyncio.sleep(0))
    time.sleep(1)
