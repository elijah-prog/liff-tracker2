{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import fetch from "node-fetch";\
\
export default async function handler(req, res) \{\
  if (req.method === "POST") \{\
    const \{ userId, utm \} = req.body;\
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;\
\
    await fetch("https://api.line.me/v2/bot/message/push", \{\
      method: "POST",\
      headers: \{\
        "Content-Type": "application/json",\
        "Authorization": "Bearer " + token\
      \},\
      body: JSON.stringify(\{\
        to: userId,\
        messages: [\{ type: "text", text: "Source: " + utm \}]\
      \})\
    \});\
\
    return res.status(200).send("OK");\
  \}\
  res.status(405).send("Method Not Allowed");\
\}}