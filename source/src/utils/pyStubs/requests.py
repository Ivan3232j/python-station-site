"""Учебная копия requests: отвечает готовыми примерами без доступа в интернет."""

class RequestException(Exception):
    pass

class _Exceptions:
    RequestException = RequestException

exceptions = _Exceptions()
_dog_number = 0

class Response:
    def __init__(self, text="", data=None, content="", status_code=200):
        self.text = text
        self._data = data if data is not None else {}
        self.content = content
        self.status_code = status_code

    def json(self):
        return self._data

    def raise_for_status(self):
        if self.status_code >= 400:
            raise RequestException("Сервис вернул ошибку " + str(self.status_code))

def get(url, params=None, timeout=None, **kwargs):
    global _dog_number
    address = str(url)
    options = params if params is not None else {}

    if "wttr.in" in address:
        city = address.split("wttr.in/", 1)[1].split("?", 1)[0]
        if "OFFLINE" in city.upper():
            raise RequestException("Нет связи со станцией")
        if "j1" in str(options.get("format", "")):
            return Response(data={"weather": [
                {"mintempC": "-5", "maxtempC": "-1"},
                {"mintempC": "-3", "maxtempC": "2"},
                {"mintempC": "0", "maxtempC": "4"},
            ]})
        if "абырвалг" in city.lower() or "несуществ" in city.lower():
            return Response(text="Unknown location")
        return Response(text="-3°C|Пасмурно")

    if "dog.ceo/api/" in address:
        if "/breed/" in address:
            breed = address.split("/breed/", 1)[1].split("/", 1)[0]
        else:
            breeds = ["husky", "pembroke", "pug", "shiba", "samoyed", "dalmatian"]
            breed = breeds[_dog_number % len(breeds)]
            _dog_number += 1
        return Response(data={
            "message": "https://images.dog.ceo/breeds/" + breed + "/n02110185_1469.jpg",
            "status": "success",
        })

    if "images.dog.ceo" in address:
        return Response(content=address)

    return Response(text="", status_code=404)
