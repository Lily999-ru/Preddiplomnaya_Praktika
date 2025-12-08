# Preddiplomnaya_Praktika
1.	Перед запуском, убедитесь что в папке «med_classifier_app» есть папка с обученной моделью «model» - в ней должно быть 6 файлов (config.json, model.safetensors, special_tokens_map.json, tokenizer_config.json, tokenizer.json, vocab.txt) Эту папку вы можете скачать тут: https://drive.google.com/drive/folders/1jZOKkSLt_qcuTjt35xWyC1zMljJ3nypv?usp=sharing 
2.	Открыть терминал в нужной папке (Можно просто открыть терминал и перетащить туда папку «med_classifier_app»).
3.	Создать виртуальное окружение:
python3 -m venv venv
4.	Активировать:
source venv/bin/activate
5.	Установить все необходимые библиотеки
pip install -r requirements.txt
6.	Запустить приложение:
python app.py
7.	После запуска появится что-то вроде:
* Running on http://127.0.0.1:5000
8.	Перейди по этому адресу в браузере
<img width="468" height="475" alt="image" src="https://github.com/user-attachments/assets/10368f89-be0c-4364-8721-00f6e7bdf238" />
